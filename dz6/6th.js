// 1st
const p = document.querySelector("p");
const img = document.querySelector("img")

p.addEventListener('click', function () {
   img.style.display = "block";
});
img.addEventListener('mouseover', function () {
   img.style.width = "200px";
   img.style.transition = "width .4s ease"
});
img.addEventListener('click', function () {
   img.style.display = "none";
});


// 2nd
let arr = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;
let result = arr.reduceRight(function (sum, elem) {
  if (elem == 0) {
    answer = sum;
  } else {
    return sum + elem;
  }
});
if (answer == undefined) {
  answer = result;
}
console.log(answer);

// 3d
let arr2 = [1, 2, 3, 0, 4, 5, 6];
let num = 1;
let result3 = arr.reduce(function(sum, elem) {
	if (sum > 10) {
		console.log(num);
		return;
	} else {
		num++;
		return sum + elem;
	}
}); 

// 4th
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener('click', function () {
   console.log(input.value);
})

// 5th
let elems = document.getElementsByTagName('a');
for(let i = 0;i < elems.length;i++){
  elems[i].addEventListener('mouseover',func)
};
function func(){
  this.innerHTML = this.innerHTML + '(' + this.href + ')';
};

//6th
document.getElementById('hider').onclick = function() {
document.getElementById('text').hidden = true;
}

// 7th
const input = document.getElementById('input');
const startBut = document.getElementById('buttonFour');
const circle = document.getElementById('circle');
input.onchange = function(){
    let ourStr = input.value;
    ourStr = Number(ourStr);
    if(ourStr != input.value){
        input.value = '';
        alert('Введите число')
    };
};

let start = Date.now(); 

let timer = setInterval(function() {
  let timePassed = Date.now() - start;
  if (timePassed >= 2000) {
    clearInterval(timer); 
    return;
  }

  draw(timePassed);

}, 20);



startBut.onclick = function(){
    if(Number(input.value) > 600){
        alert('ERROR, слишком большое число');
    }
    else if(Number(input.value) < 0){
        alert('ERROR, слишком маленькое число');
    }
    else{
        circle.style.left = Number(input.value) + 'px';
    };
};
