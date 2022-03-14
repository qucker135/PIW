'use strict'

//let trash = ""; 
let $trash = "";
let trashListNr = 0;
//let $copiedElement = $("");

let uniqueId = 0; 

/*unused*/
function usunElement(){
	//console.log(this + "usunelement");
	//console.log(this.parentNode);
	trash = this.parentNode.cloneNode(true);
	this.parentNode.remove();
}

let headers = document.getElementsByClassName('header');
Array.prototype.forEach.call(headers, function(header){
	console.log(header);
	header.onclick = () => {
		console.log(header.tagName);
	}	
});
/*
	headers.item(i).onclick = () => {
		console.log(this);	
	}
	console.log(i);
	console.log("babababa");
	*/



function dodajZadanie(){
	let taskContent = document.getElementById("zadanie").value;
	if(taskContent!==""){
		let divNewPosition = document.createElement("div");
		divNewPosition.id = "position-"+uniqueId;
		
		let divContent = document.createElement("div");
		divContent.innerHTML = taskContent;
		divContent.classList.add("nongreyed");

		let divDate = document.createElement("div");
		divDate.innerHTML = formatCurrentDate();
		divDate.style.display = "none";
		//divDate.classList.add('nonvisible');

		//to be rewritten into Jquery
		//let buttonX = document.createElement("button");
		//buttonX.innerHTML = 'x';

		divNewPosition.appendChild(divContent);
		divNewPosition.appendChild(divDate);
		//divNewPosition.appendChild(buttonX);
		//$('<button>', {
			
		//}).hmtl('x').appendTo(divNewPosition);	

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
				//te dwie linijki w jquery!!!
				//nie kopiują się listenery!!!
				//trash = divNewPosition.cloneNode(true);
				//let $copiedElement = $('#position-'+nr).clone(true);
				$("#modal").css('display', 'block');
				//TAK
				$("#modal").children().eq(1).off("click").click(()=>{
					trashListNr = Number(document.getElementById('position-'+nr).parentElement.id.slice(-1));
					
					//console.log(document.getElementById('position'+nr).parentElement);
					//console.log(document.getElementById('position'+nr).parentElement.id);
					$trash = $('#position-'+nr).clone(true);
					//console.log( $('#position-'+nr));
					//console.log( $('#position-'+nr).parent());
					//console.log( $('#position-'+nr).parent().get(0).id);
					//$trash = $(divNewPosition).clone(true);

							

					//divNewPosition.remove();
					$('#position-'+nr).remove();
					//$(divNewPosition).remove();
					$("#modal").css('display', 'none');
				});
				$("#modal").children().eq(2).off("click").click(()=>{
					//$trash = $('#position-'+nr).clone(true);
					//divNewPosition.remove();
					//$('#position-'+nr).remove();
					$("#modal").css('display', 'none');
				});


				//$trash = $('#position-'+nr).clone(true);
				//divNewPosition.remove();
				//$('#position-'+nr).remove();
			})
		);

	
		let select = document.getElementById('whichList');			
		let nrOfListSelected = select.options[select.selectedIndex].value;

		document.getElementById('list'+nrOfListSelected).appendChild(divNewPosition);	
		uniqueId++;
	}
}

const przywroc = function(){
	if($trash!==""){
		//listenery się nie kopuiją
		//document.getElementById("list1").appendChild($trash);
		let $copy = $trash.clone(true);
		//$copy.click(()=>{
			
		//});
		$('#list'+trashListNr).append($copy);
		$copy.children().eq(0).addClass('nongreyed');
		$copy.children().eq(0).removeClass('greyed');
		//$copy.children().eq(1).addClass('nonvisible');
		$copy.children().eq(1).css('display', 'none');
		//$copy.children().eq(1).addClass('nonvisible');
		//$copy.children()
		$copy.children().eq(0).click(()=>{
			$copy.children().eq(0).toggleClass('greyed');
			$copy.children().eq(0).toggleClass('nongreyed');
			$copy.children().eq(1).html(formatCurrentDate());
			//$copy.children().eq(1).toggleClass('visible');
			//console.log($copy.children().eq(1).css('display'));
			if($copy.children().eq(1).css('display') === 'block'){
				$copy.children().eq(1).css('display', 'none');
			}
			else{
				$copy.children().eq(1).css('display', 'block');
			}
		});


		$trash = "";
	}
}

function formatCurrentDate(){
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = String(today.getFullYear());

	let hh = String(today.getHours()).padStart(2, '0');
	let ii = String(today.getMinutes()).padStart(2, '0');
	let ss = String(today.getSeconds()).padStart(2, '0');
	
	return dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + ii + ':' + ss;
}
