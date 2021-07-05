
let cross = document.querySelectorAll(".modal__close_times");
let window_1 = document.getElementById("modal_main");
let window_2 = document.getElementById("modal_success");

cross[0].onclick = function() {
	window_1.className = "modal";
}
cross[1].onclick = function() {
	window_2.className = "modal";
}

let doWell = document.querySelector(".btn");
doWell.onclick = function() {
	window_1.className = "modal";
	window_2.className = "modal modal_active";
}