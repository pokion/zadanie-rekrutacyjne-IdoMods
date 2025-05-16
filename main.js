'use strict';
let swiper;
let hasScrolled90Percent = false;

window.onload = async ()=>{
	await appednAllFeaturedProducts()
	swiper = new Swiper('.swiper', {
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					600: {
						slidesPerView: 4,
					}
				},
				slidesPerView: 1,
				spaceBetween: 24,
				scrollbar: {
				  el: '.swiper-scrollbar',
				},
			});
	await productListing();
	window.addEventListener('scroll', checkScrollPercentage);
}

async function checkScrollPercentage() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const scrolledToEnd = scrollPosition + viewportHeight;
    const scrollPercentage = (documentHeight > viewportHeight)
        ? (scrolledToEnd / documentHeight) * 100
        : 0;

    if (scrollPercentage >= 90 && !hasScrolled90Percent) {
        hasScrolled90Percent = true;
        await productListing();

    } else if (scrollPercentage < 90 && hasScrolled90Percent) {
        hasScrolled90Percent = false;
    }
}
function changeIcon(element){
	element.classList.toggle('icon-Icon_favorite')
	element.classList.toggle('icon-FAV-ICONFill')
}
function hideBanner(){
	if(localStorage.getItem('banner')){
		document.querySelector('.banner').style.display = 'none';
	}
	localStorage.setItem('banner', true)
}
hideBanner()
