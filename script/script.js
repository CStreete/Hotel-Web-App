const button = document.getElementById('hamburger-button');
const menu = document.getElementById('menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navigatortop = document.getElementById('top-Btn'); 
const navigatordown = document.getElementById('down-Btn');










button.addEventListener('click',function(){
    
    
    if(hamburgerIcon.classList.contains('fa-bars')){
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-x');
        menu.classList.toggle("is-active");
        document.body.style.overflow ="hidden";
        navigatortop.style.display = "none";
        navigatordown.style.display = "none";
       
        

        
        
      
        
        
    }
    else if(hamburgerIcon.classList.contains('fa-x')){
        hamburgerIcon.classList.remove('fa-x');
        hamburgerIcon.classList.add('fa-bars');
        menu.classList.toggle("is-active");
        document.body.style.overflow ="visible";
        navigatortop.style.display = "block";
        navigatordown.style.display = "block";
        
        
    }
})



    let moreText = document.getElementById('more');
    let myBtn = document.getElementById('myBtn');
    let dots = document.getElementById('dots');



    

    function myFunc(){
    
   
    if(dots.style.display === "none" && myBtn.classList.contains('fa-angle-down')){
        moreText.style.display = "none";
        dots.style.display = "inline";
        myBtn.classList.remove('fa-angle-down');
        myBtn.classList.add('fa-angle-down');
        myBtn.classList.remove('fa-angle-up');
    
    } else {
        moreText.style.display = "inline";
        dots.style.display = "none";
        myBtn.classList.add('fa-angle-up');
    }
   }



   
    const arrowUp = document.getElementById('arrow-up');
    

    function arrowUpBounce (){
        arrowUp.classList.add('fa-bounce');

    }

    function removeArrowUpBounce(){
        arrowUp.classList.remove('fa-bounce');
    }


    const arrowDown = document.getElementById('arrow-down');
   
    function arrowDownBounce (){
        arrowDown.classList.add('fa-bounce');

    }

    function removeArrowDownBounce(){
        arrowDown.classList.remove('fa-bounce');
    }

  

   







