const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const reset = document.getElementById('reset')
const display = document.querySelector('.num')

let count = 0

updateDisplay()

function updateDisplay(){
    display.innerHTML = count
}

function resetNumber(){
    count = 0
    updateDisplay()
}


increase.addEventListener('click', () => {
    count++
    updateDisplay()
})

decrease.addEventListener('click', () => {
    if(count == 0){
        return
    } else(count--)  
    updateDisplay() 
})

reset.addEventListener('click', resetNumber)