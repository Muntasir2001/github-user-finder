//getting ref to all the necessary HTML elements
const searchUserBtn = document.querySelector('#search-btn');
const searchUserForm = document.querySelector('form');
const searchUserInput = document.querySelector('.user-input');

//init github
const github = new Github;

//init ui
const ui = new UI;

//search form event listener
searchUserForm.addEventListener('submit', (e) => {
   //prevent default
   e.preventDefault();

   //get input text
   const text = searchUserInput.value;

   if (text !== '') {
      console.log(text);

      //make http call
      //for getting user and user bio
      github.getUser(text)
         .then(data => {
            if (data.profile.message === 'Not Found') {
               //show alert - ui.js
               ui.showAlert('User not found');
            } else {
               //show profile ui.js
               ui.showProfile(data.profile);
               ui.showRepo(data.repos);
            }
         })

   } else {
      //clear profile
   }

});