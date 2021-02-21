
//задача_2
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
