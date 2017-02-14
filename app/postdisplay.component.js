(function(app) {
  app.PostDisplayComponent =
    ng.core.Component({
      selector: '.postdisplaycomponent',
      templateUrl: 'views/postdisplay.html',
      inputs: [
          'data'
        ]
    })
    .Class({
      constructor: [
        function() {
        }
      ],
      title: function(){
        return this.data.posts[this.data.selectedPost].title;
      },
      text: function(){
        return this.data.posts[this.data.selectedPost].text;
      },
      escape: function(){
        this.data.displayposts = false;
      }
    });
})(window.app || (window.app = {}));
