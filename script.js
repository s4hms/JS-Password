("use strict");

let upperAlpha = 0;
let lowerAlpha = 0;
let noNum = 0;
let speCha = "";

const validSpecialChar = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  "'",
];

const lowerAlphaChar = [...Array(26)].map((ele, i) =>
  String.fromCharCode(97 + i)
);

const checkSpeCha = function (arr) {
  for (let ele of arr) {
    if (validSpecialChar.includes(ele)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const getUpperAlpha = function (nos) {};

document.querySelector(".upNum").value = upperAlpha;
document.querySelector(".loNum").value = lowerAlpha;
document.querySelector(".nuCha").value = noNum;
document.querySelector(".spCha").value = speCha;

document.querySelector(".gen-btn").addEventListener("click", function () {
  upperAlpha = Number(document.querySelector(".upNum").value);
  lowerAlpha = Number(document.querySelector(".loNum").value);
  noNum = Number(document.querySelector(".nuCha").value);
  speCha = document.querySelector(".spCha").value.split("");

  if (checkSpeCha(speCha)) {
    document.querySelector(
      ".result"
    ).textContent = `${upperAlpha} ${lowerAlpha} ${noNum} ${speCha}`;
  } else {
    document.querySelector(".result").textContent =
      "Please provide valid apecial charecters";
    console.log(validSpecialChar.includes(speCha));
  }
});
