
// переменную timerCookie до функции(вариант_1) или в ней объявлять?
// какой вариант корректнее?

//вариант_1
const cookieCli = document.getElementById("cookie");
let timerCookie = document.getElementById("clicker__counter");

cookieCli.onclick = function() {
    timerCookie.textContent = Number(timerCookie.textContent) + 1;
    if (cookieCli.width == 200) {
        cookieCli.width = 300;
    }
    else if (cookieCli.width == 300) {
        cookieCli.width = 200;
    }
}

//вариант_2
const cookieCli = document.getElementById("cookie");
cookieCli.onclick = function() {
    const timerCookie = document.getElementById("clicker__counter");
    timerCookie.textContent = parseInt(timerCookie.textContent) + 1;
    if (cookieCli.width == 200) {
        cookieCli.width = 250;
    }
    else {
        cookieCli.width = 200; 
    }
}