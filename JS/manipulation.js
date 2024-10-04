let h1 = document.getElementById('demo')
console.log(h1);

//! innerHTML : to change the html of the element 
// h1.innerHTML = 'good night...!'
// h1.innerHTML = '<i>good night...!</i>'

//! innerText : to change the content - // with tags won't work
// h1.innerText = 'have a great sleep' 

//! changing the value of an attribute
// h1.id = 'greet'

// // document.images[0].src = 'https://fyf.tac-cdn.net/images/products/small/FYF-118.jpg?auto=webp&quality=60&width=650'
// function textChange(){
//     h1.innerText = 'have a great sleep' 

// }
// function flowers() {
// document.images[0].src = 'https://fyf.tac-cdn.net/images/products/small/FYF-118.jpg?auto=webp&quality=60&width=650'

// }

// //! changing style of thge element
// document.body.style.backgroundColor ='black'
// document.body.style.color ='yellow'

// //! adding the attribute
// h1.setAttribute('class' , 'heading')

//! adding the elements
// let newElement = document.createElement('section');
// newElement.setAttribute('id' , 'box')

// //! append
// document.body.appendChild(newElement);

// //! removeChild()
// // document.body.removeChild(h1);
// document.body.removeChild(document.images[0]);

// // h1.remove()
// newElement.remove()// box removed
// // document.images[0].remove()

//! replaceChild() 
// (took one box inside image added  now replace image with text )
// let fig = document.createElement('figure')
// let image = document.createElement('img')
// image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWjL-NLGuI9T9o5mzCqx1fIrWXGEFOCIisA&s'

// document.body.appendChild(fig)
// fig.appendChild(image)


// let text = document.createElement('h1');
// text.innerHTML = 'hlo i am peacock' ;

// fig.replaceChild(text, image); // new replace one add first then old one 
// //// fig.replaceChild(image, text); // wont work

// document.write('Good evening')

//*task 
// function generateCard(){
//     let sec = document.createElement('section');
// }