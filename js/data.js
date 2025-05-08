'use strict';
async function getData(pageNumber, pageSize){
	const url = `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`;
	try {
		const response = await fetch(url);
		if(!response.ok){
			throw new Error(`Response status: ${response.status}`);
		}

		return await response.json();
	}catch(error){
		console.error(error.message);
	}
}

function createElement(htmlString){
	const template = document.createElement('template');
	template.innerHTML = htmlString;
	return template.content.firstChild;
}