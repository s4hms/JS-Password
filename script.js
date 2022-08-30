("use strict");

let upperAlpha = 0;
let lowerAlpha = 0;
let noNum = 0;
let speCha = "";

const lowerAlphaChar = [...Array(26)].map((ele, i) =>
  String.fromCharCode(97 + i)
);

const upperAlphaChar = lowerAlphaChar.toString().toUpperCase().split(",");

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

const getUpperAlpha = function (nos) {
  let randUpperAlpha = [];
  for (let i = 0; i < nos; i++) {
    randUpperAlpha.push(upperAlphaChar[Math.floor(Math.random() * 26)]);
  }
  return randUpperAlpha.join("");
};

const getLowerAlpha = function (nos) {
  let randLowerAlpha = [];
  for (let i = 0; i < nos; i++) {
    randLowerAlpha.push(lowerAlphaChar[Math.floor(Math.random() * 26)]);
  }
  return randLowerAlpha.join("");
};

const getNum = function (nos) {
  if (nos === 0) {
    return "";
  }
  return Math.floor(Math.random() * 10 ** nos).toString();
};

const getShuffle = function (upperArg, lowerArg, numArg, speArg) {
  let combArr = (upperArg + lowerArg + numArg + speArg).split("");
  let lenCombArr = combArr.length;
  let shufArr = [];
  while (lenCombArr) {
    randIndex = Math.floor(Math.random() * lenCombArr);
    shufArr.push(combArr.splice(randIndex, 1));
    lenCombArr--;
  }
  return shufArr.join("");
};

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
    if (
      upperAlpha === 0 &&
      lowerAlpha === 0 &&
      noNum === 0 &&
      speCha.length === 0
    ) {
      document.querySelector(".result").textContent = `No input was given`;
      document.querySelector(".output").style.display = "none";
    } else {
      let retGetUpperAlpha = getUpperAlpha(upperAlpha);
      let retGetLowerAlpha = getLowerAlpha(lowerAlpha);
      let retGetNum = getNum(noNum);

      const retGetShuffle = getShuffle(
        retGetUpperAlpha,
        retGetLowerAlpha,
        retGetNum,
        speCha.join("")
      );

      document.querySelector(".result").textContent = `Your password: `;
      document.querySelector(".output-text").value = retGetShuffle;
      document.querySelector(".output").style.display = "block";
    }
  } else {
    document.querySelector(".result").textContent =
      "Please provide valid special character(s)";
    document.querySelector(".output").style.display = "none";
  }
});

document.querySelector(".copy-btn").addEventListener("click", function () {
  let copiedText = document.querySelector(".output-text");
  copiedText.select();
  navigator.clipboard.writeText(copiedText.value);
});
