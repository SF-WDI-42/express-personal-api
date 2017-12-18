$(document).ready(function() {
  console.log('app.js loaded!');

  // make a GET request for all ski runs
  $.ajax({
    method: 'GET',
    url: '/api/skiruns',
    success: onSuccess,
    error: function handleError (data) {
      console.log("oops error " + data);
    }
  });

function onSuccess (skiruns) {
  skiruns.forEach(function(skirun) {
    renderSkiRun(skirun);
  });
};

// this function takes a single ski run and renders it to the page
function renderSkiRun(skirun) {
  // HTML template string for each run
  var skiRunHtml = 
  `
    <!-- one ski run -->
    <div class="row ski-run">

      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">

          <!-- begin ski run internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail ski-run-art">
                <img src="http://www.letsplaywithbrigands.com/wp-content/uploads/2016/04/Let%E2%80%99s-Play-Ski-Free.png" alt="ski run image">
              </div>

              <div class="col-md-9 col-xs-12">
                <ul class="list-group">

                  <li class="list-group-item">
                    <h4 class='inline-header'>Ski Resort:</h4>
                    <span class='resort'>${ skirun.resort }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Trail Name:</h4>
                    <span class='ski-trail'>${ skirun.skiTrail }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Run Rating:</h4>
                    <span class='run-rating'>${ skirun.runRating }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Skier Ability:</h4>
                    <span class='run-rating'>${ skirun.skierAbility }</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Run Conditions:</h4>
                    <span class='run-rating'>${ skirun.runCondition }</span>
                  </li>
                </ul>
              </div>

            </div>
            <!-- end of ski run internal row -->

          </div>

        </div>

      </div>

    </div>
    <!-- end one ski run -->`;

  // render HTML template in the DOM
  $('#ski').prepend(skiRunHtml);
}


$('#add-run').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/skiruns',
      data: $(this).serialize(),
      success: newSkiRunSuccess,
      error: function newSkiRunError(data) {
        console.log("error adding run " + data);
      }
    });
  });

function newSkiRunSuccess(json) {
  

}


// --> ending for document.ready
});
