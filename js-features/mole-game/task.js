
//задача_3
const holele_1 = document.getElementById("hole1");
const hit = document.getElementById("dead"); //убито кротов
const miss = document.getElementById("lost"); // промахов

holele_1.onclick = function() {
    if (holele_1.className == "hole hole_has-mole") {
        hit.textContent = Number(hit.textContent) + 1;
        if (hit.textContent > 10) {
            alert("ПОБЕДА");
            hit.textContent = 0;
            miss.textContent = 0;
        }
    }
    else if (holele_1.className == "hole") {
        miss.textContent = Number(miss.textContent) + 1;
        if (miss.textContent > 5) {
            alert("GAME OVER");
            miss.textContent = 0;
            hit.textContent = 0;
        }
    }
}
