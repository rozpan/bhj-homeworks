

//задача 3

 const left = document.getElementsByClassName("slider__arrow_next");
 const right = document.getElementsByClassName("slider__arrow_prev");
 const collImg = Array.from(document.getElementsByClassName("slider__item"));
 
        let numberSlide = 0;
        left[0].onclick = function() {
            if (numberSlide == collImg.length - 1) {
                for (let i = numberSlide; i > 0; i--) {
                    collImg[i].classList.remove("slider__item_active"); 
                }
                numberSlide = 0;
                return;
            } 
            numberSlide += 1;
            collImg[numberSlide].classList.add("slider__item_active"); 
        }  

        right[0].onclick = function() {
            if (numberSlide == 0) {
                numberSlide = collImg.length - 1;
                collImg[numberSlide].classList.add("slider__item_active"); 
                return;
            }
                collImg[numberSlide].classList.remove("slider__item_active");
                collImg[numberSlide - 1].classList.add("slider__item_active"); 
                numberSlide -= 1;
        } 
        
         
    

