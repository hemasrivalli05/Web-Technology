// console.log("HELLO JS FROM EXTERNAL")
// //Declaration
// var a;
// //initialization
// a=10;
// //?re-initialization
// a="sri";
// //!re-declaration
// var a =50;
// console.log(a)

// //declaration
// let b;
// //initialization
// b="hema";
// //?re-initialization
// b=100;
// //
// //!re-declaration not possible , let b = 200; not possible
// console.log(b)

// //declaration and initialization
// const c = 90;
// //reinitialization not possible 
// //!re-declaration not possible , const b = 200; not possible
// console.log(c)

// console.log(a);
// console.log(c);
// var a=20;



// let c=50;
//! datatypes
// //string
// let ename = "hema";
// var loc = "hyd";
// //string interpolation , templete string
// console.log(`dear employee ${ename} you are located to the location ${loc}`);

// //typeof
// console.log(typeof ename);
// console.log(typeof loc);

// //number
// let empid = 100;
// console.log(empid);
// console.log(typeof empid);

// //boolean
// let isDeveloper = true;
// console.log(isDeveloper);

// //bigint
// let a = 1n;
// console.log(typeof a);

// //null
// let company = null;
// console.log(company);

// //undefined
// let project;
// console.log(typeof project);

// //symbol
// let work = Symbol;
// console.log(typeof work);

// let num1 = 10;
// let num2 = "10";
// console.log(num1 == num2 );//value
// console.log(num1 === num2 );//value and datatype

// let x =10;
// var y = 20;
// (x > y) ? console("X is greater") :  console.log("Y is greater");

// //if
// let cost = Number(prompt("Enter the cost")) //"50"
// console.log(cost);
// console.log(typeof cost);

// if(cost >= 500 && cost <= 1000){
//     let dis = 2/100*cost;
//     document.write(`dear customer your payable amount is rs.${cost-dis} with this discount of rs.${dis}`)
// }
// else if(cost >= 1001 && cost <= 2000){
//     let dis = 5/100*cost;
//     document.write(`dear customer your payable amount is rs.${cost-dis} with this discount of rs.${dis}`)
// }
// else if(cost >= 2001 && cost <= 5000){
//     let dis = 10/100*cost;
//     document.write(`dear customer your payable amount is rs.${cost-dis} with this discount of rs.${dis}`)
// }
// else{
//     document.write(`dear customer your payable amount is rs.${cost} with this discount`)

// }

//!switch

// let day = Number(prompt("enter the day"));
// switch(day){
//     case 1: document.write("Its monday.....");
//     break;
//     case 2: document.write("Its tuesday.....");
//     break;
//     case 3: document.write("Its wednesday.....");
//     break;
//     case 4: document.write("Its thursday.....");
//     break;
//     case 5: document.write("Its friday.....");
//     break;
//     case 6: document.write("Its saturday.....");
//     break;
//     case 7: document.write("Its sunday.....");
//     break;
//     default: document.write("Invalid day");
// }

//! loops
//while
let a =1;
while(a <=10){
    document.writeln("gud evng❤️");
    a++;
}

//do while loop
let x =1;
do{
    document.writeln("i love myself💕");
    x++;
}while(x <=10)

//for
for(let i = 0; i <=10; i++){
    document.writeln("i love my family❤️");
}
