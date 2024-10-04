// objects : to store the data in tht form of key value pair

/* var/let/const obj_name = {
    properties
        key1 : value1,
        key2 : 
} */

// //! 1st way -->object literal 
// let obj = {
//     ename : 'Ram',
//     salary : 2000,
//     address : 'del'
// }

// console.log(obj);

// //! access
// // dot Notation
// console.log(obj.ename);

// //bracket notation
// console.log(obj['address']);

// //! update
// //obj.salary = 300;
// obj['salary'] = 3000
// console.log('After salary updation')
// console.log(obj);

// //! add
// //obj.age = 25;
// obj['add'] = 30
// console.log('After age add')
// console.log(obj);

// //! delete
// delete obj.salary
// console.log(obj);

// //!2nd way --> object constructor
// let car = new Object()
// car.brand = 'BMW'
// car.color = 'black'
// car.cost = 300
// console.log(car);

// //! 3rd way constructor function
// function student(sname, sid, address){
//     this.sname = sname;
//     this.sid = sid;
//     this.address = address
// }

// let std1 = new student('hema' , 111 , 'AP');
// console.log(std1);

// let std2 = new student('sri' , 131 , 'tel');
// console.log(std2);

// let emp = {
//     fname : 'rishi',
//     lname : 'A',
//     address : 'UP',
//     salary: 100 ,
//     skills : ['eating' , 'singing' , 'sleeping'],
//     isDeveloper : true,
//     greet : function(){
//         console.log(`hello i am ${emp.fname} ${this.lname} and i am from ${this.address} `);
//     }
//     //object method
// }
// console.log(emp.fname);
// console.log(emp.skills);
// console.log(emp.skills[1]);
// emp.greet()

//! object methods

// let emp = {
//     ename : 'gagan',
//     salary : 200,
//     age : 30
// }

// //keys(): return array of keys of the object
// console.log(Object.keys(emp));

// //values() : returns array of value of the object
// console.log(Object.values(emp));

// //Entries(): return array of keys values
// console.log(Object.entries(emp));

// // has OwnProperty()
// console.log(emp.hasOwnProperty('ename')); // true
// console.log(emp.hasOwnProperty('address')); // false

// // assign() : merge multiple objects
// let address = {
//     state : 'AP',
//     city: 'vij'
// }

// // Object.assign(emp, address);
// // console.log(emp);

// let newEmp = Object.assign({}, emp, address)
// console.log(newEmp);
// console.log(emp);

// //! seal(): to seal the object : u can't add and delete

// Object.seal(emp);
// // console.log(emp);
// console.log('after seal cannot add and delete')

// //! add --> camt add after seal
// emp.eid = 123;
// console.log(emp);

// //! delete 
// delete emp.ename;
// console.log(emp);

// // accees--> can access after seal 
// console.log(emp.ename);

// //update --> can update after seal
// emp.salary = 4000
// console.log(emp);

// //! isSealed()
// console.log(Object.isSealed(emp));// true 
// console.log(Object.isSealed(address)); // false

// //! freeze():  to freeze the object : u can't add , delete , update
// Object.freeze(emp)
// console.log('after freeze --> cannott add , delete , update')
// console.log(emp);

// //! add 
// emp.role = 'ASE'
// console.log(emp);

// //! delete
// delete emp.salary
// console.log(emp);

// //! update
// emp.age = 26
// console.log(emp);

// //access
// console.log(emp.age);

// //! isFrozen()
// console.log(Object.isFrozen(emp)); // true
// console.log(Object.isFrozen(address)); // false

//! call(), apply() , bind()

// let std1 = {
//     fname : 'Himanshu',
//     lname : 'A',
//     address : 'Bng',
//     fullname : function(){
//         console.log(`hello i am ${this.fname} ${this.lname}`);
//     }
// }

// std1.fullname()

// let std2 = {
//     fname : 'manshu',
//     lname : 'B',
//     address : 'tg',
// }
// // call()
// std1.fullname.call(std2)

// let fullname1 = function(company, loc){
//     console.log(`hello i am ${this.fname} ${this.lname} and i am working in ${company} company in ${loc} `);
// }
// let std3 = {
//     fname : 'sri',
//     lname : 'del',
//     address : 'thtg',
// }
// let std4 = {
//     fname : 'Deepak',
//     lname : 'kerala',
//     address : 'Td',
// }
// fullname1.call(std3)
// fullname1.call(std4 , 'VVDN' , 'Gurgaon')

// // apply() : the arguments u should pass in the form of array
// fullname1.apply(std4,['concentrix' , 'bng'])

// // bind() : wont execute the function directly so need to store in one variable and call
// let res1= fullname1.bind(std3,'bind' , 'del')
// res1()

//! iterators : forEach, for of and for in

// let stds = ['Ram', 'sita', 'ravi', 'sri', 'valli'];

// //forEach() - it is hof , it executes the specified function for each elements of the array
// stds.forEach((sname) => {
//     console.log(sname)
//     console.log(`hello ${sname} good evening`);
// })

// //for of: used to iterate array
// for(let std of stds){
//     console.log(`hi ${std}`);
// }

// //for in : iterates over keys of en object
// let bike = {
//     brand : 'Bmw',
//     cost: 100,
//     engine : 'petrol'
// }

// for(let k in bike){
//     console.log(bike[k])
//     console.log(`${k} ---- ${bike[k]}`);
// }

//?Date()
// let d = new Date()
// // console.log(d)
// // console.log(d.getFullYear())
// // console.log(d.getDate())
// // console.log(d.getMonth()) // starts from 0 so june months show as 5
// // console.log(d.getDay())
// // console.log(d.getHours())
// // console.log(d.getMinutes())
// // console.log(d.getSeconds())
// // console.log(d.getMilliseconds())

// d.setFullYear(2001)
// d.setMonth(4)
// d.setDate(28)
// d.setHours(12)
// console.log(d);

// //! Math()
// //sqrt()
// console.log(Math.sqrt(4)) ;

// //cbrt
// console.log(Math.cbrt(8)) ;

// // round() : round up the value to the nearest integer
// console.log(Math.round(2.9)) ;
// console.log(Math.round(-4.3)) ;
// console.log(Math.round(-4.9)) ;
// console.log(Math.round(6.5)) ;

// // ceil(): round up the value to the nearest highest integer
// console.log(Math.ceil(4.3)) ;
// console.log(Math.ceil(5.9)) ;
// console.log(Math.ceil(9.2)) ;

// // floor(): round up the value to the nearest lowest integer
// console.log(Math.floor(4.3)) ;
// console.log(Math.floor(5.9)) ;
// console.log(Math.floor(40.3)) ;
// console.log(Math.floor(-4.3)) ;
// console.log(Math.floor(-4.0)) ;
// console.log(Math.floor(-4.9)) ;

// // trunc() : it returns only integer part
// console.log(Math.trunc(-4.3)) ;
// console.log(Math.trunc(-64.33)) ;
// console.log(Math.trunc(4.3)) ;
// console.log(Math.trunc(-4.9)) ;

// //max()
// console.log(Math.max(10, 60, 89, -4.9)) ;

// //min()
// console.log(Math.min(10, 60, 89, -4.9)) ;

// //random()
// document.write(Math.random());

// function generateOtp(){
//     let text = '0123456789ABCD';
//     let otp = ''
//     for(let i =1 ; i<=6; i++){
//         otp += text[Math.floor(Math.random()*text.length)]
//     }
//     alert(`The generated OTP ${otp} will be valid for only 30 sec`)
// }
// generateOtp()

//! String : collection of characters
let str = 'Good Eveninog'
console.log(str.length);

//! string methods 
//? 1. slice()  : to get the part of the array 
console.log(str.slice(5, 9));
console.log(str.slice(6)); //
console.log(str.slice(3, -3));
//from left -> 0 to 1,2,3... , from right negative -1 ,-2,-3...
console.log(str.slice(-4)); //

//? 2. substring() : similar to slice -- but won't accept negative index
console.log(str.substring(2,5)); 
console.log(str.substring(2,-5)); // negative not acceptable

//? 3. substr() : second argument represents length of the string
console.log(str.substr(5,3)); 

//? replace() : 
console.log(str.replace('Evening' , 'Morning')); 
console.log(str.replace('evening' , 'morning')); // string should same then only will work
console.log(str.replace('o' , '🌞')); 

//? replace
console.log(str.replaceAll('o' , '☀️')); 

//?trim(): remove the start and end space from the string
 let text = '     heyyy    '
 console.log(text)
 console.log(text.trim())

 //? indexOf()
 console.log(str.indexOf('o'))

 //? lastIndexOf()
 console.log(str.lastIndexOf('o'))

 //? includes()
 console.log(str.includes('Even'));

 //? repeat() : to repeat the string
 console.log(str.repeat(10));

 //? charAt():
 console.log(str.charAt(2));

//? charCodeAt(): ascii value
console.log(str.charAt(3));

//? toUpperCase()
console.log(str.toUpperCase());

//? toLowerCase()
console.log(str.toLowerCase());

//? concat() : to merge the string
console.log(text.concat(str));

//? padStart() : XXXXXXX2345
let num = '2145'
console.log(num.padStart('9' , 'X'))

//? padEnd() : XXXXXXX2345
let num1 = '2614'
console.log(num1.padEnd('6' , 'X'))


