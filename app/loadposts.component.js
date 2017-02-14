(function(app) {
  app.LoadPostsComponent =
    ng.core.Component({
      selector: '.loadpostscomponent',
      templateUrl: 'views/loadposts.html',
      inputs: [
          'data'
        ]
    })
    .Class({
      constructor: [
        function() {}
      ],
      clickPost: function(index){
        this.data.selectedPost = index;
        this.selectPost();
      },
      selectPost: function(){
        console.log(this.data.selectedPost);
        this.data.displayposts = true;
      },
      compare: function(a, b){
        return a==b;
      },
      onKey: function(e){
        console.log(e);
        if(e.key == "ArrowDown"){
          this.data.selectedPost++;
          this.data.selectedPost %= this.data.posts.length;
        }else if(e.key == "ArrowUp"){
          this.data.selectedPost--;
          this.data.selectedPost %= this.data.posts.length;
        }else if(e.key == "Enter"){
          this.selectPost();
        }
      }
    });
})(window.app || (window.app = {}));
