function showtime (){
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0){
        h=12;
    }else{null}
    
    if(h > 12){
        h = h-12;
        session = "PM";
    }
    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    let time = `${h}:${m}:${s} ${session}`
    document.querySelector(".clock").innerText = time;
}


setInterval(showtime , 1000);
const clock =document.querySelector(".clock");
const colorPickBlue = document.querySelector(".blue")
colorPickBlue.addEventListener("click",function hi() {
   clock.classList.add("styletoclock")
   colorPickBlue.style.display = "none" 
  
})




