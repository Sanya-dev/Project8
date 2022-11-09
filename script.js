// let userName = prompt("Введите свое имя")
// let surname = prompt("Введите свою фамилию")
// let result =  userName + surname;
// alert(result)

// let userName = prompt("Имя")

// console.log ("Hello," + userName)

// let isRaining = confirm("Сейчас идет дождь ?")
// if(isRaining == true){
//     alert("Возьми зонт")
// }
// else if(isRaining == false){
//     alert("Зонт не нужен")
// }

// let sale = 701
// if(sale > 700){
//     alert("Ваша скидка 25%")
// }else if(sale >= 700) {
//    alert("Ваша скидка 20%")
// }else{
//     alert("У вас нет скидки")
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ДЗ.1. даны 3 переменные - r, g, b с определенными значениями 0-255. В консоль вывести строку rgb(r, g, b)
// let r = 40... Если r = 20, g = 50, b = 200 ---> rgb(20, 50, 200)

//ДЗ.2.  Просить у пользователя ввести число в prompt'e. Сравнивать это число со 100
// Если введеное число больше 100, то в alert отобразить "Больше", если равно "равны", иначе "Меньше"
// prompt() - это всегда строка, STRING.. let num = +prompt("Введите число") - тип данных NUMBER

//ДЗ.3. Просить пользователя ввести число дважды. Два prompta. В консоли поочередно вывести их:
// а) сумму + б)разность - в)произведение *  г)деление /

// ____________________________ДЗ №1______________________________________________

// let r = 20
// let g = 50
// let b = 200
// let sum = "rgb(" + r + "," + g + "," + b +")"
// console.log(sum)

// //_____________________________ДЗ №2______________________________________________

// let numberOne = +prompt("Введите число от 0 до 200", 0);
// let numberTwo = +prompt("Введите число от 0 до 200", 0);

// if (numberOne > numberTwo) {
//   alert(numberOne);
// } else if (numberOne == numberTwo) {
//   alert("Числа равны");
// } else {
//   alert(numberTwo);
// }

// console.log(typeof number);

// // //_____________________________ДЗ №3_________________________________________________

// // let a = +prompt("Введите первое любое число", 0)
// // let b = +prompt("Введите второе любое число", 0)
// // console.log("Сумма = " + (a + b), "Вычетание = " + (a - b), "Умножение = " + a * b, "Деление = " + a / b)

// let book = {
//   name : "JavaScript",
//   pages : 250,
//   price : 50,
//   img : "https://JS.png",
// };
// console.log(book)

// let books = ["Harry1" , "Harry2" , "Harry3"]
// console.log(books)

// let user = ["Alex", "29", "https://777.jpg", ["box", "JS", "Voleyball"] ]
// console.log(user)

// num.push(5)
// console.log(num)
// num.unshift(-5)
// console.log(num)

// let nums = [100, 500]
// let numOne = +prompt("Введите число")
// let numTwo = +prompt("Введите число")
// let numThree= +prompt("Введите число")

// nums.push(numOne, numTwo, numThree)
// console.log(nums)

// let nums = [100, 500, 400, 700 ,1000]
//
// for(let i = 0; i<nums.length; i++){
//     console.log(nums[i])
// }

// let result = 5
// for( let i = 0; i < 5; i++){
//     console.log(i * result)
// }

// myName = "Alex"
// for( let i = 0; i < 101; i++){
//     if(i<30){
//         console.log(i)
//     }else if(i>29)
//     console.log("Больше", i)
// }

// let result = 5
// for( let i = 0; i < 5; i++){
//     console.log(i * result)
// }

// let nums = [100, 500, 400, 700 ,1000]

// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i])
// }

// let nums = [32, 51, 60, 78 ,105, 14, 10]
// for(let i = 0; i < nums.length; ++i){
//     if(nums[i] >= 50)
//     console.log(nums[i])
// }

// ДЗ.1. Есть массив [-10, 50, 60, 0, -100, 125]. Вывести в консоль только + числа.
// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. Вывести в консоль только четные числа
// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массив и вывести их в консоль.
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. Найти произведение отрицательных чисел
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//_______________________ДЗ №1__________________________________
let arr = [-10, 50, 60, 0, -100, 125]

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0)
    console.log(arr[i])
}

//______________________ДЗ №2___________________________________
let arr = [11, 12, 15, 17, 18, 25, 26]
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0)
    console.log(arr[i])
}

//_____________________ДЗ №3_____________________________________
//РУЧНОЙ РЕЖИМ
let arr = [10, 20, 30, 40, 50, 60]
let sum = arr["0"]+arr["1"]+arr["2"]+arr["3"]+arr["4"]+arr["5"]
console.log(sum)

//АВТОМАТИЗИРОВАНЫЙ
let arr = [10, 20, 30, 40, 50, 60]
sum = 0
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum)

//___________________ДЗ №4_______________________________________

let arr = [-10, 50, 60, 0, -100, 125];
let mult = 1;
for (let i = 0; i < arr.length; i++){
  if (arr[i] < 0) {
    mult *= arr[i];
  }
 }
console.log(mult);

/* ДЗ.5 Запросить 10 чисел. let num1 = +prompt("enter num 1") let num2 = +prompt("enter num 2") let num3 = +prompt("enter num 3") 
let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500] nums.push(num1, num2, num3) console.log(nums); */


let nums = []
for (let i = 0; i < 3; i++){
num1 = +prompt("Введите число")
nums.push(num1)
}
console.log(nums)
