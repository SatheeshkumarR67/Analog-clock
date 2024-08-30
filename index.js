setInterval(setClock,1000)



const HourHand=document.querySelector("[data-hour-hand]")
const MinuteHand=document.querySelector("[data-minute-hand]")
const SecondsHand=document.querySelector("[data-seconds-hand]")


function setClock(){
    const currentDate= new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minuteRatio= (secondsRatio+currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio+currentDate.getHours())/12;

    setRotation(SecondsHand,secondsRatio);
    setRotation(MinuteHand,minuteRatio);
    setRotation(HourHand,hourRatio);
}

function setRotation(element,rotationRatio){
    element.style.setProperty("--rotation",rotationRatio * 360 )
}
setClock();
