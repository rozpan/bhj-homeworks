
//задание_2
let link = document.querySelectorAll(".menu__link");

for(let i = 0; i < link.length; i++) {
    link[i].onclick = function() {
        if (this.nextElementSibling !== null && this.nextElementSibling.className == "menu menu_sub menu_active") {
            this.nextElementSibling.className = "menu menu_sub";
            return false;
        }
        else if (this.nextElementSibling !== null && this.nextElementSibling.className == "menu menu_sub") {
            this.nextElementSibling.className = "menu menu_sub menu_active";
            //дополнительное задание
            let listsInside = this.closest("ul").querySelectorAll("li > ul");
            for (let i = 0; i < listsInside.length; i++) {
                if (listsInside[i] !== this.nextElementSibling) {
                    listsInside[i].className = "menu menu_sub";
                }
            }
            return false;
        }
    }
   
}

