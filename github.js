//?client_id=${this.client_id}&client_secret=${this.client_secret}

class Github {
   constructor() {
      this.client_id = '';
      this.client_secret = '';
      this.repos_count = 10;
      this.repos_sort = 'created: asc';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}`);
      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

      //gives JSON data
      const profileData = await profileResponse.json();
      //gives repo
      const repoData = await reposResponse.json();

      return {
         profile: profileData,
         repos: repoData
      }
   }
}