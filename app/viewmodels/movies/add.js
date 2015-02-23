define(function (require) {
    var app = require('durandal/app'),
        ko = require('knockout'),
        router = require('plugins/router'),
        moviesData = require('data/moviesData');
    
    return {
//        router: router,
        pageTitle: 'Add movie',
        movieToAdd: {
            title: ko.observable(),
            director: ko.observable(),
            year: ko.observable(),
            rating: ko.observable(),
            description: ko.observable()
        },
        
        activate: function () {
            this.movieToAdd.title("");
            this.movieToAdd.director("");
            this.movieToAdd.year("");
            this.movieToAdd.rating("");
            this.movieToAdd.description("");
            this._movieToAdd = false;          
//            console.log('Before: ' + this._movieAdded);
            
        },
        
        canDeactivate: function () {
//            console.log('After: ' + this._movieAdded);
//            console.log(this._movieAdded === false);
            if (this._movieAdded !== true) {
                return app.showMessage('Are you sure want to leave this page?', 'Warning', ['Yes', 'No']);
            } else {
                return true;
            }
        },
        
        addMovie: function () {
//            alert('Started');
            //Add movie to database
            moviesData.addMovies(ko.toJS(this.movieToAdd));
            
            //Flag new movie
            this._movieAdded = true;
            
            //Return to index page
            router.navigate("#movies/index");
        }
    };
});