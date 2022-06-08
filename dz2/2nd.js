function divider() {
  console.log("\n");
}

// 1st
const vegArr = ["Капуста", "Репа", "Редиска", "Морковка"];
console.log(vegArr.join(" | "));

divider();

// 2nd
const names = "Вася;Петя;Вова;Олег";
const newArr = names.split(";");
console.log(newArr);

divider();

// 3d
function hello2(name) {
  if (name == undefined) {
    console.log("Привет, гость");
  } else {
    console.log("Привет, " + name);
  }
}

hello2();
hello2("Василий");

divider();

// 4th
const fruits = ["яблоко", "ананас", "груша"];
const fruitsInUpperCase = String.prototype.toUpperCase.apply(fruits).split(",");
console.log(fruitsInUpperCase);

divider();

// 5th

const addOneForAll = (...numbers) => {
  return numbers.map((numbers) => numbers + 1);
};
console.log(addOneForAll(1, 2, 3, 4));

divider();

// 6th

function getSum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
console.log(getSum(1, 3, 4, 5, 6, 5, 5))

divider();

// 7th

const numberArray = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
console.log(numberArray.filter(item => typeof item === "number"));


// 8th
function arrayTesting(arr) {
  let result = false; 
  result = arr.some((item) =>{
    let isTrueElement = Boolean(item);
    return isTrueElement;
  });
  return result ? "Нашли true значение" : "Ничего нет";
}
const haveTrueValue = arrayTesting([0, false, null, 1]);
console.log(haveTrueValue);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]);
console.log(dontHaveTrueValue);