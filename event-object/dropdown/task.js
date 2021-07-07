
let value = document.querySelector(".dropdown__value"); //текущая основная кнопка
let list = document.querySelector(".dropdown__list"); //список со вкладками
let links = document.querySelectorAll(".dropdown__link"); //ссылки все

value.onclick = function() {
    list.classList.toggle("dropdown__list_active");
}

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() { 
        return false;
    }
}
  
list.onclick = function(e) {
    value.textContent = e.target.textContent;
    list.classList.remove("dropdown__list_active");
}