define(function (require) {
    var ko = require('knockout');
    var moviesData = require("data/moviesData");
    
    return {
        movies: ko.observable(),
        
        activate: function() {
            this.movies(moviesData.indexMovies());
        }
    }
});