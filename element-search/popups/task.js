//задание_1
let bigForm = document.getElementById("modal_main");
let bigForm_2 = document.getElementById("modal_success");
let cross = document.getElementsByClassName('modal__close');
let buttonModal = document.getElementsByClassName("show-success");

for (let i = 0; i < cross.length; i++) {
	cross[i].onclick = function() {
		cross[i].parentElement.style.display = "none";
		bigForm.style.display = "none";
		bigForm_2.style.background = "rgba(0, 0, 0, 0)";
		}
}

for (let i = 0; i < buttonModal.length; i++) {
	buttonModal[i].onclick = function() {
		let buttonReady = document.getElementById("modal_success");
		buttonModal[i].style.display = "none";
		cross[i].parentElement.style.display = "none";
		buttonReady.style.display = "flex";
		bigForm.style.display = "none";
		}
}
