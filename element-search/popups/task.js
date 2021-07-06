
let cross = document.querySelectorAll(".modal__close_times");
let window_1 = document.getElementById("modal_main");
let window_2 = document.getElementById("modal_success");

for (let i = 0; i < cross.length; i++) {
	cross[i].onclick = function() {
		this.closest(".modal").className = "modal";
	}
}

let doWell = document.querySelector(".btn");
doWell.onclick = function() {
	window_1.className = "modal";
	window_2.className = "modal modal_active";
}
