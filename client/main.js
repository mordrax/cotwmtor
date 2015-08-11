Router.route('/', 'main');

// fade in sub after page has rendered
Template.main.onRendered(function () {
    Meteor.setTimeout(function () {$('#subtitle').addClass('fadein');}, 1000);
});