const header = "header",
    footer = "footer";

FlowRouter.route('/', {
    action: () => {
        BlazeLayout.render('layout', {
            header,
            main: "home",
            footer
        });
    }
});

FlowRouter.route('/settings', {
    action: () => {
        BlazeLayout.render('layout', {
            header,
            main: "settings",
            step : "general",
            footer
        });
    }
});

FlowRouter.route('/settings/time', {
    action: () => {
        BlazeLayout.render('layout', {
            header,
            main: "settings",
            step : "time",
            footer
        });
    }
});

FlowRouter.route('/settings/invite', {
    action: () => {
        BlazeLayout.render('layout', {
            header,
            main: "settings",
            step : "invite",
            footer
        });
    }
});
