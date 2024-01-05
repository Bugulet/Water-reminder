const Countdown=document.getElementById("countdown");
const StartButton=document.getElementById("start-button");
const MinuteSlider=document.getElementById("minute-target");
const SelectedMinutes=document.getElementById("selected-minutes");

let intervalHolder;
let countdownTarget;
MinuteSlider.value=60;
SelectedMinutes.innerText=`${MinuteSlider.value} minutes`;

StartButton.onclick=()=>{
    clearInterval(intervalHolder);
    intervalHolder=setInterval(UpdateCountdown, 1000);
    countdownTarget=Date.now()+1000*Number(MinuteSlider.value);
};

MinuteSlider.oninput=()=>{
    console.log(MinuteSlider.value);
    SelectedMinutes.innerText=`${MinuteSlider.value} minutes`;
};

function UpdateCountdown(){
    let countdownTimeLeft=new Date(countdownTarget-Date.now())
    let formattedString="";

    if(countdownTimeLeft>0){
        
        if(countdownTimeLeft.getMinutes()<10){
            formattedString+="0";
        }
        formattedString+=countdownTimeLeft.getMinutes()+":";

        if(countdownTimeLeft.getSeconds()<10){
            formattedString+="0";
        }
        formattedString+=countdownTimeLeft.getSeconds();

        Countdown.innerText=formattedString;
    }
    else{
        let audio = new Audio("media/drink.mp3");
        audio.play();
        Countdown.innerText="💧💧💧💧💧💧"
        clearInterval(intervalHolder);
    }
}

