
//задание 2

const domesticItems = document.getElementsByClassName("menu__link");
let allTag = Array.from(document.getElementsByTagName("ul"));
       for (let a = 0; a < allTag.length; a++) {
            allTag[a].classList.remove("menu_active");
       }

for (let i = 0; i < domesticItems.length; i++) {
       
        domesticItems[i].onclick = function() {
            if (domesticItems[i].parentElement.querySelectorAll("ul").length > 0) {
                const Arr = Array.from(domesticItems[i].closest("ul").querySelectorAll("ul"));
                
                for (let i = 0; i < Arr.length; i++) {
                    Arr[i].classList.remove("menu_active")
                }
                domesticItems[i].parentElement.querySelector("ul").classList.add("menu_active");
                return false;
            }

            else if ((domesticItems[i].closest("ul.menu_sub").querySelectorAll("li").length > 0)) {
                return false;
            }
            
        }
}