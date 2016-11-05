import {
    Session
} from 'meteor/session';

import {
    validateFields
} from '/lib/helpers';

Template.general.rendered = () => {
    if (!Session.get('general')) Session.setDefault('general', {});
    const {
        title,
        email,
        name,
        description,
        location
    } = Session.get('general');
    $('#title').val(title);
    $('#email').val(email);
    $('#name').val(name);
    $('#description').val(description);
    $('#location').val(location);
};

Template.general.events({
    'click #next' (e) {
        const title = $('#title').val();
        const location = $('#location').val();
        const description = $('#description').val();
        const email = $('#email').val();
        const name = $('#name').val();
        if (!validateFields(title, email, name)) {
            sAlert.error('Some fields are required.');
            return e.preventDefault();
        }
        Session.set('general', {
            title,
            email,
            name,
            description,
            location
        });
    }
});
