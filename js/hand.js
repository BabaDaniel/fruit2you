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
    var firstName = document.getElementById("firstName").value;
    console.log(firstName)
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    
    if (nameRegex.test(firstName)==false){
        window.alert("Please enter your firstname");
        return false;
    }
    
    if (nameRegex.test(lastName)==false){
        window.alert("Please enter your lastname");
        return false;
    }
    
    if (phoneRegex.test(phoneNumber)==false){
        window.alert("Please enter your phone number starting with 0");
        return false;
    }
    
}





