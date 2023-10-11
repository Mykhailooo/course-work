const burger=document.querySelector(".burger_button");
const close=document.querySelector(".close_button");
const menu=document.querySelector(".mobile_menu");
burger.addEventListener('click', function () {
 menu.classList.toggle("visible");  
})

close.addEventListener('click', function () {
    menu.classList.toggle("visible");  
   })

