"use strict";

//Задача №1
console.log("Задача №1");

const getBonusSum = (products) => {
  if (!products || !products.length) return;

  const orderSum = products.reduce((sum, current) => {
    return sum + current;
  });

  if (orderSum > 10000) {
    return parseInt(((orderSum - 10000) * 5) / 100);
  }

  return 0;
}

const products = [200, 550, 4000, 23, 58, 5000, 485, 711];
const bonus = getBonusSum(products)

console.log(bonus);

//Задача №2
console.log("Задача №2");

const getEnding = (number) => {
  const ending = {
    0: "ов",
    1: "",
    2: "а",
    3: "а",
    4: "а",
    5: "ов",
    6: "ов",
    7: "ов",
    8: "ов",
    9: "ов"
  };

  let lastDigit = number % 10;

  if (
    (number > 10 && number < 15) ||
    (number % 100 > 10 && number % 100 < 15)
  ) {
    lastDigit = 0;
  }

  return ending[lastDigit];
}

const formatPoints = (strings, balance) => {
  if (!strings || !strings.length || !balance) return;

  return `${strings[0]}${balance}${strings[1]}${getEnding(balance)}`
};

const balanceArray = [523, 6042, 5001, 5013];
balanceArray.forEach(item => {
  const output = formatPoints `Ваш баланс: ${item} балл`;
  console.log(output);
});

//Задача №3
console.log("Задача №3");

function getBestPoints(points) {
  var sortedPoints = points.sort((a, b) => b - a);
  var bestPoints = sortedPoints[0];
  var threeBestPointsSum = 0;
  for (var i = 0; i < 3; i++) {
    threeBestPointsSum += sortedPoints[i];
  }
  var threeBestPointsAverage = threeBestPointsSum / 3;
  if (!Number.isInteger(threeBestPointsAverage)) {
    threeBestPointsAverage = Math.floor(threeBestPointsAverage);
  }
  return ({
    'Самый лучший балл': bestPoints,
    'Средний балл игроков из топ-3': threeBestPointsAverage
  });
}

var points = [74989, 74990, 74990, 62000, 58480, 61800];
console.log(getBestPoints(points))