//! function : it is a block of code which is used to perform particular task and will get executed once we call it or invoke it
// function function_name(parameter1, parameter2){
//     code
// }
// function_name(arg1, arg2)

console.log("js functions");
//!1. Named function/ function declaration
// function add(num1, num2) {
//     console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
// }
// add(2, 4)
// add(10, 20)

//  function add(num1, num2){
//     return num1+num2;
// }
// console.log(add(10,20));
//! 2. annonymouus function: the function without name
//! functional expression :
//! first class function / first citizen function
// let res = function () {
//     return "hello user.."
// }
// console.log(res());

//! IIF-- immediate invoking function
// (function () {
//     console.log("hello js..");
// })()

//! Nested function : the function inside anothet function
// function parent() {
//     let pland = '10 acres'
//     var phouse = 5
//     console.log(`parent properties ${pland} and parent land is ${phouse}`);
//     function child() {
//         let cland = '2 acres'
//         let chouse = 2;
//         console.log(`child properties ${cland} and child house + parent house is ${chouse + phouse}`);
//         //lexical scoping / scope chaining
//         //closure: required data
//     }
//     // child()
//     return child;
// }

// parent()(); //js currying

//! arrow function : it is used to reduce the syntax
// let res = (a) => console.log(a*a);
// res(2)

// let res1 = (user) => console.log(`hello ${user}`);
// res1("hema")

// let demo = (x) =>{
//     let res = x+x
//     console.log(res);
// }
// demo(3)

// //Explicit return
// let add = (x,y) => {
//     return x+y
// }
// console.log(add(10,20));

//!HOF- higher order function : the function which takes one more function as a value to its parameter
//? advantage- can perform multiple task
//callback function: the function which is passed as an argument to anymore function

// function hof(x,y,task){
//     let res = task(x,y)
//     return res
// }

// let add = hof(10,20,function(a,b){
//     return a+b
// })
// console.log(add);

// let mul = hof(2,4,(a,b)=>{return a*b})
// console.log(mul);

//!generator function : to generate the values
//? yield keyword is used to generate the values
// yield keyword is used to pause the execution of the function
// yield keyword is used to resume the execution of the function
// yield keyword is used to return the value from the function
function* generate(){
    yield 1;
    yield 'sri';
    yield 'hyd'
    yield 123
}

let res = generate()
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);

for(let i=1; i<=4; i++){
    console.log(res.next().value);
}
