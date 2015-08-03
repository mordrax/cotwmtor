Router.route('/', 'main');

Template.main.onRendered(function () {
    Meteor.setTimeout(function () {$('#subtitle').addClass('fadein');}, 1000);
});


