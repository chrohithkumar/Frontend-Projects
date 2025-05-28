circles=document.querySelectorAll('.circle')
console.log(circles)
PrevBtn=document.getElementById('Prev')
NextBtn=document.getElementById('Next')
progess=document.getElementById('progess')

let currentElement=1

NextBtn.addEventListener('click',()=>{
    currentElement++
    if(currentElement>circles.length){
        currentElement=circles.length
    }
    console.log(currentElement)
})

PrevBtn.addEventListener('click',()=>{
    currentElement--
    if(customElements<1){
        currentElement=1

    }
    update()
    console.log(currentElement)
})

function update(){
    circles.forEach((circle,idk)=>{
        console.log(idk,'idk')
        console.log(currentElement,'currentElement')
        if (idk<currentElement){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    });
}

