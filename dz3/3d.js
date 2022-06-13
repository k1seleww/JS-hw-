//1st
const number = prompt("Введите, пожалуйста, число");
let sum = 0,
firstNumber = 0;
while (number >= firstNumber) {
  sum += firstNumber * firstNumber;
  firstNumber += 1;
}
console.log({ sum });

//2nd
let firstarr = [3, 5, 12, 9, 23, 93, 17];
let filterfirstarr = firstarr.filter((i) => (i > 2) & (i < 20));
let filterSum = 0;
for (let i of filterfirstarr) {
  filterSum += i;
}
console.log(filterSum);

//3d
const secondarr = [
  [1, 6, 3, "6"],
  [10, 15, 13, "10"],
];
let secondSum = 0;
for (let i of secondarr) {
  for (let a of i) {
    if ((typeof a == "number") & (a % 2 == 0)) {
      secondSum += a;
    }
  }
}
console.log(secondSum);

//4th
let newObj ={
    name: "Viktor",
    age: undefined,
}
let key = prompt("Введите, пожалуйста, ключ:");
let value = prompt("Введите, пожалуйста, значение:");
function newProperty(key, value, object){
  if (object[key] === undefined){
    object[key] = value;
  } else{
    console.error("Уже есть, извините пожалуйста")
  }
}
newProperty(key, value, newObj);
console.log(newObj);

//5th
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    console.log("FizBuz");
  } else if (i % 2 == 0) {
    console.log("Fiz");
  } else {
    console.log("Buz");
  }
}

//6th
const numberTen = prompt("Введите, пожалуйста, число");
let factorial = 1;
for (let i = 1; i <= numberTen; i++) {
  factorial *= i;
}
console.log(factorial);

//7th
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let paperFunction = function (sheets, sheetsPerWeek, weeks) {
  let amount = weeks * (sheetsPerWeek / sheets);
  let i = 0;
  do {
    i++;
  } while (i <= amount);
  console.log({ i });
};
paperFunction(sheetsInReamPaper, consumptionPerWeek, weeksAmount);
