const con = document.querySelector("#container")
const love = document.querySelector('i')

con.addEventListener("dblclick", function (){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.color = "red";
    setTimeout(function (){
        love.style.transform = "translate(-50%,-50%) scale(0)";
      
    },1000)
})