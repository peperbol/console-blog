(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'body',
      templateUrl: 'views/app.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
