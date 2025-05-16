'use strict';
const dialog = document.querySelector('dialog');
const dialogId = document.querySelector('#modalId');
const dialogImage = document.querySelector('dialog>img');

function showModal(element){
	console.log(element)
	dialogId.innerHTML = productsData[element.dataset.index].id;
	dialogImage.src = productsData[element.dataset.index].image;
	dialog.showModal();
}
function closeModal(){
	dialog.close();
}