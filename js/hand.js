const landingPage = function(){
    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: ["we have been expecting you.Let us deliver fresh fruits to you."],
            typeSpeed: 1,
            loop: true
        });
    }
    return {
		typeAnimation: typeAnimation
	}

}()

landingPage.typeAnimation();

function validateRegistration(){
    let nameRegex = /^[a-zA-Z ]+$/
    let phoneRegex = /^[0][7-9][0-1]([0-9]{8})$/
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("passwordConfirmation").value;
    
    if (nameRegex.test(firstName)==false){
        window.alert("Please enter your first name");
        return false;
    }
    
    if (nameRegex.test(lastName)==false){
        window.alert("Please enter your last name");
        return false;
    }
    if (emailRegex.test(email)==false){
        window.alert("Please enter your valid email address");
        return false;
    }
    if (phoneRegex.test(phoneNumber)==false){
        window.alert("Please enter your phone number starting with 0");
        return false;
    }
    
    if(password.length<6){
        window.alert("Password should be at least 6 characters");
        return false;
    }
    
    if (password!=confirmPassword){
        window.alert("Passwords do not match");
        return false;
    }
    
    else{
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);//don't forget to remove
            window.alert(errorCode); //don't forget to remove
            var errorMessage = error.message;
            // ...
        });
        
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                window.location = 'index.html'; //After successful login, user will be redirected to home.html
            }
        });

    }
    
}


function loginUser(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        //console.log(errorCode);
        if (errorCode="auth/argument-error"){
            window.alert("Please check details and try again.");
            return false;
        }
        var errorMessage = error.message;
        // ...
    });
    
    firebase.auth().onAuthStateChanged(user => {
            if(user) {
                window.location = 'buy.html'; //After successful login, user will be redirected to home.html
            }
        });
}







