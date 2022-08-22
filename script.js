const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; //Заключение строк в одинарные кавычки
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Escape-последовательности в строках
// Code	Output
//\'	single quote
//\"	double quote
//\\	backslash
//\n	newline
//\r	carriage return
//\t	tab
//\b	word boundary
//\f	form feed
const myStr = "This is the start. "+"This is the end."; // Объединение строк с помощью оператора Plus

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";//Объединение строк с помощью оператора «плюс равно»

const myName = "Людмила";
const myStr = "My name is "+myName+" and I am well";//Cоздание строк с переменными 

const someAdjective = "интересно, сложно, прикольно";
let myStr = "Learning to code is ";
myStr += someAdjective;//Добавление переменных к строкам: Learning to code is интересно, сложно, прикольно 

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
//Найдите длину строки: 8

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // Используйте нотацию скобок, чтобы найти первый символ в строке

// Setup
let myStr = "Jello World";
myStr = "Hello World"; //Понимание неизменности строк

// Setup
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; //Используйте нотацию скобок, чтобы найти N-й символ в строке (3 символ)

// Setup
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length-1];//Используйте нотацию скобок, чтобы найти последний символ в строке

// Setup
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];//Используйте нотацию скобок, чтобы найти N-последний символ в строке (предпоследний символ)

// Setup
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My "+myNoun+" is "+myAdjective+". "+"Yesterday he "+myVerb+" very "+myAdverb+"."; //Пустые слова

const myArray = ["string", 5];//Сохранение нескольких значений в одной переменной с использованием массивов JavaScript/С помощью переменных JavaScript array

const myArray = [["Первый массив", 1],["Второй массив", 2]];//Вложение одного массива в другой массив

const myArray = [50, 60, 70];
const myData= myArray[0];//Доступ к данным массива с помощью индексов: myData равна первому значению массива myArray (50)

const myArray = [18, 64, 99];
myArray[0]=45;//Измените данные массива с помощью индексов

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
const myData = myArray[2][1];//Доступ к многомерным массивам с индексами (8)

// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);//Управление массивами с помощью push() - Добавление данных в конец массива

// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
console.log(myArray); // ["John", 23]
console.log(removedFromMyArray)//Управление массивами с помощью pop() - удаление последнего значеия массива (["cat", 2])

// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();//Работа с массивами с помощью shift() - удаление первого значения массива

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);//Работа с массивами с помощью unshift() - .unshift()работает точно так же .push(), но вместо добавления элемента в конец массива unshift()добавляет элемент в начало массива.

const myList = [["Первый", 1], ["Второй", 2], ["Третий", 3], ["Четвертый", 4], ["Пятый", 5]];//Список из подмассивов

function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();//Функции - многокртное использование кода 

  function functionWithArgs(param1, param2){
    console.log(param1+param2);
  }
  functionWithArgs(1,5); //Передача значений функциям с аргументами - сумма значений параметров функции

  function timesFive(num){
    return num*5;
  }
  const answer = timesFive(2);//Возврат значения из функции с возвратом (10)


let myGlobal=10;
function fun1() {
  oopsGlobal = 5;
 }
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
} // Глобальный охват и функции

function myLocalScope() {
var myVar= "foo";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);//Локальный охват и функции

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

myOutfit();//Глобальная и локальная область видимости в функциях

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
sum = sum + 5;
}

addThree();
addFive();//Понимание неопределенного значения, возвращаемого функцией

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);//Присваивание с возвращаемым значением (processed = 2)

function nextInLine(arr, item) {
  arr.push(item);
  const removed = arr.shift();
  return removed;
  return item;
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); //Stand in Line - В информатике очередь — это абстрактная структура данных , в которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конец очереди, а старые элементы удалены из начала очереди.

function welcomeToBooleans() {
    return true; // Change this line
}//Понимание логических значений - тип данных — Boolean 

function trueOrFalse(wasThatTrue) {
if (wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false"
}//Используйте условную логику с операторами If

// Setup
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);//оператор равенства == (с преобразованием типа)

// Setup
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);//Строгое равенство === (без перобразования типа)

//Примечание. В JavaScript вы можете определить тип переменной или значения с помощью typeofоператора следующим образом:
//typeof 3
//typeof '3'
//typeof 3 returns the string number, and typeof '3' returns the string string.

// Setup
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);//Оператор неравенства ( !=)

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);//Оператор строгого неравенства ( !==)

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(10);//Оператор «больше чем» ( >)

function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);//Оператор больше или равно ( >=) 

function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }

  if (val < 55) { 
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);//Оператор меньше чем ( <)

function testLessOrEqual(val) {
  if (val <= 12) { 
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);//Оператор меньше или равно ( <=)

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
         return "Yes";
    }

  return "No";
}

testLogicalAnd(10);//Логический оператор and&& - несколько условий

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);//Логический оператор or|| ( ) - или

function testElse(val) {
  let result = "";
 
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);//оператор иначе else

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else  if (val < 5) {
    return "Smaller than 5";
  } else{
  return "Between 5 and 10";
  }
}
testElseIf(7);//Знакомство с операторами Else If

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);//важность порядка if else

function testSize(num) {
 
if (num < 5){
  return "Tiny";
 } else if (num < 10){
   return "Small";
 } else if (num < 15){
   return "Medium";
 } else if (num <20){
   return "Large";
 } else {
   return "Huge";
 }
//return "Change Me";
}
testSize(7);//Цепочка операторов If Else

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  
if (strokes == 1){
  return names[0];
} else if (strokes <= par - 2){
  return names[1];
} else if (strokes == par - 1){
  return names[2];
} else if (strokes == par){
  return names[3];
} else if (strokes == par + 1){
  return names[4];
} else if (strokes == par + 2){
  return names[5];
} else if (strokes >= par + 3){
  return names[6];
}
 }

golfScore(5, 4); //Golf Code

function caseInSwitch(val) {
  let answer = "";
 
switch (val){
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer ="beta";
    break;
  case 3:
     answer = "gamma";
    break;
  case 4:
     answer = "delta";
    break;
    
}
   return answer;
}

caseInSwitch(1);//case значения проверяются на строгое равенство ( ===). Сообщает breakJavaScript прекратить выполнение операторов. Если breakопущено, будет выполнен следующий оператор.

function switchOfStuff(val) {
  let answer = "";
 
switch (val){
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}
  return answer;
}

switchOfStuff(1);//default оператор, который будет выполняться, если соответствующие caseоператоры не будут найдены. 

function sequentialSizes(val) {
  let answer = "";
switch (val){
  case 1:
  case 2:
  case 3:
   answer = "Low";
   break;
  case 4:
  case 5:
  case 6:
   answer = "Mid";
   break;    
  case 7:
  case 8:
  case 9:
   answer = "High";
   break;
}

  return answer;
}

sequentialSizes(1);//Несколько идентичных опций в операторах switch

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
//Способ 1 

function isEqual(a, b) {
  return a === b;
} // Способ 2

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
//Приведенное выше отобразит строку Helloв консоли и вернет строку World. Строка byebyeникогда не будет

const myDog = {
"name": "Archi",
"legs": 4,
"tails": 1,
"friends": ["Mama", "Papa"]
};//Создание объектов JavaScript

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;      
const shirtValue = testObj.shirt; //Доступ к свойствам объекта с помощью записи через точку

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"]; 
const drinkValue = testObj["the drink"];//Второй способ доступа к свойствам объекта — запись в квадратных скобках ( []).  - если есть пробелы


// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;  
const player = testObj[playerNumber];//Доступ к свойствам объекта с помощью переменных

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";//Обновление свойств объекта

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark ="woof";//Добавление новых свойств к объекту JavaScript

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;//Удалить свойства из объекта JavaScript

// Setup
function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");//Использование объектов для поиска

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else{
  return "Not Found";}
}//Проверка объектов на свойства .hasOwnProperty(propname)метод объектов, чтобы определить, имеет ли этот объект заданное имя свойства. .hasOwnProperty()возвращает trueили false

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {"artist": "Two",
    "title": "Piano two",
    "release_year": 1999,
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];//Управление сложными объектами

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];//Доступ к подсвойствам объектов можно получить, соединив вместе точки или квадратные скобки.

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];//Доступ к вложенным массивам


// Setup
const myArray = [];
let i = 5;

while (i >= 0){
  myArray.push(i);
  i--;
}//Итерация с циклами while JavaScript

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
//ourArrayтеперь будет иметь значение [0, 1, 2, 3, 4].

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}//ourArrayтеперь будет содержать [0, 2, 4, 6, 8]. Давайте изменим наш initialization, чтобы мы могли считать нечетными числами.

const myArray = [];
for (let i = 1; i < 10; i +=2){
  myArray.push(i);
}// нечетные числа до 10

const myArray = [];
for (let i = 9; i > 0; i-=2){
  myArray.push(i);
}//нечетные числа от 9 до 1

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}//Перебор массива с помощью цикла for: Ответ 20

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}//Вложение циклов - Это выводит каждый подэлемент по arrодному за раз. 

function multiplyAll(arr) {
  let product = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product = product * arr[i][j];
  }
}
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // возвращала произведение всех чисел в подмассивах arr.

// Setup
const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5) //в отличии от while код будет исполнен хоотя бы один раз

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}//произведение первых n элементов
//Однако обратите внимание на то multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Это означает, что вы можете переписать multiplyс точки зрения самого себя и вам никогда не понадобится использовать цикл.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}//Рекурсивная версия  произведение первых n элементов

function sum(arr, n) {
  if (n <= 0){
    return 0;
  } else {
    return sum(arr, n-1) + arr[n - 1];
  }}//Рекурсивная версия  сумма первых n элементов

  function randomFraction() {
    return Math.random();}//Создание случайных дробей с помощью JavaScript - между 0(включительно) и 1(исключительно)

    function randomWholeNum() {
      return Math.floor(Math.random() * 10);
    }//Генерация случайных целых чисел с помощью JavaScript (от 0 до 9) -Math.floor()чтобы округлить число до ближайшего целого числа.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}//Генерировать случайные целые числа в диапазоне

function convertToInteger(str) {
  return parseInt(str);
  }
  convertToInteger("56");
//Функция parseInt()анализирует строку и возвращает целое число. Вот пример:
//const a = parseInt("007");

function convertToInteger(str) {
  return parseInt(str,2)
  }
convertToInteger("10011");//Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала двоичное число в целое и возвращала его.

function checkEqual(a, b) {
  return a==b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);//Синтаксис таков: a ? b : cгде a— условие, b— код, выполняемый при возврате условия true, и c— код, выполняемый при возврате условия false.
//равны ли два числа или нет. Функция должна возвращать либо строку Equal, либо строку Not Equal.

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}//тоже самое, что и код ниже

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}//тоже самое, что и код выше

function checkSign(num) {
  return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
}
checkSign(10); // проверка положительное или отрицательное или равно 0

