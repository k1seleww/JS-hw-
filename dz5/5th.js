// 1st
Array.prototype.getUnique = function(){
    let arr = [];
    for(let i of this){
        if (!arr.includes(i)){
            arr.push(i);
        };
    }
    return arr;
}

const arr1 = [1, 1, 2, 2, 3, 3];
const newArr = arr1.getUnique(); 
console.log(newArr);


// 2nd
Object.prototype.getKeySum = function(){
    let valuesArr = Object.values(this);
    let sum = 0;
    for (let i of valuesArr){
        if(i !== false){
            sum+=i;
        }
    };     
    console.log(sum);
};   

function reverseKey(obj) {
    const result_2 = {};
  
    Object.keys(obj).forEach(function(value) {
      var key = obj[value];
      result_2[key] = value;
    });
    return result_2;
};


const obj= {a: 1, b: 23, c: 3, d: false, e: 20};
obj.getKeySum();
const return_2 = reverseKey(obj);
console.log(return_2);


// 3d
let div_1 = document.createElement("div");
let div_2 = document.createElement('div');
let div_3 = document.createElement('div');
let div_4 = document.createElement('div');
let div_5 = document.createElement('div');
div_1.classList.add('item');
div_2.classList.add('item');
div_3.classList.add('item');
div_4.classList.add('item');
div_5.classList.add('item');
div_1.innerText = '1';
div_2.innerText = '2';
div_3.innerText = '3';
div_4.innerText = '4';
div_5.innerText = '5';
let elem = document.querySelector('div.holder');
elem.append(div_1, div_2, div_3, div_4, div_5);
elem.style.display = 'flex';
elem.style.flexWrap = 'wrap';
elem.style.width = '50%';
elem.style.height = '30vh';
elem.style.marginRight = 'auto';
elem.style.marginLeft = 'auto';
elem.style.border = '2px solid black';
elem.style.borderRadius = '15px 15px 0 0';

div_1.style.width = '50%';
div_1.style.background = 'rgb(204, 65, 41)';
div_1.style.order = '1';
div_1.style.textAlign = 'center';
div_1.style.borderRadius = '15px 0 0 0';

div_2.style.background = 'rgb(119, 155, 223)';
div_2.style.order = '4';
div_2.style.flexGrow = '1';
div_2.style.textAlign = 'center';

div_3.style.background = 'rgb(173, 119, 223)';
div_3.style.order = '3';
div_3.style.flexGrow = '1';
div_3.style.textAlign = 'center';

div_4.style.background = 'rgb(56, 216, 51)';
div_4.style.order = '5';
div_4.style.flexGrow = '1';
div_4.style.textAlign = 'center';

div_5.style.width = '50%';
div_5.style.order = '2';
div_5.style.background = 'rgb(243, 202, 69';
div_5.style.textAlign = 'center';
div_5.style.borderRadius = '0 15px 0 0';