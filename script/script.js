const button = document.getElementById('hamburger-button');
const menu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger-icon');



button.addEventListener('click',function(){
    
    if(hamburgerIcon.classList.contains('fa-bars')){
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-x');
        menu.classList.toggle("is-active");
    }
    else if(hamburgerIcon.classList.contains('fa-x')){
        hamburgerIcon.classList.remove('fa-x');
        hamburgerIcon.classList.add('fa-bars');
        menu.classList.toggle("is-active")
    }
})

/*const y = document.getElementById('hide-desktop-table-view');


function myFunction(x){
    if(x.matches){
        y.classList.add('desktop-tablet-view-hide');
    } else{
        y.classList.remove('desktop-tablet-view-hide')
    }
}

var x = window.matchMedia("(min-width:450px)");

myFunction(x);
x.addEventListener(myFunction);*/

