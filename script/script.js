






        /*---Hamburger + Navigation Script---*/ 

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





            
            /*---Show more, Show less Script---*/ 

            function myFunc(myDots,miBtn,myMore){


            let moreText = document.getElementById(myMore);
            let myBtn = document.getElementById(miBtn);
            let dots = document.getElementById(myDots);
        
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

        



        /*---Navigation Bounce Script---*/
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



            /*---Slide Animation Script */

            const observer = new IntersectionObserver((enteries)=>{
                enteries.forEach((entry) => {
                    console.log(entry)
                    if(entry.isIntersecting){
                        entry.target.classList.add('show');
                    }else{
                        entry.target.classList.remove('show');
                    }

                });
            });

            const hidden = document.querySelectorAll('.intro-text');
            hidden.forEach((el) => observer.observe(el));
        
            


            /*---Form Message Sent Script ---*/
            const myForm = document.getElementById("myForm");
            const message = document.getElementById("message");         

            myForm.addEventListener('submit', function(event){
                myForm.style.display = "none";
                message.innerHTML = "Thank you for contacting us! We will get back to you as soon as possible.";
                event.preventDefault();
               
            })

         