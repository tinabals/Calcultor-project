let runningTotal = 0;
let buffer = "0";
let previousOperator ;

let screen = document.querySelector('.screen');
function handleNumber(numberString){
    if (buffer == "0"){
        buffer = numberString
    } else {
        buffer += numberString
    }
    screen.innerText = buffer
    console.log('buffer', buffer)
}
function buttonClick(value){
  if (isNaN(value)){
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
}


function init(){
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText)
    })
}

function handleSymbol(numberString){}

init();