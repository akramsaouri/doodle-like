import {
    Session
} from 'meteor/session';

import {
    validateFields
} from '/lib/helpers';

Template.time.helpers({
    date() {
        return Session.get('date');
    }
});

Template.time.rendered = () => {
    Session.setDefault('date', null);
    $('#my-datepicker').datepicker();
    $(".select2-element").select2();
};


Template.time.events({
    'changeDate #my-datepicker' (e) {
        Session.set('date', e.format());
    },
    'click #next' (e) {
        const from = $('#from').val();
        const to = $('#to').val();
        const ranges = $('#ranges').val();
        const date = Session.get('date');
        if (date === null || ((!validateFields(from, to)) && ranges === null)) {
            sAlert.error('Some fields are required.');
            return e.preventDefault();
        }
        Session.set('time', {
            date,
            from,
            to,
            ranges
        });
    }
});
