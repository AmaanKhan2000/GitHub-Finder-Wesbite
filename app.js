const github = new GitHub();
const ui = new UI();

// Search User Input
const searchUser = document.getElementById('searchBtn');

// Event Listener to searchUser 

searchUser.addEventListener('click', (e) => {
  const userText = document.getElementById('searchUser').value;
  if(userText !==''){
    github.getUsers(userText)
    .then(data => {
      if(data.profile.message==='Not Found'){
        // Show Alert
        ui.showAlert('Profile Not Found', 'alert alert-danger')
      }else{
        // Display Profile
        ui.showUser(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else {
    // Clear Users
    ui.clearUser()
  }
});