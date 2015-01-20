
  Router.map(function() {
  this.route('pitch', {path:'/'});
  this.route('newMember', {path: '/registro'});
  }
  );

  Template.pitch.events({
    'click button': function () {
      // increment the counter when button is clicked
      Router.go('newMember');
    }
  });
