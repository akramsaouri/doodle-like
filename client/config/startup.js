Meteor.startup(function() {
    sAlert.config({
        effect: '',
        position: 'bottom-right',
        timeout: 2000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0,
        beep: false,
        onClose: _.noop
    });
});
