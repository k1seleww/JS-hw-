"Use strict";
// 1st
const input = document.querySelector(".textInput");
const ul = document.querySelector("#toDoList");
const textSpan = document.querySelector(".TodoText");
const addToDo = document.querySelector("#AddToDo");
const checkBox = document.querySelector("input[type = 'checkbox']");

function createTodo() {
  const li = document.createElement("li");
  li.classList.add("listItem");

  const textSpan = document.createElement("span");
  textSpan.classList.add("TodoText");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("DoneCheckbox");

  const newTodo = input.value;
  textSpan.append(newTodo);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("removeButton");
  removeBtn.textContent = "Убрать";

  ul.appendChild(li).append(checkBox, textSpan, removeBtn);
  input.value = "";
  RemoveToDo(removeBtn);
}

addToDo.addEventListener("click", (event) => {
  if (input.value.length !== 0 && input.value.trim() !== "") {
    createTodo();
  }
});

function RemoveToDo(btn) {
  btn.addEventListener("click", (event) => {
    btn.parentElement.remove();
  });
}

const ListDone = () => {
  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
      e.target.parentElement.children[1].classList.toggle("done");
    }
  });
};

ListDone(checkBox);

// 2nd
// 1)

function sumCycle(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

sumCycle(5);

// 2)

function sumRec(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumRec(n - 1);
}

console.log(sumRec(5));

// 3d

// 1)

function printNumbersInterval(from, to) {
  let counter = setInterval(function () {
    console.log(from);
    if (from == to) {
      clearInterval(counter);
    } else {
      from++;
    }
  }, 1000);
}

setTimeout(printNumbersInterval, 5000, 1, 10);

// 2)

function printNumbersTimeout(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1000);
    }
    from++;
  }, 1000);
}

setTimeout(printNumbersTimeout, 15000, 11, 20);

// 4th
let i = 0,
  counter = setInterval(function () {
    i++;
    console.log("Прошло " + i + " сек.");
    if (i == 5) {
      clearInterval(counter);
    }
  }, 1000);
