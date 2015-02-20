define(['knockout'], function(ko) {
    return {
        displayName: 'Sign up',
        username: ko.observable(),
        email: ko.observable(),
        password: ko.observable(),
        confirmpassword: ko.observable(),
        signup: function() {
            alert('Your information has been submitted!');
            //Handle form submit here
        }
    }
})