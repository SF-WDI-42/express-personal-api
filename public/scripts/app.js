console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  var $p_id;

  $("#addProject").fadeOut();
  $("#addVacation").fadeOut();

  $('ul.nav li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    if(($(this).context.textContent)=="About") {
      $("#addProject").fadeOut();
      $.ajax({
       method:"GET",
       url:'/api/profile',
       success:function(data){
         renderAbout(data);
       },
       error: function(err){
         console.log("ajax call failed for About Section",err);
       }
      });

      function renderAbout(data){
        $("#results").empty();
        $("#results").append(
         ` <div class="row">
           <div class="col-sm-4">
              <img class="imgContent" style="width:60%" src="images/Pro.jpg" >
            </div>
           <div class="col-sm-8">
             <p class="p_spacing"> Name : ${data[0].name} </p>
             <p class="p_spacing"> GitHub UserName: ${data[0].githubUserName} </p>
             <p class="p_spacing"> GitHub Link: <a href="${data[0].gitHubLink}"> Click Here! </a> </p>
             <p class="p_spacing"> Current City : ${data[0].currentcity} </p>
             <p class="p_spacing"> Hobbies : ${data[0].hobbies} </p>
           </div>
           </div>
         `
       );
     }
    } else if(($(this).context.textContent)==="My Work") {
     $("#addProject").fadeIn();
     $("#addVacation").fadeOut();

     $.ajax({
       method:"GET",
       url:'/api/profile/projects',
       success:function(data){
         $p_id=data[0]._id;
         $("#results").empty();
         renderAllProjects(data);
       },
       error: function(err){
         console.log("ajax call failed for My Work",err);
       }
     });
   } else if(($(this).context.textContent)==="Vacation") {
    $("#addProject").fadeOut();
    $("#addVacation").fadeIn();

    $.ajax({
      method:"GET",
      url:`/api/profile/${$p_id}/vacation`,
      success:function(data){
        $("#results").empty();
        renderAllVacation(data);
      },
      error: function(err){
        console.log("ajax call failed for Vacation",err);
      }
    })
   }

   function renderAllVacation(data){
     for(i=0;i<data[0].vacation.length;i++){
       $("#results").append(
           ` <div class="row">
             <div class="col-md-12 content-div">
               <p> <h3> Place : ${data[0].vacation[i].place}</h3> </p>
               <p> <h3> Top Destination Points :</h3> <h4> ${data[0].vacation[i].topdestinationPoints} <h4> </p>
               <p> <h3> Travel Period :</h3> <h4> ${data[0].vacation[i].travelPeriod} <h4> </p>
               <hr>
             </div>
             </div>
        `)
     }
   }
   function renderAllProjects(data){
     for(i=0;i<data[0].projects.length;i++){
     $("#results").append(
         ` <div class="row">
           <div class="col-md-12 content-div">
             <p> <h3> Title : ${data[0].projects[i].name}</h3> </p>
             <p> <h3> Description :</h3> <h4> ${data[0].projects[i].description} <h4> </p>
             <p> <h4> <a href="${data[0].projects[i].project_url}"> Click Here for Project URL! </a>  </h4> </p>
             <p> <h4> <a href="${data[0].projects[i].image_url}" > Screenshot </a> </h4>  </p>
             <button class="deleteBtn btn btn-danger pull-right" data-profileid=${data[0]._id} data-projid=${data[0].projects[i]._id}>Delete Project</button>
             <hr>
           </div>
           </div>
      `)
    }
   }

  });


  $('#form1').submit(function(){
    var url_link=`/api/profile/${$p_id}/projects`;

    var data=$(this).serialize();

  $.ajax({
    method:'POST',
    url:url_link,
    success:saveNewProject,
    data:data,
    error:function(err){
      if(err){
        console.log("Error in posting new project",err)
      }
    }
  })
  });

  $('#form2').submit(function(){
    var url_link=`/api/profile/${$p_id}/vacation`;

    var data=$(this).serialize();

  $.ajax({
    method:'POST',
    url:url_link,
    success: saveNewVacationPlan,
    data:data,
    error:function(err){
      if(err){
        console.log("Error in posting new vacation plan",err)
      }
    }
  })
  });

  function  saveNewVacationPlan(data){
      alert("Saved New Vacation Plan Successfully");
  }

  function saveNewProject(data){
    alert("Saved New Project Successfully");
  }
  
  $("#results").on('click', '.deleteBtn', function() {
    var delete_link= `/api/profile/${$(this).attr('data-profileid')}/projects/${$(this).attr('data-projid')}`;
    $.ajax({
      method: 'DELETE',
      url:delete_link,
      success: function(data){
        console.log("deleted data ",data);
      },
      error: function(err){
        console.log(err);
      }
    });
  })

});
