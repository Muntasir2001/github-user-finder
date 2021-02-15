//?client_id=${this.client_id}&client_secret=${this.client_secret}

class Github {
   constructor() {
      this.client_id = '';
      this.client_secret = '';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}`);

      //gives JSON data
      const profileData = await profileResponse.json();

      return {
         profile: profileData
      }
   }
}