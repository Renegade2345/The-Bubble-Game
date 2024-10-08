var timer = 60;
var score = 0;
var hitrandom = 0;



function scoreIncrease(){
    score += 10;
    document.querySelector("#Scoreval").textContent = score;
}



function randomHit(){
    hitrandom = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrandom;
 }


 function makebubble(){
    var clutter = "";
    for(var i = 1; i<=90; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;


}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrandom){
        scoreIncrease();
        makebubble();
        randomHit();
    }



});


function runTimer(){
    var timerOn = setInterval(function() {
        if(timer>0){
        timer--;
        document.querySelector("#TimerVal").textContent = timer;}
        else{clearInterval(timerOn);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
    
    
}
runTimer();
makebubble();
randomHit();
scoreIncrease();