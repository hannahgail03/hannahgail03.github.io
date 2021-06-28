window.onload = function () {
    const btnBiggerDecoration = document.getElementById("btnBiggerDecoration");
    btnBiggerDecoration.onclick = btnBiggerDecorationClick;
    const textArea = document.getElementById('text');
    //add a timer setInterval
    function btnBiggerDecorationClick() {
    setInterval(() => {
    var style = window.getComputedStyle(textArea, null).getPropertyValue('font-size').replace("px", "");
    //1 px=0.75pt convert to pt then add 2;
    var newSize=(parseInt(style)/0.75)+2;
    textArea.style.fontSize =newSize+'pt';
       }, 500)
    }
    const bling = document.getElementById('bling');
    bling.onchange = blingChange;
    var checked=true;

    const btnIgpay = document.getElementById('btnIgpay');
    btnIgpay.onclick = BtnIgpayClick;
    
    const btnMalkovitch = document.getElementById('btnMalkovitch');
    btnMalkovitch.onclick = BtnMalkovitchClick;

    function blingChange() {
         if(checked==true)
         {
            textArea.style.fontWeight = 'bold'; 
            textArea.style.color = 'green'; 
            checked=false;
            textArea.className += "textUnderline";
            document.body.className+="hundredollar";
         }
         else
         {
             textArea.style.fontWeight = 'normal'; 
             textArea.style.color = 'black'; 
             textArea.classList.remove("textUnderline");
            document.body.classList.remove("hundredollar");
             checked=true;
         
         
        }

    }
    function BtnIgpayClick() {
      var results = textArea.value
                        .split(" ")
                        .map(word => transformWord(word))
                        .join(" ");
    
    textArea.value = results;
}

function transformWord(word) {
    var vowels = "aeoui";
    var result = word, firstLetter = word.charAt(0);
    if (vowels.indexOf(firstLetter) == -1) {
        result = result.substring(1, word.length) + firstLetter;
    }
    return result + '-ay';
}

function BtnMalkovitchClick() {
    var results = textArea.value
                        .split(" ")
                        .map(word => transformMalkovitch(word))
                        .join(" ");
    
    textArea.value = results;
}

function transformMalkovitch(word) {
    return word.length >= 5 ? "Malkovitch" : word;
}

};