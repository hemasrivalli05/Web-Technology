let section = document.querySelector('section');
let like = document.querySelector('i');

section.addEventListener('dblclick' , ()=> {
    like.style.transform = 'scale(1)';
    like.style.transition = 'transform 1.5s';
    setTimeout(()=>{
        like.style.opacity = '0';
        
    },2000)
})