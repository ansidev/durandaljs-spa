define(['knockout'], function(ko) {
    return {
        pageTitle: 'Sign up',
        username: ko.observable(),
        email: ko.observable(),
        password: ko.observable(),
        confirmpassword: ko.observable(),
        signup: function() {
            alert('Your information has been submitted!');
            //Handle form submit here
        }
    };
});