console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  console.log("Document has loaded!")


  let successPostAlert = `<div class="alert alert-success" role="alert">Contact successfully added!</div>`

  $.ajax({
    method: 'GET',
    url: '/api/contacts',
    success: onSuccess,
    error: onError
  });



  function renderContact(contact) {

    let myContact = `<div class="card p-3">
      <blockquote class="blockquote">
        <p><i class="far fa-user"></i> ${contact.name}</p>
        <p><i class="fas fa-phone"></i> ${contact.phoneNumber}</p>
        <p><i class="far fa-envelope"></i> ${contact.email}</p>
        <p><i class="fas fa-birthday-cake"></i> ${contact.birthday}</p>
      </blockquote>
      <div class="card-footer">
        <i class="far fa-edit fa-lg"></i>
        <i class="far fa-trash-alt fa-lg"></i>
      </div>
    </div>`
    $('.card-columns').append(myContact);
  };

  function onSuccess(contactsData) { //success in loading all contacts
    console.log(contactsData);
    contactsData.forEach(function(contact){
      renderContact(contact);
    });
  };

  function onError(err) {
    console.log('There has been an error: ', err)
  }


}); //end of document.ready
