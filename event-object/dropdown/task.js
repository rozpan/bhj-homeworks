
let krest = document.querySelectorAll(".modal__close_times");
console.log(krest[0]);
krest[0].onclick = function() {
    console.log("rere");
    let b = krest[0].closest(".modal");
    b.className = "modal";
}
/*
krest[1].onclick = function() {
    let b = krest[1].closest(".modal");
    b.className = "modal";
}
*/




let sdelatXorosho = document.querySelector(".show-success");
console.log(sdelatXorosho);
let cc = document.getElementById("modal_success");
let ccc = document.getElementById("modal_main");

sdelatXorosho.onclick = function() {
    console.log("rere");
//ccc.className = "modal";
//cc.className = "modal modal_active";
}