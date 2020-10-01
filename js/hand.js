const landingPage = function(){
    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: ["Hello, We have been expecting you.Let us deliver fresh fruits to you."],
            typeSpeed: 3,
            loop: true
        });
    }
    return {
		typeAnimation: typeAnimation
	}

}()

landingPage.typeAnimation();

