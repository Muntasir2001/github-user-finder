class UI {
   constructor() {
      this.profile = document.getElementById('profile');
   }

   showProfile(user) {
      this.profile.style.border = '2px solid #E3E3E3';
      this.profile.innerHTML = `
         <div class="profile-left">
            <img src="${user.avatar_url}" alt="User's avatar">
            <a href="https://github.com/${user.login}" target="_blank">
               <img src="./img/github.svg" alt="Github logo">
               <p>View profile</p>
            </a>
         </div>
         <div class="profile-right">
            <div class="profile-right-bio">
               <div class="name">
                  <p class="profile-about-title">Name:</p>
                  <p class="profile-about">${user.name}</p>
               </div>
               <div class="bio">
                  <p class="profile-about-title">Bio:</p>
                  <p class="profile-about">${user.bio}</p>
               </div>
               <div class="location">
                  <p class="profile-about-title">Location:</p>
                  <p class="profile-about">${user.location}</p>
               </div>
               <div class="member-since">
                  <p class="profile-about-title">Member since:</p>
                  <p class="profile-about">${user.created_at}</p>
               </div>
            </div>
            <div class="profile-right-tags">
               <div class="tag repo-tag">
                  <p class="tag-title">Public repo:</p>
                  <p class="tag-content">${user.public_repos}</p>
               </div>
               <div class="tag follower-tag">
                  <p class="tag-title">Followers:</p>
                  <p class="tag-content">${user.followers}</p>
               </div>
               <div class="tag following-tag">
                  <p class="tag-title">Following:</p>
                  <p class="tag-content">${user.following}</p>
               </div>
            </div>
         </div>
      `;
   }

   showAlert(mssg) {
      this.profile.style.border = 'none';
      this.profile.innerHTML = `
      <div class="container warning">
         <h5 class="warn-text">${mssg}</h5>
      </div>
      `;
   }
}