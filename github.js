class Github {
   constructor() {
      this.client_id = 'e8b1c629b9601894ddaf';
      this.client_secret = 'cbebc37be1a24661c5ac84db41e9e53b79525005';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      //gives JSON data
      const profileData = await profileResponse.json();

      return {
         profile: profileData
      }
   }
}