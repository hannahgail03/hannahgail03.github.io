"use strict";
const myCircle = () => {
    const circleWidth = parseInt($('input#width')[0].value);
    const growthAmount = parseInt($('input#growth-amount')[0].value);
    const growRate = parseInt($('input#grow-rate')[0].value);
    const numberOfCircles = parseInt($('input#number-circles')[0].value);

    for (let i = 0; i < numberOfCircles; i++) {
        drawCircle(circleWidth, growthAmount, growRate);
    }
}

const drawCircle = (circleWidth, growthAmount, growRate) => {
    let opacityInterval = null;
    const circleIn = circle => {
        opacityInterval = setInterval(() => {
            circle.css('opacity', (idx, previous) => previous * 0.9);
        }, growRate/2);
    };
    const circleOut = circle => {
        clearInterval(opacityInterval);
        opacityInterval = null;
        circle.css('opacity', '100%');
    };
    let newCircle = circleElement(circleWidth);
    
    $('body').prepend(newCircle); 
    let interval = setInterval(growCircle, growRate, newCircle, growthAmount);
    newCircle.click(() => {
        clearInterval(interval);
        newCircle.remove();
    }).hover(() => circleIn(newCircle), () => circleOut(newCircle));

};

let circleId = 0;
const circleElement = circleWidth => {
    const randomColor = max => Math.floor((Math.random() * max)); 
    const genLeft = circleId => {
        return $(document).width() / 2 + (((-1) ** circleId) * 10 * circleId);
    }
    const genTop = circleId => {
        return $(document).height() / 2 + (((-1) ** circleId) * 10);
    }
    
    const colorR = randomColor(256);
    const colorG = randomColor(256);
    const colorB = randomColor(256);

    let newElem = $('<div>', {id: 'circle' + circleId++,class: 'circle'
    });
    console.log(newElem);
    newElem.css('width', circleWidth).css('height', circleWidth)
    .css('left', function(idx, previous) {
        return genLeft(circleId) + 'px';
    }).css('top', function(idx, previous) {
        return genTop(circleId) + 'px';
    }).css('background-color', `rgb(${colorR}, ${colorG}, ${colorB})`);
    return newElem;
};

const growCircle = (circle, growthAmount) => {
    circle.css('width', function(idx, previous) {
        return parseInt(previous) + growthAmount + 'px';
    }).css('height', function(idx, previous) {
        return parseInt(previous) + growthAmount + 'px';
    }).css('top', function(idx, previous) {
        return parseInt(previous) - (growthAmount/2) + 'px';
    }).css('left', function(idx, previous) {
        return parseInt(previous) - (growthAmount/2) + 'px';
    });
};
