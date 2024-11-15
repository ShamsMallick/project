const istatus = document.querySelector('h4')

const btn = document.querySelector('#add');

const count = 0;

// const remove = document.querySelector('#remove');

   
        btn.addEventListener('click', function(){

            if(count == 0){
           istatus.innerHTML = "Friend"
           istatus.style.color  = "blue"
           btn.innerHTML = "Remove Friend"
         
    
    
           count = 1 
        
        
        }else {
            istatus.innerHTML = "Stranger"
            istatus.style.color  = "red"
          
          
            count = 0
            
            
     
          }
        

        })

    

   
    



// remove.addEventListener('click', function(){
//    istatus.innerHTML = "Stranger"
//    istatus.style.color  = "red"
// })

