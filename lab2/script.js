'use strict'

function dodajZadanie(){
	let taskContent = document.getElementById("zadanie").value;
	if(taskContent!==""){
		let newElement = document.createElement("div");
		newElement.innerHTML = taskContent + '<div class="date" style="display: none;">'+2022+'</div>';
		newElement.onclick = () => {
			newElement.classList.toggle("greyed");
			for (let i = 0; i < newElement.children.length; i++) {
			  console.log(newElement.children[i].tagName);
			}
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0');
			let yyyy = String(today.getFullYear());

			let hh = String(today.getHours());
			let ii = String(today.getMinutes());
			let ss = String(today.getSeconds());
			
			newElement.children[0].innerHTML = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + ii + ':' + ss;
			if (newElement.children[0].style.display === "none") {
                            newElement.children[0].style.display = "block";
                        } else {
                            newElement.children[0].style.display = "none";
                        }
		};
		document.getElementById('list1').appendChild(newElement);		
	}
}
