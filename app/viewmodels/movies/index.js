define(function (require) {
    var ko = require('knockout'),
//        router = require('plugins/router'),
        moviesData = require("data/moviesData");
    
    return {
//        router: router,
        movies: ko.observable(),
        
        activate: function() {
            this.movies(moviesData.indexMovies());
//            router.map([
//                { route: 'movies/add', title: 'Add movie', moduleId: 'viewmodels/movies/add', nav: true },
//            ]).buildNavigationModel().activate();

        }
    };
});