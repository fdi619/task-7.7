let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById("inputWindow");

document.getElementById("btn_clr").addEventListener("click", function () {
  lastOperand = 0;
  operation = null;
  inputWindow.value = "";
});

document.querySelector("#btn_1").addEventListener("click", function () {
  inputWindow.value += "1";
});
document.querySelector("#btn_2").addEventListener("click", function () {
  inputWindow.value += "2";
});
document.querySelector("#btn_3").addEventListener("click", function () {
  inputWindow.value += "3";
});

document.querySelector("#btn_res").addEventListener("click", function () {
  if (operation === "sum") {
    const result = lastOperand + parseInt(inputWindow.value);
    inputWindow.value = result;
    operation = null;
    lastOperand = 0;
  }
  if (operation === "def") {
    const result = lastOperand - parseInt(inputWindow.value);
    inputWindow.value = result;
    operation = null;
    lastOperand = 0;
  }
});

document.querySelector("#btn_sum").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "sum";
  inputWindow.value = "";
});

document.querySelector("#btn_def").addEventListener("click", function () {
  lastOperand = parseInt(inputWindow.value);
  operation = "def";
  inputWindow.value = "";
});
