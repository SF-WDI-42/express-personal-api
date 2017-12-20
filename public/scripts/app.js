console.log("Sanity Check: JS is working!");

let sampleProjects = [{
  name: 'Sample Project Name 1',
  date: 'Sample Date 1',
  genres1: [ 'Genre 1.1', 'Genre 1.2', 'Genre 1.3']
}, {
  name: 'Sample Project Name 2',
  date: 'Sample Date 2',
  genres: [ 'Genre 2.1', 'Genre 2.2', 'Genre 2.3']
}];

$(document).ready(function(){

  $.ajax({
    method: 'GET',
    url: '/api/projects',
    success: handleSuccess,
    error: handleError
  });

// Submit button for new projects
  $('#project-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();

    $.post('/api/projects', formData, function(project) {
      renderProject(project);
    })

    // reset form input values after formData has been captured
    $(this).trigger("reset");
  });


// DELETE project button
  $('#projects').on('click', '.delete-project', function(e) {
    var id = $(this).closest('.project').data('project-id');
    console.log('id', id);

    $.ajax({
      url: '/api/projects/' + id,
      type: 'DELETE',
      success: function(result) {
        $('[data-project-id=' + id + ']').remove();
      }
    });
  });

}); ///End

$('#projects').on('click', '.edit-project', handleProjectEditClick);
$('#projects').on('click', '.save-project', handleProjectSaveClick);



// EDIT BUTTON for PROJECT is clicked
function handleProjectEditClick(e) {
  var $projectRow = $(this).closest('.project');
  var projectId = $projectRow.data('project-id');
  console.log('projectId to edit', projectId);

  // show 'Save Changes' button
  $projectRow.find('.save-project').toggleClass('hidden');
  // hide 'Edit' button
  $projectRow.find('.edit-project').toggleClass('hidden');

  // get project name and replace its field with an input element
  var projectName = $projectRow.find('span.project-name').text();
  $projectRow.find('span.project-name').html('<input class="edit-project-name" value="' + projectName + '"></input>');

  // get the artist name and replace its field with an input element
  var artistName = $projectRow.find('span.artist-name').text();
  $projectRow.find('span.artist-name').html('<input class="edit-artist-name" value="' + artistName + '"></input>');

  // get the releasedate and replace its field with an input element
  var releaseDate = $projectRow.find('span.project-releaseDate').text();
  $projectRow.find('span.project-releaseDate').html('<input class="edit-project-releaseDate" value="' + releaseDate + '"></input>');
}


function handleProjectSaveClick() {
  var projectId = $(this).parents('.project').data('project-id'); // $(this).closest would have worked fine too
  var $projectRow = $('[data-project-id=' + projectId + ']');

  var data = {
    name: $projectRow.find('.edit-project-name').val(),
    artistName: $projectRow.find('.edit-artist-name').val(),
    releaseDate: $projectRow.find('.edit-project-releaseDate').val()
  };

  console.log('PUTing data for project', projectId, 'with data', data);

  $.ajax({
    method: 'PUT',
    url: '/api/projects/' + projectId,
    data: data,
    success: handleProjectUpdatedResponse
  });
}


//RENDER SINGLE PROJECT TO PAGE
unction renderProject(project) {
  // list songs along with each project
  var formattedSongsList = project.songs.map(function(song) {
    return `- (${ song.trackNumber }) ${ song.name }`;
  });
  var formattedSongsStr = formattedSongsList.join(', ');

  // HTML template string for each project
  var projectHtml = `
    <!-- one project -->
    <div class="row project" data-project-id=${ project._id }>

      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">

          <!-- begin project internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail project-art">
                <img src="../images/800x800.png" alt="project image">
              </div>

              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Project Name:</h4>
                    <span class='project-name'>${ project.name }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Artist Name:</h4>
                    <span class='artist-name'>${ project.artistName }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Released date:</h4>
                    <span class='project-releaseDate'>${ project.releaseDate }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class="inline-header">Songs:</h4>
                    <span>${ formattedSongsStr }</span>
                  </li>
                </ul>
              </div>

            </div>
            <!-- end of project internal row -->

            <div class='panel-footer'>
              <button class='btn btn-primary add-song'>Add Song</button>
              <button class='btn btn-info edit-songs'>Edit Songs</button>
              <button class='btn btn-danger delete-project'>Delete Project</button>
              <button class='btn btn-info edit-project'>Edit Project</button>
              <button class='btn btn-info save-project hidden'>Save Changes</button>
            </div>

          </div>

        </div>

      </div>

    </div>
    <!-- end one project -->
  `;

  // render HTML template in the DOM
  $('#projects').prepend(projectHtml);
}
