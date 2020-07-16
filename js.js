"use strict";



function mn() {
	let menuButton = document.getElementById('menuButton')
	menuButton.className = 'nav-toggle active'  // className удобнее чем setAttribute, но не рабоает вот так "elim.onclick"
	menuButton.style.position = "fixed"

	let nav = document.getElementById('nav')
	nav.style.display = "flex"
	nav.style.animationName = "animatetop"
	nav.style.opacity = "1"

	menuButton.setAttribute("onclick", "mn2()")
}



function mn2() {
		let menuButton = document.getElementById('menuButton')
		menuButton.className = 'nav-toggle'
		menuButton.style.position = "absolute"

		let nav = document.getElementById('nav')
		nav.style.animationName = "animatetopTwo"
		nav.style.opacity = "0"

		setTimeout( () => {
			document.getElementById('nav').style.display = "none"}, 500);


		menuButton.setAttribute("onclick", "mn()")
}











let headerInner = document.getElementById("header_inner")
if(pageYOffset >= 50) {
	headerInner.style.cssText = "background: #2d2e4a; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); padding: 15px 45px; width: 100%; transition: background 0.2s, box-shadow 0.2s, padding 0.2s linear;"
	// интересный метд сверху cssText
} 


function allMenu() {

	if(pageYOffset >= 50) {
	
		let headerInner = document.getElementById("header_inner")
		headerInner.style.cssText = "background: #2d2e4a; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); padding: 15px 45px; width: 100%; transition: background 0.2s, box-shadow 0.2s, padding 0.2s linear;"
		// интересный метд сверху cssText

	} else if(pageYOffset < 50) {
		headerInner.style.cssText = "display: flex;	justify-content: space-between;	align-items: center; width: 100%; position: fixed; z-index: 1000; padding: 30px 45px; color: white;	border-bottom: 1px solid #66697e; transition: background 0.2s, box-shadow 0.2s, padding 0.2s linear;"
	}

}






function scrollToBlock(block) {
	document.getElementById(block).scrollIntoView({block: "center", behavior: "smooth"})
}








/* Первая попытка сделать скролл к элементу


function scrll1() {
	var c = document.getElementById('features').getBoundingClientRect()

	let body = document.documentElement
	let features = document.getElementById("features")
	let timerId = setInterval(timer, 1)
	document.getElementById('nav_features').onclick = null
	let coord = c.top + pageYOffset




	function timer() {


		if( body.scrollTop > coord - 10 && body.scrollTop < coord + 10) {
			
			body.scrollTop = coord;
			clearInterval(timerId);
			document.getElementById('nav_features').onclick = scrll1;

		} else if(body.scrollTop > coord) {
			body.scrollTop -= 10
			
		} else if(body.scrollTop < coord) {
			body.scrollTop += 10
		}
}
}

*/


