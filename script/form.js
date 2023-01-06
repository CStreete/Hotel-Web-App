

           /*---Form Message Sent Script ---*/
           const myForm = document.getElementById("myForm");
           const message = document.getElementById("form-submited");         

           myForm.addEventListener('submit', function(event){
               myForm.style.display = "none";
               message.innerHTML = "Thank you for contacting us! We will get back to you as soon as possible.";
               event.preventDefault();
              
           })