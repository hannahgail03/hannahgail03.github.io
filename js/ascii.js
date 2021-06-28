window.onload = function () {
    'use strict';
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const animation = document.getElementById('animation');
    const turbo = document.getElementById('turbo');
    const textArea = document.getElementById('text-area');
    startBtn.onclick = start;
    stopBtn.onclick = stop;
    animation.onchange = setAnimation;
    turbo.onchange = setTurbo;

    let animatedvalue = ANIMATIONS['Blank'];
    let animationIdx;
    let animationTimer;
    let running = false;
    let timeFrame = 250; 
 
    function setAnimation() {
        const which = animation.value;
        animatedvalue = ANIMATIONS[which].split('=====\n');
    }
    const sizeDropdown = document.getElementById('fontsize');
    sizeDropdown.onchange = setFontSize;
   
    function setFontSize() {
          var size=sizeDropdown.value;
          if(size=="Tiny")
          {
            textArea.style.fontSize = "7pt";
          }
        else if(size=="Small")
           textArea.style.fontSize = "10pt";
        else if(size=="Medium")
            textArea.style.fontSize = "12pt";
        else if(size=="Large")
            textArea.style.fontSize = "16pt";
          else 
        if(size=="Extra Large")
            textArea.style.fontSize = "24pt";
        else 
        if(size=="XXL")
            textArea.style.fontSize = "32pt";
          else
            textArea.style.fontSize = "12pt";
    }
    function setTurbo() {
        timeFrame = turbo.checked ? 50 : 250;
    }   
    function start() {
    stopBtn.disabled = false;
    startBtn.disabled = true; if (animatedvalue) { textArea.value =
    animatedvalue[animationIdx = 0]; running = true; animationTimer =
    setTimeout(updateAnimation, timeFrame); } else { textArea.value = ""; }
    }
    function updateAnimation() {
        if (running) {
            textArea.value = animatedvalue[animationIdx++];
            animationIdx = animationIdx % animatedvalue.length;
            setTimeout(updateAnimation, timeFrame);
        }
    }
    function stop() {
        clearTimeout();
        running = false;
        stopBtn.disabled = true;
        startBtn.disabled = false;
        textArea.value = boxInText;
    }
};
