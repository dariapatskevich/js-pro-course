//№1Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

let getSqrNumbers = [1,2,3,4,5,6,7,8,9,0];
getSqrNumbers.forEach(function(element, index, array){
    array[index] = element * element;
});
console.log(getSqrNumbers); 

//№2Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
let count = arr.reduce((acc, num) => acc + num, 0);
console.log(count)

//№3Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

let num = 655;
function addSymbols(num) {
  let str = num.toString();
  let result = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result.push(":", str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}
console.log(addSymbols(num));

//№4Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.
function subtructionOfArrays(){
  let array1 = [9,2,74]
  let array2 = [1,3,5,6,5,6]
  let result = '' 
  for(i = 0; i < array2.length; i++){
      if(isNaN(array1[i] - array2[i])){
          result += array2[i] + ','    
      }else{
          result += array1[i] - array2[i] + ','
      }
  }
  result = result.split(',')
  result.splice(-1,1)
  return result
}

subtructionOfArrays();

//№5Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
function sumOfArrays(){
  let array1 = [4,5,2]
  let array2 = [1,3,5,6]
  let result = '' 
  for(i = 0; i < array2.length; i++){
      if(isNaN(array1[i] + array2[i])){
          result += array2[i] + ','    
      }else{
          result += array1[i] + array2[i] + ','
      }
  }
  result = result.split(',')
  result.splice(-1,1)
  return result
}

sumOfArrays();


//№6Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let arr = [1,2];
function reverseArr(arr) {
    return arr.reverse()
}
let printArray = reverseArr(arr)

console.log(printArray)

//№7Фильтр юзеров Создать массив объектов для юзеров. Пример:[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let users = [{name: 'Ivan', age: 18},{name: 'Petr', age: 12},{name: 'Sidor', age: 25},{name: 'Zheka', age: 29}]
let adult = [];
let underage  = [];
    for(let user of users){
        if(user.age >= 18) {
            adult.push(user)
        } else {
        underage.push(user)
        }
    }

//№8Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

let arr = ["b", "p", "s", "c","s", "s", "h", "h", "a","b", "p", "s", "c","b","p"];
function removeDuplicates(arr) {
let obj = {},
    result = [];
for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  obj[str] = true;
}
   for (i in obj) {
     result.push(i);
   }
   return result;

}
console.log(removeDuplicates(arr))

//№9Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

let str = 'шалаш';

function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
  }
  console.log(checkPalindrome(str))

//№10Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

function getItemIndex(arr, value) {
    let a = -1
    arr.forEach((item, index) => {
        if(item === value) {
            a = index
        }
    })
    return a
}

//№11Написать функцию search, которая принимает первым аргументом массив имен:[ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

function search(arr, str) {
    return arr.filter(item => item.toLowerCase().includes(str.toLowerCase()))
}

//№12Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:checkIsEqaul([1,2,3], [1,2,3]) -> truecheckIsEqaul([1,2,3], [1,2,3,4]) -> falsecheckIsEqaul([1,2,3], [1,'2',3]) -> false

function checkEqaulityOfArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}