let minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
let maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
alert(
  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

document.getElementById("btnRetry").addEventListener("click", function () {
  minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
  maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
  alert(
    `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
  );
  orderNumber = 0;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  gameRun = true;
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
});

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
  }
});

document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
    gameRun = false;
  }
});

document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (maxValue === minValue) {
      const phraseRandomMin = Math.round(Math.random());
      const answerPhraseMin =
        phraseRandomMin === 0
          ? `Вы немного меня обманываете!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhraseMin;
      gameRun = false;
    } else {
      maxValue = answerNumber;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
  }
});
