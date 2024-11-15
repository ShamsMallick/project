//  const elem = document.querySelector('#elem1')
//  const elemImd = document.querySelector('#elem1 img')

//  elem.addEventListener('mousemove', function(dets){
//     elemImd.style.left = dets.x + 'px'
//     elemImd.style.top = dets.y + 'px'

    
//  })
//  elem.addEventListener('mouseenter', function(dets){
//     elemImd.style.opacity = 1
   

    
//  })
 
//  elem.addEventListener('mouseleave', function(dets){
//     elemImd.style.opacity = 0
   


//  })
    
 const elem = document.querySelectorAll('.elem')
// //  console.log(elem);
 
//  const elamImg = document.querySelectorAll('.emal img')



elem.forEach(function (val){
    console.log(val.childNodes[3]);
    
    val.addEventListener('mousemove', function(){
     val.childNodes[3].style.opacity = 1
        
    });
    val.addEventListener('mouseleave', function(){
        val.childNodes[3].style.opacity = 0
        
    });
    val.addEventListener('mousemove', function(dets){
        val.childNodes[3].style.left = dets.x + 'px'
        val.childNodes[3].style.top = dets.y + 'px'
        
    });
});
