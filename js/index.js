//main javascript for website

var navBar, yPos; //user for navBar
var scrollY = 0;
var distance = 40;
var speed = 24;

var previousY; //use to determine bottom of screen

window.addEventListener("scroll", yScroll);

//change header bar on scoll with help of transition in css
function yScroll() {
	var aboutMeY = document.getElementById('aboutMe').offsetTop;
	navBar = document.getElementById('body-navbar-list');
	yPos = window.pageYOffset;
	aboutMeY = aboutMeY - 100;

	if(yPos >= aboutMeY) {
		navBar.style.background = "#1e4073";
		navBar.style.opacity = "1";
		navBar.style.top = "0px";
		navBar.style.padding = ".5%";
		navBar.style.zIndex = 1;

	} else {
		// navBar.style.background = "#000";
		// navBar.style.opacity = "0.4";
		navBar.style.background = "transparent";
		// navBar.style.opacity = "" 
		navBar.style.top = "25px";
		navBar.style.padding = "1%";
	}
}

//single page smooth scrolling
function autoScrollTo(element) {
	
	var currentY = window.pageYOffset; //num of pixels user scrolled down
	var targetY = document.getElementById(element).offsetTop;
	var bodyHeight = document.body.offsetHeight;	
	var yPos = currentY + window.innerHeight;	//height of browser screen without the toolbar etc.
	var animator = setTimeout('autoScrollTo(\''+element+'\')', speed);

	//if(yPos > bodyHeight) {	//if scrolled all the way to bottom
	if(previousY === currentY) {
		clearTimeout(animator);
		previousY = -1;
	
	} else if(currentY < targetY){	//if it is scrolling down
		if(currentY < targetY - distance) { //make sure it doesn't go pass the 
			previousY = currentY;
			scrollY = currentY + distance;	//scrolling 40 pixel for each animation
			window.scroll(0, scrollY);

		} else {
			clearTimeout(animator);
		}

	} else { //if scroll upwards
		if(currentY > targetY- distance) {
			previousY = currentY;
			scrollY = currentY - distance;	//scrolling 40 pixel for each animation
			window.scroll(0, scrollY);

		} else {
			clearTimeout(animator);
		}
	}

}
