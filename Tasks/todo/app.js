let list = document.getElementById('list_blk');
let btn = document.querySelector('button');
let input = document.querySelector('input');

btn.addEventListener('click', () => {
    if(input.value === ''){
        alert('Input cannot be blank');
        return;
    }
    event.preventDefault()
    let newElement = document.createElement('ul')
    newElement.innerHTML = `${input.value} <button>Delete</button>`

    input.value = ''

    let delBtn = newElement.querySelector('button')
    delBtn.addEventListener('click' , () => {
        newElement.remove()
    })

    list.appendChild(newElement)
})