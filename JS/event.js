// //

// ! click I
// let input = document.querySelector('input');
// let btn = document.querySelector('button')

// btn.addEventListener('click', ()=>{
// document.body.style.backgroundColor = input.value;
// })

// //! mouseover
// let home = document.getElementById('home');
// let dp = document.getElementById('dropdown');

// home.addEventListener('mouseover', ()=>{
// // dp.style.display = 'block' 
// home.style.color = 'blue'
// })

// mouseout

// home.addEventListener('mouseout', ()=>{

// dp.style.display = 'none'

// home.style.color = 'black'

// })

// //! mousedown
// let heart = document.getElementById('heart')
// heart.addEventListener('mousedown' , ()=> {
//     heart.innerHTML = '😍'
// })

// //!mouseup
// heart.addEventListener('mouseup' , ()=> {
//     heart.innerHTML = '💕'
// })

//! contextmenu (right click)
// let qsp = document.getElementById('qsp')
// qsp.addEventListener('contextmenu' , ()=> {
//     qsp.innerHTML += ':platform to learn coding';
//     qsp.style.color = 'orange';
//     document.body.style.backgroundColor = 'black'
// })

// //! double click
// let btn = document.querySelector('button');
// btn.addEventListener('dblclick' , ()=> {
//     let h1 = document.createElement('h1');
//     h1.innerHTML = 'Double Clicked!';
//     btn.style.display = 'none';
//     document.body.appendChild(h1);
// })

//! key events
// addEventListener('keypress', (e)=>{
//     console.log(`key pressed ${e.key}`);
// })

// addEventListener('keydown', (e)=>{
//     console.log(`key long pressed ${e.key}`);
// })

// addEventListener('keyup' , (e) => {
//     console.log(`key released ${e.key}`);
// })


// //! submit
// let form = document.forms[0];
// form.addEventListener('submit', () =>{
//     event.preventDefault()
//     // document.body.style.backgroundColor = 'green'
//     alert('data submitted successfully')
// })

// //!
// document.querySelector('a').addEventListener('click',()=>{
//     event.preventDefault()
//     document.querySelector('a').style.color='green'
// })

//!event propagation
// let gp = document.getElementById('gp')
// let p = document.getElementById('p')
// let c = document.getElementById('c')

// gp.addEventListener('click' , ()=> {
//     event.stopPropagation();
//     gp.style.backgroundColor='yellow';
//     console.log('grand parent clicked');
// },false) //false - child to patrent 

// p.addEventListener('click' , ()=> {
//     event.stopPropagation();
//     p.style.backgroundColor='red';
//     console.log(' parent clicked');
// },false)

// c.addEventListener('click' , ()=> {
//     event.stopPropagation();
//     c.style.backgroundColor='green';
//     console.log('Child clicked');
// },false)

//! JSON : javascript object notation

// let obj = {
//     ename: 'john',
//     eid: 123,
//     salary: 300
// }
// console.log(obj);

// //! stringify(): normal--to--json
// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// //! parse() : json--to--normal
// let newObj = JSON.parse(jsonObj);
// console.log(newObj);

//! Timedelays 
//? setTimeout()-->it executes one time
//asynchronous - time delay msg and bye msg show first and then timeout console log msg
// console.log("Time delay")
// let timer = setTimeout(() => {
//     console.log('hello after 3sec');
// }, 3000); //3000ms = 3s
// console.log("bye");

//?setInterval() :--> it executes repeatadly
// console.log("set interval")
// setInterval(() => {
//     console.log('hello after 2sec');
// }, 2000); //3000ms = 3s
// console.log("bye");

//?clearInterval() :--> to stop interval

// let myInterval = setInterval(evening , 1000)

// function evening(){
//     document.getElementById('demo').innerHTML += 'gvg...'
// }

// document.write(myInterval);//3 showing dont know why
// // 3 is interval id 

// function stopInterval() {
//         clearInterval(myInterval); //stop interval
// }

//! PROMISE - mock ---pending, resolved , rejected
// let myPromise = new Promise((res, rej) => {
//     let mock = false;
//     if(mock === true){
//       res('successfully')  
//       }else{
//         rej('server prblm')
//         }
// })
// console.log(myPromise);

// myPromise.then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//         console.log(err);
// })
// .finally(()=> {
//     console.log('finally method--thanku');
// })

//! async and await
// async function demo(){
//     return 'hello'
// }
// console.log(demo());

// async function getData(){
//     let res = await fetch('https://fakestoreapi.com/products');
//     console.log(res);
//     let data = await res.json()
//     console.log(data);
//     data.forEach(obj => {
//         console.log(obj);
//         let h1 = document.createElement('h1') ;
//         h1.innerHTML = obj.title ;

//         let image = document.createElement('img');
//         image.src = obj.image
        
//         // document.body.appendChild(h1);
//         // document.body.appendChild(image);
//         document.body.append(h1, image);
//     });
// }

// getData()

//!localstorage
// //setItem()
// localStorage.setItem('empname' , 'Ram');
// localStorage.setItem('income' , 30000)

// // getItem()
// console.log(localStorage.getItem('empname'));
// console.log(localStorage.getItem('income'));

// //removeItem
// localStorage.removeItem('income');

// //clear()
// localStorage.clear()

sessionStorage.setItem('empname' , 'Remo');
sessionStorage.setItem('income' , 40000);
console.log(sessionStorage.getItem('empname'));
console.log(sessionStorage.getItem('income'));
sessionStorage.removeItem('income');
sessionStorage.clear();