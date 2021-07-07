"use strict";
const myCircle = () => {
    const cwidth = parseInt($('input#width')[0].value);
    const growth = parseInt($('input#growth-amount')[0].value);
    const rate = parseInt($('input#grow-rate')[0].value);
    const numberOfCircles = parseInt($('input#number-circles')[0].value);
    let i = 0;
    while (i < numberOfCircles) {
        drawCircle(cwidth, growth, rate);
        i++;
    }
}

const drawCircle = (cwidth, growth, rate) => {
    let opacityInterval = null;
    const circleIn = circle => {
        opacityInterval = setInterval(() => {
            circle.css('opacity', (idx, previous) => previous * 0.9);
        }, rate/2);
    };
    const circleOut = circle => {
        clearInterval(opacityInterval);
        opacityInterval = null;
        circle.css('opacity', '100%');
    };
    let newCircle = circleElement(cwidth);
    
    $('body').prepend(newCircle); 
    let interval = setInterval(growCircle, rate, newCircle, growth);
    newCircle.click(() => {
        clearInterval(interval);
        newCircle.remove();
    }).hover(() => circleIn(newCircle), () => circleOut(newCircle));

};

let circleId = 0;
const circleElement = cwidth => {
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
    newElem.css('width', cwidth).css('height', cwidth)
    .css('left', function(idx, previous) {
        return genLeft(circleId) + 'px';
    }).css('top', function(idx, previous) {
        return genTop(circleId) + 'px';
    }).css('background-color', `rgb(${colorR}, ${colorG}, ${colorB})`);
    return newElem;
};

const growCircle = (circle, growth) => {
    circle.css('width', function(idx, previous) {
        return parseInt(previous) + growth + 'px';
    }).css('height', function(idx, previous) {
        return parseInt(previous) + growth + 'px';
    }).css('top', function(idx, previous) {
        return parseInt(previous) - (growth/2) + 'px';
    }).css('left', function(idx, previous) {
        return parseInt(previous) - (growth/2) + 'px';
    });
};
