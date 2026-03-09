function initTrainer(config){

const container = document.querySelector('.sqs')
const form = document.getElementById('form')
const input = document.querySelector('#form input')
const message = document.querySelector('.message')
const progressVal = document.querySelector('.progress_val')

const answer = config.answer.toLowerCase()

let value = ''

input.focus()

input.addEventListener('input', e=>{
value = e.target.value.trim().toLowerCase()
message.innerText = ''
})

form.addEventListener('submit', e=>{
e.preventDefault()

if(value === answer){

message.innerText = 'correct'

Object.keys(config.style).forEach(key=>{
container.style[key] = config.style[key]
})

if(config.onSuccess){
config.onSuccess()
}

}else{

if(config.hint){
message.innerText = config.hint
}else{
message.innerText = 'попробуй снова'
}

}

})

if(config.progress){
progressVal.style.width = config.progress + '%'
}

}