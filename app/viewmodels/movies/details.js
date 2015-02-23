define(function(require) {
    var app = require('durandal/app'),
        ko = require('knockout'),
        router = require('plugins/router'),
        moviesData = require('data/moviesData');
    return {
        movieToShow: {
            id: ko.observable(),
            title: ko.observable(),
            director: ko.observable(),
            year: ko.observable(),
            rating: ko.observable(),
            description: ko.observable()
        },
        
        activate: function (context) {
            //Get movie from database
//            console.log('Value: ' + context);
            var movie = moviesData.getMovie(context);
            
            //Add movie to view model
            this.movieToShow.id(movie.id);
            this.movieToShow.title(movie.title);
            this.movieToShow.director(movie.director);
            this.movieToShow.year(movie.year);
            this.movieToShow.rating(movie.rating);
            this.movieToShow.description(movie.description);
            console.log('Result: ' + this.movieToShow.id.value);
        },
    };
});