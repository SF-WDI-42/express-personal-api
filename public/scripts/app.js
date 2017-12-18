console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
    method: 'GET',
    url: '/api/projects',
    success: handleSuccess,
    error: handleError
  });

});
