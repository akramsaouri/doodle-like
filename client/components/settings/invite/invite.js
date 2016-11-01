import {
    Session
} from 'meteor/session';


Template.invite.events({
    'click #finish' (e) {
        const email = $('#email').val();
        const message = $('#message').val();
        if (email.length === 0)
            return sAlert.error('you need to enter at least one participant email');
        Session.set('invite', {
            email,
            message
        });
        console.log(Session.get('general'));
        console.log(Session.get('time'));
        console.log(Session.get('invite'));
        alert('done');
    }
    // TODO: Dynamically add new emails
});
