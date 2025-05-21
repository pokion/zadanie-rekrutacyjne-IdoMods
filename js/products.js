'use strict';
let productsData = [];

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
}

async function productListing(){
	let productsLength = productsData.length
	let pageSize = Number(document.querySelector('#numbersOfProducts').value);
	let pageNumber = productsLength < pageSize ? 1 : Math.trunc(productsLength / pageSize) +1;
	let newProducts = await getData(pageNumber, pageSize);
	const articleProducts = document.querySelector('article.products');
	if(pageNumber > 1){
		productsData = productsData.concat(newProducts.data.slice((productsLength % pageSize)));
	}else{
		productsData = newProducts.data;
	}
	for(let i = productsLength; i<productsData.length; i++){
		const productTemplate = `<div class="card" data-index="${i}" onclick="showModal(this)">
				<span class="tag">ID:${productsData[i].id}</span>
				<img src="${productsData[i].image}">
			</div>`;
		articleProducts.appendChild(createElement(productTemplate));
	}
}