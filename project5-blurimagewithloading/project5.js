let textcontent=document.querySelector('.textcontent')
let backimg=document.querySelector('.imgcontainer')

let load=0
let interval=setInterval(bluring,30)// 60 its a time in millisecond that means the function calls every 30 milli second once 
function bluring(){
    load++;
    if(load>99){
        clearInterval(interval)
    }
    textcontent.innerHTML=`${load}%`
    textcontent.style.opacity=scale(load,0,100,1,0)
    backimg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }