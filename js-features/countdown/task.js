

//задача_1
const minusOne = function() {
        const time = document.getElementById("timer");
        if (time.textContent == 0) {
            alert ("Вы победили в конкурсе!");
            clearInterval(intervalId);
        }
        else {
            time.textContent -= 1;
        }
};
const intervalId = setInterval(minusOne, 100);


