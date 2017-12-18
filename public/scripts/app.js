console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log("Document has loaded!")


  let successPostAlert = `<div class="alert alert-success" role="alert">Contact successfully added!</div>`
  let errorAlert = `<div class="alert alert-danger" role="alert">Oops! Something went wrong!</div>`

  $.ajax({
    method: 'GET',
    url: '/api/contacts',
    success: onSuccess,
    error: onError
  });

  $('#addContact').on('click', function(e) {
    $('#contactModal').modal(); //triggers modal
    console.log("modal open!")
      $('form').on('submit', function(e) {
        e.preventDefault();
        console.log("button clicked");
        $.ajax({
          method: 'POST',
          url: '/api/contacts',
          data: $('form').serialize(),
          success: onPostSuccess,
          error: onError
      });
    });
  });

  $("#contactsTarget").on('click', '.deleteButton', function() {
    console.log("button clicked!")
    $.ajax({
      method: 'DELETE',
      url: '/api/contacts/'+$(this).attr('data-id'),
      success: deleteContactSuccess,
      error: onError
    });
  });

  function renderContact(contact) {
    let myContact = `<div class="card p-3" data-id="${contact._id}">
      <blockquote class="blockquote">
        <p><i class="far fa-user"></i> ${contact.name}</p>
        <p><i class="fas fa-phone"></i> ${contact.phoneNumber}</p>
        <p><i class="far fa-envelope"></i> ${contact.email}</p>
        <p><i class="fas fa-birthday-cake"></i> ${contact.birthday}</p>
      </blockquote>
      <div class="card-footer">
        <button type="button" class="btn btn-light editButton"><i class="far fa-edit fa-lg"></i></button>
        <button type="button" class="btn btn-light deleteButton"><i id="delete" class="far fa-trash-alt fa-lg"></i></button>
      </div>
    </div>`
    $('.card-columns').prepend(myContact);
  };

  function onSuccess(contactsData) { //success in loading all contacts
    console.log(contactsData);
    contactsData.forEach(function(contact){
      renderContact(contact);
    });
  };

  function onPostSuccess(newContact) {  //success in posting new contact
    renderContact(newContact);
    $(".alerts").empty().append(successPostAlert);
  };

  function deleteContactSuccess(deletedContact) { // success in deleting contact
    console.log(deletedContact);
  };

  function onError(err) {
    console.log('There has been an error: ', err)
    $(".alerts").empty().append(errorAlert);
  };







}); //end of document.ready
