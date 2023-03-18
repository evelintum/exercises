//task 1//
document.getElementById('btnSubmit').addEventListener('click', getTheDate);

const currentDate = document.getElementById('currentDate');

function getTheDate(){
    const date = new Date();
    let current_date = date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
    currentDate.innerHTML = `Today is: ${current_date.toString()}` ;

}

//task2//
let btnJaanipaev = document.getElementById('btnJaanipaev');
btnJaanipaev.addEventListener('click', daysUntilJaanipaev);

const daysUntil = document.getElementById('untilJaanipaev');
function daysUntilJaanipaev(){
    const now = new Date();
    let jaanipaev = new Date(2023,5,24);
    let difference =Math.ceil( (jaanipaev - now) / (1000*60*60*24))

    daysUntil.innerHTML = `Until jaanipaev: ${parseInt(difference.toString())} days` ;
}

//task 3//
document.getElementById('btnDifference').addEventListener('click', calculateDifference);
const  differenceNumber =document.getElementById('difference');
const  multiplyNumber =document.getElementById('multiply');

function subtract(num1,num2){
    return(num1-num2)
}
function calculateDifference() {
    let givenNumber = 17
    let inputNumber = document.getElementById('inputNumber').valueAsNumber
    if (inputNumber < 17) {
        let difference = subtract(givenNumber, inputNumber);
        differenceNumber.innerHTML = `Difference: ${difference.toString()}`
        multiplyNumber.textContent= ''
    } else if(inputNumber > 17)  {
        let difference = subtract(inputNumber, givenNumber);
        let multiply = difference * 2
        multiplyNumber.innerHTML = `Double difference: ${multiply.toString()}`
        differenceNumber.textContent =''
    }
}

//task 4//

document.getElementById('btnMultiple').addEventListener('click', multiple);
const  multiplyOf5 =document.getElementById('multipleOf5');


function multiple(){
    let multipleNumber = document.getElementById('multipleNumber').valueAsNumber
    if(multipleNumber%5 ===0 || multipleNumber%7 === 0){
        multiplyOf5.textContent= 'The number is a multiple of 5 or 7'
    } else { multiplyOf5.textContent= 'The number is not a multiple of 5 or 7'
    }
}

//task5//
document.getElementById('btnNear').addEventListener('click', whichIsNear);
const  nearerNumber =document.getElementById('nearerNumber');


function whichIsNear() {
    const goal = 99;
    let nearerNumberOne = document.getElementById('nearerNumberOne').valueAsNumber;
    let nearerNumberTwo = document.getElementById('nearerNumberTwo').valueAsNumber;
    if ((Math.abs(nearerNumberOne - goal)) < Math.abs(nearerNumberTwo - goal)) {
        nearerNumber.textContent = `The number ${nearerNumberOne} is nearer to 99`
    } else if (nearerNumberOne === nearerNumberTwo) {
        alert('Identical numbers, please change numbers')
        nearerNumber.textContent = ''
    } else {
        nearerNumber.textContent = `The number ${nearerNumberTwo} is nearer to 99`
           }
}

//task 6//

document.getElementById('btnString').addEventListener('click', stringConverter);
const inputAnswer =document.getElementById('inputAnswer');


function stringConverter() {
    let textInput = document.getElementById('textInput').value;
    if (textInput.length > 3) {
        let firstThreeCharacters = textInput.slice(0, 3).toLowerCase() + textInput.slice(4).toUpperCase()
        inputAnswer.textContent = firstThreeCharacters
    } else {
        inputAnswer.textContent = textInput.toLowerCase()
    }
}

//task 7//

document.getElementById('btnString2').addEventListener('click', stringConverter2);
const inputAnswer2 =document.getElementById('inputAnswer2');

function stringConverter2() {
    let textInput2 = document.getElementById('textInput2').value;
    let chars = textInput2.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let output =''
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === 'z'){
            output += alphabet[0]
        } else {
            for (let j = 0; j < alphabet.length; j++) {
                if (chars[i] === alphabet[j]) {
                    output += alphabet[j+1];
                }
            }
        }
    }
    inputAnswer2.textContent = output
}


//Task 8//

document.getElementById('btnMinutes').addEventListener('click', convertMinutes );
const inputAnswer3 =document.getElementById('inputAnswer3');

function convertMinutes(){
    let textInput3 = document.getElementById('textInput3').valueAsNumber
    let result = textInput3%60
    let hours = Math.floor(textInput3/60)

    if(result=== 0){
        inputAnswer3 .innerHTML = `${hours} h `

    } else if(result > 0){
        inputAnswer3 .innerHTML = `${hours} h ja ${result} min `
    }

}

//advanced 1//

const car1 = {type:"Fiat", model:"500", color:"white", fuel:"gas"};
const car2 = {type:"Bmw", model:"X6", color:"white", fuel:"diesel"};

let whatToCompare = "color"
let result = car1[whatToCompare] === car2[whatToCompare]

//advanced 2//


    let family1 = {
    papa: 'Eduard',
    mama: 'Olga',
    kid1: 'Evelin'
    }

    let family2 = {
        papa: 'Markus',
        mama: 'Anna',
        kid1: 'Viktoria'
    }
    let family3 = {
        papa: 'Oliver',
        mama: 'Tiina',
        kid1: 'Tarmo',
    }

let array = [family1,family2,family3]

console.log(array[2].kid1)

//advanced 3//

document.getElementById('btnColor').addEventListener('click', randomColor );
const inputColor =document.getElementById('inputColor');


let resultNumber

function randomColor() {
    let array1 = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2,3,4,5,6,7,8,9]
    let result11 = ''
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * 14);
        let arrayIndex = array1[randomIndex];
        result11 += arrayIndex;
    }
    inputColor.textContent = result11

}

//advanced 4//

let array3 = ['Kaspar', 'Evelin', 'Nikita', 'Uku', 'Oliver', 'Anna', 'Tarmo',  ]
// let deleteLeft = array3.slice(5).splice()


let uku = array3.indexOf('Uku')
array3.splice(uku, array3.length)  //delete the right part//
array3.splice(0, uku)

console.log(array3)

//advanced 5//

let array4 = ['Kaspar', 'Evelin', 'Nikita', 'Uku', 'Oliver', 'Anna', 'Tarmo', 'Evvu', 'Pevvu', 'Tore', 'Tere', 'Kole' ]
result2 = []
for (let i = 0; i < array4.length; i +=3){
    let arrayIndex = array4[i];
    result2.push(arrayIndex)
}
console.log(result2)

//advanced 6//


let array6 = ['Kaspar', 'Evelin', 'Nikita' , 'Nikita']
let array7 = ['Sander', 'Agnes', 'Evelin', 'Evelin', 'Kaspar', 'Priidu','Uku']
let result5 = []


for (let i = 0; i < array6.length; i++){
    for (let k = 0; k < array7.length; k++){
        if(array6[i] === array7[k]){
           result5.push(array7[k])

        }
    }
} console.log(result5)

const sumOfArrays = array6.concat(array7);
let sumOfArraysT = sumOfArrays;
let arrayResult6 = [];

for (let i = 0; i < sumOfArrays.length; i++) { //0//

    let element = sumOfArrays[i]; // kaspar//
    sumOfArraysT[i] = ""; // 0 - kaspar//

    if (sumOfArraysT.includes(element) !== true) { // kui sumOfT sisaldab Kasparit ei ole tõsi// kui somOfT ei sisalda kasparit
        arrayResult6.push(element); // siis pushi seda arrayResulti
    } else {
        sumOfArraysT[sumOfArraysT.indexOf(element)] = ""; //teisel juhul ära pane sinna arraysse//
        console.log(sumOfArraysT);
    }
}
console.log(arrayResult6);


//advanced 7//


if (window.navigator.maxTouchPoints > 1) {
    console.log(`User with ${window.navigator.platform} mobile`)
} else {
    console.log(`User with ${window.navigator.platform} laptop `)
}

// advanced 8//

document.getElementById('btnCal').addEventListener('click', calculate );
const outputCal =document.getElementById('outputCal');

function calculate () {
    let arrowOne = document.getElementById('input1').value.split('');
    let arrowTwo = document.getElementById('input2').value.split('');
    let arrowThree = document.getElementById('input3').value.split('');
    let newArrowOfNumbers = [...arrowOne, ...arrowTwo, ...arrowThree];
    let sum = 0;

    if ((arrowOne.length > 4) || (arrowTwo.length > 4) || (arrowThree.length > 4)) {
        alert('The number is too high. Maximum is 4 digits');
    } else {
        for (let i = 0; i < newArrowOfNumbers.length; i++) {
            sum += parseInt(newArrowOfNumbers[i]);
        }
        while(sum > 9){
            let digits = sum.toString().split('');
            console.log(digits)
            sum = 0;

            for (let k = 0; k < digits.length; k++){
                sum += parseInt(digits[k]);
            }
        }
    }
    outputCal.textContent = `Result: ${sum}`;
}

