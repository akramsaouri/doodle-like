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
            footer
        });
    }
});
