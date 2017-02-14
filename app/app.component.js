(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'body',
      templateUrl: 'views/app.html',
      inputs: [
        'data'
      ]
    })
    .Class({
      constructor: [
        ng.http.Http,
        function(Http) {
          this.data = {};
          this.data.posts = [];
          this.data.selectedPost = 0;
          this.data.loaded = false;
          this.data.displayposts = false;
          this.http = Http;
          this.getPosts();
        }
      ],
      getPosts: function(){
        var data =this.data;
        return this.http.get("data/posts.json")
              .toPromise()
              .then(function( dataresult ) {
                data.loaded = true;
                data.posts = dataresult.json().posts;
              })
              .catch(function( error ) {
                console.log(error);
              });
      }
    });
})(window.app || (window.app = {}));
