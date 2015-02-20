var ctor = {
    loggedIn: ko.observable(false),
    username: ko.observable(),
    register: function(username, email, password) {
        var deferred = $.Deferred();
        var user = new Parse.User();
        user.set("username", username);
        user.set("email", email);
        user.set("password", password);
        user.signUp(null, {
            success: deferred.resolve,
            error: deferred.reject
        });
    },
    login: function(username, password) {
    },
    current: function() {
    },
    logout: function() {
    }
};