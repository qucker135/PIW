'use strict'

let trash = "";
let trashListNr = 0;

let uniqueId = 0; 

let headers = document.getElementsByClassName('header');
Array.prototype.forEach.call(headers, function(header){
	console.log(header);
	header.onclick = () => {
		console.log(header.tagName);
	}	
});

function addTask(){ 
	event.preventDefault();
	let taskContent = document.getElementById("task").value;
	if(taskContent!==""){
		let divNewPosition = document.createElement("div");
		divNewPosition.id = "position-"+uniqueId;
		
		let divContent = document.createElement("div");
		divContent.innerHTML = taskContent;
		divContent.classList.add("nongreyed");

		let divDate = document.createElement("div");
		divDate.innerHTML = formatCurrentDate();
		divDate.style.display = "none";

		divNewPosition.appendChild(divContent);
		divNewPosition.appendChild(divDate);

		divContent.onclick = () => {
			divContent.classList.toggle("nongreyed");
			divContent.classList.toggle("greyed");
			divDate.innerHTML = formatCurrentDate();
			if(divDate.style.display === "none"){
				divDate.style.display = "block";
			}
			else{
				divDate.style.display = "none";
			}
		}

		let nr = uniqueId;	

		$(divNewPosition).append(
			$('<button>', {
			}).html('x').addClass('btn-small btn-danger').click(() => {
				
				$("#modal").css('display', 'block');
				
				$("#modal").children().eq(1).off("click").click(()=>{
					trashListNr = Number(document.getElementById('position-'+nr).parentElement.id.slice(-1));
					
					trash = $('#position-'+nr).clone(true);

					$('#position-'+nr).remove();
					
					$("#modal").css('display', 'none');
				});
				$("#modal").children().eq(2).off("click").click(()=>{
					$("#modal").css('display', 'none');
				});
			})
		);

		let select = document.getElementById('whichList');			
		let nrOfListSelected = select.options[select.selectedIndex].value;

		document.getElementById('list'+nrOfListSelected).appendChild(divNewPosition);	
		uniqueId++;
	}
}

const restore = function(){
	event.preventDefault();
	if(trash!==""){
		let copy = trash.clone(true);
		
		$('#list'+trashListNr).append(copy);
		copy.children().eq(0).addClass('nongreyed');
		copy.children().eq(0).removeClass('greyed');
		
		copy.children().eq(1).css('display', 'none');
		
		copy.children().eq(0).click(()=>{
			copy.children().eq(0).toggleClass('greyed nongreyed');
			copy.children().eq(1).html(formatCurrentDate());
			if(copy.children().eq(1).css('display') === 'block'){
				copy.children().eq(1).css('display', 'none');
			}
			else{
				copy.children().eq(1).css('display', 'block');
			}
		});

		trash = "";
	}
}


function formatCurrentDate(){
	return (new Date()).toLocaleString();
}
