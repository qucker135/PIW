'use strict'

function dodajZadanie(){
	let taskContent = document.getElementById("zadanie").value;
	if(taskContent!==""){
		let newElement = document.createElement("div");
		newElement.innerHTML = taskContent;
		document.getElementById('list1').appendChild(newElement);		
	}
}
