const numberButtons = document.querySelectorAll(".numbers")
const operatorButtons = document.querySelectorAll(".operators")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")
const clearAllButton = document.querySelector(".clearall")
const squareRootButton = document.querySelector(".squareroot")
let superiorDisplay = document.querySelector(".displaysup")
let inferiorDisplay = document.querySelector(".displayinf")

let startOver = false
let eliminateLastElement = false

numberButtons.forEach((button) => { 
    button.addEventListener("click", (event) => {
        let value = event.target.innerText
        if (value == "." && ((inferiorDisplay.value).includes("00"))) {
            return
        } 
        if ((inferiorDisplay.value).length > 19){
            superiorDisplay.value = '〰️ 〰️ 〰️ '
            inferiorDisplay.value = 'Display ERROR'
            startOver = true
        } else {
        if (value == "." && ((inferiorDisplay.value).includes("."))) {
            return
        } 
        if (startOver){
            superiorDisplay.value = ''
            inferiorDisplay.value = ''
            startOver = false
        } 
        if (eliminateLastElement) {
            superiorDisplay.value = inferiorDisplay.value
            inferiorDisplay.value = ''
            inferiorDisplay.value += value
            eliminateLastElement = false
        } else {
           inferiorDisplay.value += value
        }
        }
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let value = event.target.innerText
        if((inferiorDisplay.value === '' && !(value === "-")) || inferiorDisplay.value === 'Syntax ERROR'){
            return
        } 
        if (eliminateLastElement && startOver){
            superiorDisplay.value = inferiorDisplay.value
            superiorDisplay.value = superiorDisplay.value += value 
            inferiorDisplay.value = ''
            eliminateLastElement = false
            startOver = false
            return
        } else if (eliminateLastElement && !startOver){
            superiorDisplay.value = inferiorDisplay.value
            superiorDisplay.value = superiorDisplay.value += value 
            inferiorDisplay.value = ''
            eliminateLastElement = false
            return
        }
        if (startOver){
            superiorDisplay.value = result()
            inferiorDisplay.value = '' 
            superiorDisplay.value = superiorDisplay.value += value
            startOver = false
            return
        } 
        superiorDisplay.value = superiorDisplay.value += inferiorDisplay.value += value 
        inferiorDisplay.value = ''
        
    })
})

clearAllButton.addEventListener("click", (event) => {
    let value = event.target.innerText
    superiorDisplay.value = ''
    inferiorDisplay.value = ''
    startOver = false
})

clearButton.addEventListener("click", (event) => {
    let value = event.target.innerText
    if (inferiorDisplay.value == 'Syntax ERROR') {
        superiorDisplay.value = ''
        inferiorDisplay.value = ''
    }
    inferiorDisplay.value = inferiorDisplay.value.slice(0, -1)
    eliminateLastElement = true
})

squareRootButton.addEventListener("click", (event) => {
    let value = event.target.innerText
    let squareRootResult = squareRoot()
    if (!(squareRootResult)){
        inferiorDisplay.value = 'Syntax ERROR'
        superiorDisplay.value = '➿➿➿➿'
        startOver = true
    } else {
        superiorDisplay.value = '√' + inferiorDisplay.value 
        inferiorDisplay.value = squareRootResult
        startOver = true
    }
})

equalButton.addEventListener("click", (event) => {
    if (inferiorDisplay.value == '') {
        return
    }
    startOver = true
    superiorDisplay.value = superiorDisplay.value += inferiorDisplay.value 
    if (!result()){
        inferiorDisplay.value = 'Syntax ERROR'
        superiorDisplay.value = '♾️♾️♾️♾️♾️'
    } 
    if (eliminateLastElement){
        inferiorDisplay.value = result()
        superiorDisplay.value = superiorDisplay.value.slice(0, -1)
        eliminateLastElement = true  
    } else {
    inferiorDisplay.value = result() 
    }
})

const result = () => {
    if ((superiorDisplay.value).includes('√')){
        superiorDisplay.value = inferiorDisplay.value
    } 
    let checkResult = eval(superiorDisplay.value) 
    if (checkResult === Infinity) {
        return false
    } else {
        return checkResult
    }
}


const squareRoot = () => {
    let resultSquareRoot = Math.sqrt(inferiorDisplay.value)
    if (resultSquareRoot == NaN) {
        return false
    } else {
        return resultSquareRoot
    }
}

