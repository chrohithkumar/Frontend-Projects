let input = document.querySelector('.input')
let search=document.querySelector('.search')

search.addEventListener('click',()=>{
    console.log('clicked')
    input.classList.toggle('active').focus()
})



