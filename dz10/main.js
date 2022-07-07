// 1st
let nameForFirstTask = getCookie("name");
let firstName = document.querySelector(".name");
if (nameForFirstTask !== undefined) {
  firstName.innerHTML = nameForFirstTask;
}

let ageForFirstTask = getCookie("age");
let firstAge = document.querySelector(".age");
if (ageForFirstTask !== undefined) {
  firstAge.innerHTML = havOldAreYou(ageForFirstTask);
}

function havOldAreYou(birthday) {
  let birthDate = new Date(birthday).getFullYear();
  let now = new Date().getFullYear();
  return now - birthDate;
}

// 2nd
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const names = document.getElementById("name");
const wrapper = document.querySelector(".wrapper");

submit.addEventListener("click", function () {
  const inputName = document.getElementById("input_name").value;
  const inputAge = document.getElementById("input_age").value;
  if (inputName === "" || inputAge === "") {
    location.reload();
  } else {
    document.cookie = "name=" + inputName;
    document.cookie = "age=" + inputAge;
    location.reload();
  }
});

function untilBirthday(data) {
  let birthDate = new Date(data);
  let month = birthDate.getMonth();
  let day = birthDate.getDate();
  let nextBirthDate = new Date(new Date().getFullYear() + 1, month, day);
  let diff = nextBirthDate - new Date();
  let months = new Date(diff).getUTCMonth();
  let days = new Date(diff).getUTCDate() - 1;
  let hours = new Date(diff).getUTCHours();
  let minutes = new Date(diff).getUTCMinutes();
  let second = new Date(diff).getUTCSeconds();
  const elmnt = document.getElementById("age");

  elmnt.innerHTML = `Осталось  ${
    months +
    " месяцев " +
    days +
    " дней " +
    hours +
    " часов " +
    minutes +
    " минут " +
    second +
    " секунд "
  }`;
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let cookieAge = getCookie("age");

let cookieName = getCookie("name");
names.innerHTML = cookieName;

if (!cookieAge || !cookieName) {
  form.setAttribute("style", "display:none");
}
if (!cookieAge || !cookieName) {
  wrapper.classList.add("none");
}

let timerId = setInterval(() => untilBirthday(cookieAge), 1000);

// 3d

const textarea = document.getElementById("story");

textarea.addEventListener("keyup", function (el) {
  const textarea = document.getElementById("story").value;
  localStorage.setItem("text", textarea);
});
textarea.value = localStorage.getItem("text");

// 4th

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");
console.log(arr);

