let minValue =
  parseInt(prompt("Минимальное знание числа для игры", "0")) || (NaN ? 0 : 0);

minValue <= -1000 ? (minValue = -999) : minValue;

let maxValue =
  parseInt(prompt("Максимальное знание числа для игры", "100")) ||
  (NaN ? 100 : 100);
maxValue >= 1000 ? (maxValue = 999) : maxValue;

alert(
  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
);

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let hundres = [
  "",
  "сто",
  "двести",
  "триста",
  "четыреста",
  "пятьсот",
  "шестьсот",
  "семьсот",
  "восемьсот",
  "девятьсот",
];
let teens = [
  "десять",
  "одинадцать",
  "двенадцать",
  "тринадцать",
  "четырнадцать",
  "пятнадцать",
  "шестнадцать",
  "семнадцать",
  "восемнадцать",
  "девятнадцать",
];
let tens = [
  "",
  "",
  "двадцать",
  "тридцать",
  "сорок",
  "пятьдесят",
  "шестьдесят",
  "семьдесят",
  "восемьдесят",
  "девяносто",
];
let numbers = [
  "",
  "один",
  "два",
  "три",
  "четыре",
  "пять",
  "шесть",
  "семь",
  "восемь",
  "девять",
];
let numberInt;
let numberRest;
let numberIntTen;
let numberRestTen;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

if (answerNumber > 0) {
}

document.getElementById("btnRetry").addEventListener("click", function () {
  minValue =
    parseInt(prompt("Минимальное знание числа для игры", "0")) || (NaN ? 0 : 0);
  minValue <= -1000 ? (minValue = -999) : minValue;
  maxValue =
    parseInt(prompt("Максимальное знание числа для игры", "100")) ||
    (NaN ? 100 : 100);
  maxValue >= 1000 ? (maxValue = 999) : maxValue;
  alert(
    `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
  );
  orderNumber = 0;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  gameRun = true;
  answerField.innerText = answerField.innerText =
    answerNumber >= 0
      ? numberToWord().length < 20 && Math.abs(answerNumber) >= 0
        ? `Вы загадали число ${numberToWord()}?`
        : `Вы загадали число ${answerNumber}?`
      : numberToWord().length < 20
      ? `Вы загадали число минус ${numberToWord()}?`
      : `Вы загадали число ${answerNumber}?`;
});

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random() * 2);
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
      answerField.innerText =
        answerNumber >= 0
          ? numberToWord().length < 20 && Math.abs(answerNumber) >= 0
            ? `Вы загадали число ${numberToWord()}?`
            : `Вы загадали число ${answerNumber}?`
          : numberToWord().length < 20
          ? `Вы загадали число минус ${numberToWord()}?`
          : `Вы загадали число ${answerNumber}?`;
    }
  }
});

document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    const phraseRandomEq = Math.round(Math.random() * 3);
    const answerPhraseEq =
      phraseRandomEq === 1
        ? `Да легче простого \n\u{1F61B}`
        : phraseRandomEq === 2
        ? `Это было увлекательно \n\u{1F920}`
        : `Я так и знал \n\u{1F913}`;
    answerField.innerText = answerPhraseEq;
    gameRun = false;
  }
});

document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (maxValue === minValue) {
      const phraseRandomMin = Math.round(Math.random() * 2);
      const answerPhraseMin =
        phraseRandomMin === 1
          ? `Вы немного меня обманываете!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhraseMin;
      gameRun = false;
    } else {
      maxValue = answerNumber + 1 - 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText =
        answerNumber >= 0
          ? numberToWord().length < 20 && Math.abs(answerNumber) >= 0
            ? `Вы загадали число ${numberToWord()}?`
            : `Вы загадали число ${answerNumber}?`
          : numberToWord().length < 20
          ? `Вы загадали число минус ${numberToWord()}?`
          : `Вы загадали число ${answerNumber}?`;
    }
  }
});

function numberToWord() {
  // Функция преобразования числа из цифр в слова (числа от -999 до 999).
  let number = Math.abs(answerNumber);
  let text = "";

  if (number == 0) {
    text = "ноль";
    return text;
  }

  if (number <= 9) {
    text = numbers[number];
    return text;
  }

  if (number >= 100) {
    numberInt = parseInt(number / 100);
    numberRest = parseInt(number % 100);
    text = hundres[parseInt(numberInt)];
  } else {
    numberRest = parseInt(number);
  }

  if (numberRest >= 10) {
    numberIntTen = parseInt(numberRest / 10);
    numberRestTen = parseInt(numberRest % 10);
    if (parseInt(numberIntTen) == 1) {
      text += " " + teens[parseInt(numberRestTen)];
      return text;
    } else {
      text += " " + tens[parseInt(numberIntTen)];
    }
  } else numberRestTen = parseInt(numberRest);
  text += " " + numbers[parseInt(numberRestTen)];
  return text;
}
