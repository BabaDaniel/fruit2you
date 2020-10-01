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
    let nameRegex = /^[\\p{L} .'-]+$/
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    
    if (firstName.length<1){
        window.alert("Please enter your name");
    }
}





