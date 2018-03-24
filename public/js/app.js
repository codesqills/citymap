/* firebase */
var config = {
    apiKey: "AIzaSyBheH3yL4aLRiSCn2bE84PAfuo8Z6O6azQ",
    authDomain: "interactivecitymap-7ab57.firebaseapp.com",
    databaseURL: "https://interactivecitymap-7ab57.firebaseio.com",
    projectId: "interactivecitymap-7ab57",
    storageBucket: "",
    messagingSenderId: "23051393128"
  };
  firebase.initializeApp(config);

  firebase.auth.Auth.Persistence.LOCAL;

/* loading of logi dialog */
$(function(){
    $('#exampleModal').modal('show');
   });

/* Login button clicked */

$('#login-button').click(function(){
    var emailaddress=$('#email').val();
    var password=$('#password').val();

    var login_result=firebase.auth().signInWithEmailAndPassword(emailaddress,password);

    login_result.catch(function(error){
            var login_errorcode=error.code;
            var login_errormessage=error.message;

            console.log(login_errorcode);
            console.log(login_errormessage);
    })
});