let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let dd =document.getElementById("dd");
let hh =document.getElementById("hh");
let mm =document.getElementById("mm");
let ss =document.getElementById("ss");

let endDate = " 01/01/2024 00:00:00"

//    time calculet fo day ,hours, minit
 let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
   let distance = now - countDown;

//    output resilt

    let d = Math.floor(distance / (1000 * 60 *60 *24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    let s = Math.floor((distance % (1000 * 60 )) / (1000));

    days.innerHTML = d + " " + '<br/> <span>Days</span>';
    hours.innerHTML = h +" "+ '<br/> <span>Hourse</span>';
    minute.innerHTML = m + '<br/> <span>Minutes</span>';
    second.innerHTML = s + '<br/> <span>Secondsa</span>';

    // animation 
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    

    // if the count down in over write heppy new year text
    if(distance < 0 ){
        clearInterval(x);
        document.getElementById('time').style.display = "none";
        document.querySelector('.newYear').style.display = "block";
    }
});