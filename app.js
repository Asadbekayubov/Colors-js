const form = document.querySelector(".form")
const input = document.querySelector(".form__input")
const body = document.querySelector("body")
const rounds = document.querySelector(".round-wrapper")

const colors = []
let count = colors.length

form.addEventListener("submit" , (e)=> {
    e.preventDefault()
    let inputVal = input.value.trim()

    body.style.backgroundColor = inputVal;
    if(body.style.backgroundColor === inputVal && !colors.includes(inputVal)){
        colors.push(inputVal)
        rounds.childNodes.forEach((round) => {
            round.classList.remove("round-toggle")
        })
        rounds.innerHTML += `<div class="round round-toggle" style="background-color: ${inputVal}"></div>`
    }
    count = colors.length

    input.value = ""
})

const prew = document.querySelector(".prew")
const next = document.querySelector(".next")


prew.addEventListener("click" , ()=> {
    if(count>1){
        count--
        body.style.background = colors[count - 1]
        rounds.childNodes.forEach((round) => {
            round.classList.remove("round-toggle")
        })
        rounds.childNodes[count - 1].classList.add("round-toggle")
    }
})

next.addEventListener("click" , ()=> {
    if(count < colors.length){
        count++
        body.style.background = colors[count - 1]
        rounds.childNodes.forEach((round) => {
            round.classList.remove("round-toggle")
        })
        rounds.childNodes[count - 1].classList.add("round-toggle")
    }
})