let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");

//alert(randNum);
let userNum;

btn.onclick = function (evt) {
  evt.preventDefault();
  userNum = input.value;
  console.log(userNum);

  let mirNum = ""; // строка в обратном порядке
  for (i = userNum.length-1; i >= 0; i--) {
    mirNum += userNum[i];
  }
  document.getElementById("result").innerHTML = mirNum; 
};