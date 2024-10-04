let btn = document.querySelector('button')
btn.addEventListener('click', function(){
// function details(){

    btn.style.display = 'none';// button emove/hide in next 
    let fig = document.createElement('figure')
    document.body.appendChild(fig)

    let image = document.createElement('img')
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWjL-NLGuI9T9o5mzCqx1fIrWXGEFOCIisA&s'
    // document.body.appendChild(image)
    fig.appendChild(image)

    let text = document.createElement('h1');
    text.setAttribute('id' , 'name')
    text.innerHTML = 'I am MB' ;
    // document.body.appendChild(text)
    fig.appendChild(text)
 
    let loc = document.createElement('p');
    loc.setAttribute('class' , 'loc')
    loc.innerHTML = 'HYD' ;
    // document.body.appendChild(loc)
    fig.appendChild(loc)

})

