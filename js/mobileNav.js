const closeNavButton = document.querySelector('#navClose');
const mobileNavContent = document.querySelector('#navContent');
const mobileNavCover = document.querySelector('#navCover');
const mobileMenu = document.querySelector('.mobileMenu');

closeNavButton.addEventListener("click", toggleNav);
mobileNavCover.addEventListener("click", toggleNav);

function toggleNav(){
	if(mobileMenu.classList.contains('hide')){
		mobileMenu.classList.toggle('hide');
	}else{
		setTimeout(()=>{
			mobileMenu.classList.toggle('hide');
		}, 500)
	}
	mobileNavContent.classList.toggle('hide');
	mobileNavCover.classList.toggle('hide');
}