Template.settings.helpers({
    breadcrumbs() {
        const pages = ['General', 'Time', 'Invite'];
        return pages.map(p => {
            return ('/settings/' + p.toLocaleLowerCase() === FlowRouter.current().path) ?
                `<li class="active">${p}</li>` :
                `<li><a href="#">${p}</a></li>`;
        }).join('');
    }
});
