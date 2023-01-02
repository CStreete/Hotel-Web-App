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



let moreText = document.getElementById('more');
let myBtn = document.getElementById('myBtn');
let dots = document.getElementById('dots');

   myBtn.addEventListener('click', function(){
    
   
    if(dots.style.display === "none" && myBtn.classList.contains('fa-angle-down')){
        moreText.style.display = "none";
        dots.style.display = "inline";
        myBtn.classList.remove('fa-angle-down');
        myBtn.classList.add('fa-angle-down');
        myBtn.classList.remove('fa-angle-up')
        
        
        
       
        
        
    
    } else {
        moreText.style.display = "inline";
        dots.style.display = "none";
        myBtn.classList.add('fa-angle-up');
       
        

        
      
     
        
    }
   })



   







