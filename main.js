'use strict';
let swiper;

function getRandomInt(maxValue){
	return Math.floor(Math.random() * maxValue);
}

async function appednAllFeaturedProducts(){
	const products = await getData(1,14);
	const swiperWrapper = document.querySelector('#featuredWrapper');
	for(let product of products.data){
		let randomInt = getRandomInt(3);
		const productTemplate = `<div class="swiper-slide">
									<div class="productImage card">
										<span class="icon-Icon_favorite favorite"></span>
										${randomInt == 2 ? '<span class="bestSeller tag">Bestseller</span>' : ''}
										${randomInt == 0 ? '<span class="limitedEdition tag">Limited edition</span>' : ''}
										<img src="${product.image}">
									</div>
									<div class="productText">
										<p class="large">${product.text}</p>
										<p>€300,00 EUR</p>
									</div>
								</div>`;
		swiperWrapper.appendChild(createElement(productTemplate));
	}
	swiper = new Swiper('.swiper', {
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
				slidesPerView: 4,
				spaceBetween: 24,
				scrollbar: {
				  el: '.swiper-scrollbar',
				},
			});
}

appednAllFeaturedProducts()