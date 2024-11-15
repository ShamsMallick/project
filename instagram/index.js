var arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww"
    },

    {
        dp:"https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww"
    },

    {
        dp:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1495638488670-437e54b3bab4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww"
    },

    {
        dp:"https://images.unsplash.com/photo-1475669913832-fd187510b578?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww",story: "https://plus.unsplash.com/premium_photo-1661400600986-b7493240cae2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fHww"
    }


]
var storiyan = document.querySelector(".storiyan")
var clutter = ""
arr.forEach(function(elem,ind){
    clutter += `<div class="story">
    <img id=${ind} src="${elem.dp}"
    alt="">
    </div>`
    
    
    
    
    
})
storiyan.innerHTML = clutter
storiyan.addEventListener('click', function(dets){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen ").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none"
    },1000)
})


