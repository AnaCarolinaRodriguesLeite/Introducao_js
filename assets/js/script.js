var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

const element1 = document.getElementById("currentNumber");
element1.addEventListener("click",increment);

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if(currentNumber > 10){
    document.getElementById("currentNumber").style.color = 'red';
  }
  else{
    document.getElementById("currentNumber").style.color = 'green';
  }
}

const element2 = document.getElementById("currentNumber");
element2.addEventListener("click",decrement);

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if(currentNumber < 0){
    document.getElementById("currentNumber").style.color = 'red';
    //document.body.style.backgroundColor = 'red'; //muda a cor da página toda
  }
  else{
    document.getElementById("currentNumber").style.color = 'green';
  }
}