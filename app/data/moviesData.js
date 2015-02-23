define(function (require) {
    return {
        _lastId: 2,
        _movies: [
            {
                id: 0,
                title: 'The SpongeBob Movie: Sponge Out of Water',
                director: 'Paul Tibbitt',
                description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for the death of his brother.',
                year: 2015,
                rating: 6.8
            },
            {
                id: 1,
                title: 'Fast & Furious 7',
                director: 'James Wan',
                description: 'When a diabolical pirate above the sea steals the secret Krabby Patty formula, SpongeBob and his nemesis Plankton must team up in order to get it back.',
                year: 2015,
                rating: 'N/A'
            },
            {
                id: 2,
                title: 'Big Hero 6',
                director: 'Don Hall, Chris Williams',
                description: 'The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.',
                year: 2014,
                rating: 8.0
            }
        ],
        
        indexMovies: function () {
            return this._movies;
        },
        
        addMovies: function (movieToAdd) {
            movieToAdd.id = ++this._lastId;
            this._movies.push(movieToAdd);
        },
        
        getMovie: function (id) {
            for(var i = 0; i < this._movies.length; i++) {
                if(this._movies[i].id == id) {
                    return this._movies[i];
                    break;
                }
            }
        }
    }
});