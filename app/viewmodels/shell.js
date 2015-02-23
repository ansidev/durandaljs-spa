define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'sign-up', title:'Sign up', moduleId: 'viewmodels/signup', nav: true },
                { route: 'movies/index', title:'Movies', moduleId: 'viewmodels/movies/index', nav: true },
                { route: 'movies/add', title: 'Add movie', moduleId: 'viewmodels/movies/add', nav: false },
                { route: 'movies/details/:id', title: 'Movie details', moduleId: 'viewmodels/movies/details', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});