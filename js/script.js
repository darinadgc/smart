// для инициализации всех элементов с классом slider после готовности DOM
document.addEventListener('DOMContentLoaded', function() {
  var elms = document.querySelectorAll('.slider');
  for (var i = 0, len = elms.length; i < len; i++) {
    // инициализация elms[i] в качестве слайдера
    new ChiefSlider(elms[i]);
  }
});

"use strict"
const iconMenu = document.querySelector('.menu__icon'),
menuBody = document.querySelector('.menu__body'),
menuLinks = document.querySelectorAll('.menu__link[data-goto]'),
chinen =  document.querySelectorAll('.chinen'),
team = document.querySelectorAll('.skills__wrapper>.df');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}





// if (chinen) { 
// 	for (chinenLink of chinen) { 
		
// 	chinenLink.addEventListener("click", function (e) {
//   let i  = e.target; team[i].classList.toggle('active');
		
// 		}
// 	)
// }
// }
	
if (chinen.length>0) {
	chinen.forEach(chinenLink=>{
		chinenLink.addEventListener("click", onChinenLinkClick);
	
	});
}
	function onChinenLinkClick(e) {
		const chinenLink = e.target;
		if (chinenLink) {
			
			chinenLink.parentElement.parentElement.classList.toggle('active');
			
	}
}




	
if (menuLinks.length>0) {
	menuLinks.forEach(menuLink=>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}	
			window.scrollTo({
				top: gotoBlockValue, behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}