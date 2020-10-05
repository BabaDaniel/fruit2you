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
    let nameRegex = /^[a-zA-Z\-]+$/
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
                var db = firebase.firestore();
                var name = firstName+" "+lastName;
                var fullName = name.toUpperCase();
                db.collection("users").doc(user.uid).set({email: email,fName: fullName,phone: phoneNumber})
                    .then(function(docRef) {
                    //console.log("Document written with ID: ", docRef.id);
                     window.location = 'index.html'; //After successful login, user will be redirected to home.html
                })
                    .catch(function(error) {
                    window.alert("something went wrong, please try again");
                    return false;
                });
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
                window.location = 'index.html'; //After successful login, user will be redirected to home.html
            }
        });
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location = 'index.html';
    }).catch(function(error) {
        // An error happened.
        window.alert("please try again");
    });
}


function checkUserState(){
    firebase.auth().onAuthStateChanged(user => {
            if(user) {
                document.getElementById("loginorprofile").innerHTML="<a class='nav-link' style='color: #184d47; font-weight: 500;' href='profile.html'>Profile</a>";
                document.getElementById("registerorlogout").innerHTML="<a class='nav-link' style='color: #184d47; font-weight: 500;' href='javascript:logout()'>Logout</a>";
            }
        else{
            document.getElementById("loginorprofile").innerHTML ="<a class='nav-link' href='login.html' style='color:  #184d47; font-weight: 500;' >Login</a>";
            document.getElementById("registerorlogout").innerHTML="<a class='nav-link' style='color: #184d47; font-weight: 500;' href='register.html'>Register</a>";
        }
        });
}


function checkUserStateOnRegisterAndLoginPages(){
    firebase.auth().onAuthStateChanged(user => {
            if(user) {
                window.location = 'index.html';
            }
        });
}



function getProfileDetails(){
    firebase.auth().onAuthStateChanged(user => {
            if(user) {
                var db = firebase.firestore();
                var docRef = db.collection("users").doc(user.uid);
                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        //console.log("Document data:", doc.data());
                        var fullName = doc.data().fName;
                        var nameArray = fullName.split(" ");
                        document.getElementById("inputFirstName").value = nameArray[0];
                        document.getElementById("inputLastName").value = nameArray[1];
                        document.getElementById("inputEmail4").value = doc.data().email;
                        document.getElementById("inputPhone").value = doc.data().phone;
                        //firebase.auth().sendPasswordResetEmail('emuolao@gmail.com');
                    } 
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            }
        else{
            window.location = 'login.html';
        }
        })
    

}






