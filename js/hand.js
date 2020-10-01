const landingPage = function(){
    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: ["we have been expecting you.Let us deliver fresh fruits to you."],
            typeSpeed: 9,
            loop: true
        });
    }
    return {
		typeAnimation: typeAnimation
	}

}()

landingPage.typeAnimation();

