import {
    Session
} from 'meteor/session';

import {
    validateFields
} from '/lib/helpers';

import {
    Polls
} from '/lib/collection';

Template.invite.helpers({
    emails() {
        return Session.get('emails');
    }
});

Template.invite.rendered = () => {
    Session.setDefault('emails', []);
};

Template.invite.events({
    'click #finish' (e) {
        const message = $('#message').val();
        const emails = Session.get('emails');
        if (emails.length === 0) {
            sAlert.error('you need to enter at least one participant email');
            return e.preventDefault();
        }
        Session.set('invite', {
            emails,
            message
        });

        // insert the poll into the database
        const poll = Object.assign(Session.get('general'), Session.get('time'), Session.get('invite'));
        console.log(poll);
        Polls.insert(poll);

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
    },
    'click #remove' (e) {
        const emails = Session.get('emails')
            .filter(e => e !== String(this));
        Session.set('emails', [...new Set([...emails])]);
    }
});
