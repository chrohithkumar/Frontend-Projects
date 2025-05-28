const panels=document.querySelectorAll('.pillar')
console.log(panels)

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeclassname()
        panel.classList.add('active')
    })
})

function removeclassname(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}