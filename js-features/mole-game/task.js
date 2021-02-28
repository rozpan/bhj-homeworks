
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


    