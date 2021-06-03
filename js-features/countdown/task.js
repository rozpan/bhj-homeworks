
//подскажите, пожалуйста, какой вариант корректнее и грамотнее?
//вариант_1
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
const intervalId = setInterval(minusOne, 1000);

//вариант_2
const timerCount = setInterval (function() {
    const count = document.getElementById("timer");
    if (count.textContent == 0) {
        clearInterval(timerCount);
        return alert("Вы победили в конкурсе!"); 
    }
    count.textContent -= 1;
}, 1000);

































