
//задача_3


const hit = document.getElementById("dead"); 
const miss = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let index = 1; index <= 9; index++) {
    getHole(index).onclick = function () {
        if (document.getElementById(`hole${index}`).className == "hole hole_has-mole") {
            hit.textContent = Number(hit.textContent) + 1;
            if (hit.textContent > 10) {
                alert("ПОБЕДА");
                hit.textContent = 0;
                miss.textContent = 0;
            }
        }
        else if (document.getElementById(`hole${index}`).className == "hole") {
            miss.textContent = Number(miss.textContent) + 1;
            if (miss.textContent > 5) {
                alert("GAME OVER");
                miss.textContent = 0;
                hit.textContent = 0;
            }
        }
    } 
}


//альтернативное решение кротов. почему она не работает?
/*
const holele = document.getElementsByClassName("hole");
const holeleMole = document.getElementsByClassName("hole hole_has-mole");
const hit = document.getElementById("dead"); //убито кротов
const miss = document.getElementById("lost"); // промахов
console.log(holeleMole);
console.log(holele);

holele[0].onclick = function() {
    miss.textContent = Number(miss.textContent) + 1;
    if (miss.textContent > 5) {
        alert("GAME OVER");
        miss.textContent = 0;
        hit.textContent = 0;
    }
}

holeleMole[0].onclick = function() {
    hit.textContent = Number(hit.textContent) + 1;
    if (hit.textContent > 10) {
        alert("ПОБЕДА");
        hit.textContent = 0;
        miss.textContent = 0;
    }
}
*/



    