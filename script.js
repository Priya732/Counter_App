let counter=0

let counter_value=document.getElementById('counter-value')


let increase=document.getElementById('increase')
let decrease=document.getElementById('decrease')

let reset=document.getElementById('reset')

increase.addEventListener('click',()=>{
    counter++;
    counter_value.innerHTML=counter
})

decrease.addEventListener('click',()=>{
    if (counter===0){
        return
    }
    counter--;
    counter_value.innerHTML=counter
})

reset.addEventListener('click',()=>{
    counter=0
    counter_value.innerHTML=counter
})