1. Ternary Operator:

```jsx
Condition ? codeifTrue : codeifFalse

let age 21;
let message = age >= 18 ? "adult" : "minor"
```

1. Switches:

```jsx
let day =1;

switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    default:
        console.log (`${day} is not a day`)
}
```

1. Method Chaining

```jsx
let username = othavio
username = username.trim().charAt(0),toUpperCase() + username
```

1. Strict equallity

```jsx
= assignment operator
== comparison operator
=== strict equality operator (compare values and datatype)
!- inequality operator
!== strict inequality operator
```

1. Arrays

```jsx
const fruist = ["apple", "orange", "banana"];

//1.
console.log (fruits);
// vai printar todos elementos;
console.log (fruits.[0]);
// vai printar o elemento específico

//2.
fruits[0] = "coconut";
// mudar um elemento do array
fruits.push ("coconut");
// adiciona no final
fruits.pop ();
// remove o último elemento
fruits.unshift("coconut");
// adiciona no início
fruits.shift();
// remove o primeiro elemento

//3.
let numOfFruits = fruits.lengh
// tamanho do array
let index = fruis.indexOF("apple");
// mostra o index de um possivel elemento
// se n estiver retorna -1

//4.
for (let fruit of fruits)
	console.log(fruit);
}
// interar um array
fruits.sort();
// organiza em ordem alfabética;
fruits.sort().reverse();
// organiza em ordem alfabética invertido;

```

1. Spread Operator: permite uma string ou um array ser expandido em vários elementos

```jsx
//1.
let numbers = [1,2,3,4,5];
let maximum= math.max(...numbers)
// maximum = 5

//2.
let name = [othavio];
let letters = (...name);
// letters = o t h a v i o
let letters = (...name).join("-");
// letters = o-t-h-a-v-i-o

//3. 
let fruits = ["apple", "orange", "banana"];
let foods = ["pizza", "hamburguer", "hotdog"];
let newFruits= [...fruits,...foods, "egg"];
// newFruits é um array formado pelos elementos de fruits e foods, + eggs

```

1. Rest Parameters: pega vários elementos e coloca dentro de um mesmo array

```jsx
//1. 
function getFood(...foods){
	console.log(foods);
}
const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";

const fooods = getFood(food1, food2, food3);
// foods é um array formado por todas as foods
```

1. For each: método usado para interar um array e aplicar uma função em cada elemento;

```jsx
  function dislay(element){
	  console.log(element);
  }
  let numbers = [1,2,3,4,5]
  numbers.forEach(display);
  // printa 1 2 3 4 5
  
  
```

1. Map: aceita uma função e retorna um novo array onde aplica essa função em cada elemento do array

```jsx
function square(element){
	  return Math.pow(element,2);
  }
let numbers = [1,2,3,4,5]
const quadrados = number.map(square);
// um array q contem 1 4 9 16 25
	  
```

1. Filter: cria um novo array que filtra certos elementos

```jsx
function isEven(element){
	return element % 2 === 0;
}
let numbers = [1,2,3,4,5,6,7];
let evenNumbers= numbers.filter(isEven);
// array q contem 2 4 6
```

1. Reduce: reduz os elementos de um array para um único valor

```jsx
//1.
function sum (prev,next){
	return prev + next;
}
const prices = [5, 30, 10, 15, 20];
const total = prices.reduce(sum);
// total = 105
```

1. Function expressions: a função é definida como uma variável dentro de outra função

```jsx
//1.
const numbers = [1,2,3,4,5]
const cubes = numbers.map (function (element){
    return Math.pow(element,3);
}); 
```

1. Arrow functions:

```jsx
//1.
const numbers = [1,2,3,4,5]
const cubes = numbers.filter ((element) => Math.pow(element,3));
```

1. Classes:

```jsx
//1.
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displauProduct(){
        console.log (`Product: ${this.name}`);
        console.log (`Price: ${this.price.toFixed(2)}`);
    }
}

const product1 =  new Product ("Shirt", 19,99)
product1.displauProduct();
```

1. Static: keyword que define classes ou métodos pertencem a classe (não o objeto)

```jsx
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User ("Juan");
console.log (user1.userCount);
//não vai funcionar

console.log (User.userCount);
// vai funcionar

```

1. Classes, super, getters/setters:

```jsx
class Animal {
    constructor(name){
        this.name = name;
    }

    set name (newName){
        if (typeof newName === "string" && newName.length > 0){
            this._name = newName;
        }
        else{
            console.error("name must be a none empty string")
        }
    }

    get name (){
        return this._name;
    }
}
class Rabbit extends Animal {
    constructor(name,runSpeed){
        super(name);
        this.runSpeed=runSpeed;
    }
}

class Fish extends Animal {
    constructor(name,swimSpeed){
        super(name);
        this.swimSpeed=swimSpeed;
    }
}
```

1. Destructuring: extrair valores de arrays e objetos

```jsx
//1. [] para arrays
let a = 1;
let b = 2;

[a,b]=[b,a]
// agora a=2 e b=1

//2.
const letters = ["a", "b", "c", "d", "e"];
[letters [0], letters [4]] = [letters[4], letters [0]];
// agora letters = [e,b,c,d,a]

//3.
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); // esse printa black, white

//4. {} para objetos
const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
};

const {firstName, lastName, age, job="unemployed"}=person1
// unemployed é um deafult quase nao ter
```

1. Nested objects: objetos dentro de objetos

```jsx
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Othavio", 30, "123", "Cuiaba", "Brasil");
```

1. Array of objects:

```jsx
const fruits  = [
                    {name: "apple", color: "red", calories: 95},
                    {name: "orange", color: "orange", calories: 45},
                    {name: "banana", color: "yellow", calories: 105},
                    {name: "coconut", color: "white", calories: 159},
                    {name: "pineapple", color: "yellow", calories: 37}
                ];

const fruitNames = fruits.map (fruits => fruits.name);
const yellowFruits = fruits.filter (fruits => fruits.color === "yellow");
const maxFrui = fruits.reduce ((prev,next)=>
                                next.calories > prev.calories ?
                                next : prev);
```

1. Sort: ordena organizar elementos de um array

```jsx
//1.
let numbers = [1,10,2,9,3,8,4,7,5,6];
numbers1 = numbers.sort ();
// 1 10 2 3 4 5 6 7 8 9
// utiliza cada elemento como string

numbers2 = numbers.sort ((a,b)=>a-b);
// 1 2 3 4 5 6 7 8 9 10

numbers3 = numbers.sort ((a,b)=>b-a);
// 10 9 8 7 6 5 4 3 2 1

//2.
const people = [
    {name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
];

people.sort((a, b) => a.age - b.age);

console.log(people);
```

1. Dates:

```
// Date (year, month, day, hour, minute, seconds, ms)
const date = new Date();
console.log (date);
// sua data

//1.
const date2 = new Date (0);
console.log (date2);
// quando o seu computador acha q o tempo começou

//2. Pegar elementos de uma data
const year = date.getFullYear();
const month = date.getMonth();

//3. Alterar uma data
const date3 = new Date ();
date3.setFullYear(2090);
date3.setMonth(3);

//4. Comparar datas
const date4 = new Date("2023-12-31");
const date5 = new Date("2023-12-30");

if(date4 > date5) {
    console.log("HAPPY NEW YEAR!");
}
```

1. Closures: uma função definida dentro de outra função e tem acesso as variaveis da função definida fora dela. JS frameworks funcionam desse jeito.

```jsx
function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(2);
console.log (game.getScore());
```

1. Element selectors :

```jsx
//1.
const fruit = document.getElementById("fruit");
//retorna o element ou null

//2.
const fruits = document.getElementsByClassName("fruits");
//retorna uma html collection fruits[]

//3.
const h1Elements = document.getElementsByTagName("h1");
//retorna uma html collection h1Elements []

//4.
const element = document.querySelector(".fruits");
// retorna o first elment or null

//5.
const elements = document.querySelector(".fruits");
// retorna uma nodelist
```

1. DOM navigation:

```jsx
const element = document.getElementById("element");
//1. 
const first = element.firstElementChild;
//2.
const first = element.lastElementChild;
//3. 
const first = element.nextElementSibling;
//4. 
const first = element.previousElementSibling;
//5. 
const first = element.parentElement;
//6. 
const first = element.children;
```

1. Add and change HTML:

```jsx
//1.
const newH1 = document.createElement ("h1");

//2.
newH1.textContent = "I like pizza";
newH1.style.color = "red"

//3.
document.body.append(newH1);
document.body.prepend(newH1);
document.body.insertBefore(newH1, currenElement);

//4.
document.removeChild(newH1)
```

1. Mouse events:

```jsx
// events: click, mouseover, mouseout
// .addEventListener (event, callback)
//1.
const mybox= document.getElementById("myBox");
function changeColor(event){
    event.target.style.backgroundColor = "red"
    event.target.textContent="ouch"
}
mybox.addEventListener("click", changeColor);
// or 
mybox.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "red"
    event.target.textContent="ouch"
});
```

1. Key events:

```
// events: keydown, keyup, keypress
// document.addEventListener (event, callback)
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😒";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
```

1. Promisses: representa um tarefa que pode ser concluida no futuro, ela pode estar pendind, fulfulled ou rejected;

```jsx
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash 🗑️");
            }else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

walkDog()
    .then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); console.log("You finished all the chores!")})
    .catch(error => console.error(error));

```