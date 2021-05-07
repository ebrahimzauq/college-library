console.log('this is library book management system');


class Book{
	constructor(name, author, type){
		this.name = name;
		this.author = author;
		this.type = type;
	}
}

class Display{
	add(book){
		let bodyTable = document.getElementById('bodyTable');
		let uiString = `<tr>
					  <td>${book.name}</td>
		              <td>${book.author}</td>
		              <td>${book.type}</td>
		            </tr>`;
		bodyTable.innerHTML +=  uiString;
	}
	clear(){
		let libraryForm = document.getElementById('libraryForm');
		libraryForm.reset();
	}
	validate(book){
			if(book.name < 2 || book.author < 2){
			return false;
		}
		else{
			return true;
		}
	}
	show(type , displayMessage){
		let message = document.getElementById('message');
		message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
						        <div class=" container">
						          <strong style="margin-left: 18px;">${displayMessage}!</strong>
						          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						        </div>
						      </div>`;
		setTimeout(function(){
			message.innerHTML = '';
		},5000);
	}
}


let libraryForm = document.getElementById('libraryForm');
console.log(libraryForm)
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
	e.preventDefault();
	let name = document.getElementById('book').value;
	let author = document.getElementById('author').value;
	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let cooking = document.getElementById('cooking');
	let type;
	if(fiction.checked){
		type = fiction.value;
	}
	else if(programming.checked){
		type = programming.value;
	}
	else if(cooking.checked){
		type = cooking.value;
	}
	let book = new Book(name, author, type);
	let display = new Display();
	if(display.validate(book)){
		display.add(book);	
		display.clear();
		display.show('success', 'Your book has been successfully added');
	}
	else{
		display.show('danger', 'Sorry, you can not add this book, please your book and auther');
	}
	
	console.log(book);
	
}