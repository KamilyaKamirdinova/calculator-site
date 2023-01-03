let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
//alert(randNum);
let userNum;

btn.onclick = function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
 
  if (userNum > randNum) {
    check.textContent = "Не угадали, загаданное число меньше";
    item++;
    count.textContent = item;
    if( item>10) 
    {
      check.textContent = "  Конец игры";
      count.textContent = "  Колличество попыток законченно. Правuльный ответ - "; 
      document.getElementById("result").innerHTML = randNum; 
  
    }

  } 
  
  
  
  else if (userNum < randNum) {
    check.textContent = "Не угадали, загаданное число больше";
    item++;
    count.textContent = item;
    if( item>=10) 
    {
      check.textContent = "  Конец игры";
      count.textContent = "  Колличество попыток законченно. Правuльный ответ - ";
      document.getElementById("result").innerHTML = randNum; 
  
    }
  } 
  
  
  else if ((userNum == randNum)) {
    check.textContent = "Поздравляю! Вы угадали число";
    item++;
    count.textContent = item;
  }
  else if(userNum != Number)
  {
    check.textContent = "Выберите цифру!";
  }

};