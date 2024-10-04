//! BOM
// console.log(window);

// //! location: provide the information regarding the current url
// console.log(window.location);
// console.log(location);
// console.log(location.href);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location);
// location.assign('https://www.flipkart.com')

// //! screen : information about the users screen
// console.log(screen);
// console.log(screen.availHeight);
// console.log(screen.availWidth);
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);

// //! navigator : info about the browser itself
// console.log(navigator.appCodeName);
// console.log(navigator.appName);
// console.log(navigator.appVersion);

// //!history
// console.log(history);

// //! document
// console.log(document);

//? direct access
// console.log(document.body);
// console.log(document.head);
// console.log(document.title);
// console.log(document.baseURI);
// console.log(document.scripts);

// let images = document.images
// console.log(images);
// images[0].style.border = '5px solid green'

// let links = document.links
// console.log(links);
// links[0].style.border = '1px solid red'
// links[1].style.textDecoration = 'none'
// links[0].style.textTransform = 'uppercase'
// links[3].style.padding = '5px 10px'

// console.log(document.forms[0]);

//! getElementById() : returns the single element
let h1 = document.getElementById('mock')
console.log(h1)

//! getElementByClassname() : returns html collection : it is array like object
let secs = document.getElementsByClassName('ball')
console.log(secs);

//conversion htmlcollection into an array : Array.from
let arr = Array.from(secs)
console.log(arr);

arr.forEach((sec) => {
    sec.style.height='100px'
    sec.style.width='100px'
    sec.style.backgroundColor='yellow'
    sec.style.display='inline-block'
    sec.style.borderRadius='50%'

})

//! getElementByTagname(): returns the html collection
let btns = document.getElementsByTagName('button')
console.log(btns);

let arr2 = Array.from(btns)
console.log(arr2);

for(let btn of arr2){
    btn.style.backgroundColor = 'blue';
    btn.style.border = 'none';
    btn.style.color = 'white';
    btn.style.padding = '10px 20px';

}

//! querySelector(): targets element with specified css selector
let main = document.querySelector('main'); // #day also can use
console.log(main);
main.style.color = 'green';

//! querySelectorAll(): targets element with specified css selector
let images = document.querySelectorAll('#main_blk img'); // descendent - space for parent all children tag
console.log(images);
for(let i of images){
    i.style.border = '3px solid red';

}










