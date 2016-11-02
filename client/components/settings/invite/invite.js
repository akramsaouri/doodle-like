import {
    Session
} from 'meteor/session';

import {
    validateFields
} from '/lib/helpers';

Template.invite.rendered = () => {
    Session.setDefault('emails', []);
};

Template.invite.events({
    'click #finish' (e) {
        const email = $('#email').val();
        const message = $('#message').val();
        // if (Session.get('emails').length === 0){
        //   sAlert.error('you need to enter at least one participant email');
        //   return e.preventDefault();
        // }
        console.log(Session.get('emails'));
        Session.set('invite', {
            email,
            message
        });
        // console.log(Session.get('general'));
        // console.log(Session.get('time'));
        // console.log(Session.get('invite'));
        alert('done');
        return e.preventDefault();
    },
    'keydown #email' (e) {
        const email = $('#email').val();
        if (e.which === 13) {
            if (!validateFields(email))
                return e.preventDefault();
            const emails = Session.get('emails');
            emails.push(email);
            Session.set('emails', [...new Set([...emails])]);
            $('#email').val('');
        }
    }
    // TODO: HERE
    // TODO: Dynamically add new emails
});
