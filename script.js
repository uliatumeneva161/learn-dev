const totalLessons = 6

function updateProgress(current){

const progressLine = document.querySelector('.progress_val')

const percent = (current / totalLessons) * 100

progressLine.style.width = percent + '%'

}

function trainer({answer,lessonNumber,apply}){

const form = document.querySelector('#form')
const input = document.querySelector('input')
const message = document.querySelector('.message')
const sqs = document.querySelector('.sqs')

input.focus()

updateProgress(lessonNumber)

form.addEventListener('submit',(e)=>{

e.preventDefault()

const val = input.value.trim().toLowerCase()

if(val === answer){

message.innerText='Правильно'
message.className='message success'

if(apply) apply(sqs)

}else{

message.innerText='Попробуй снова'
message.className='message error'

}

})

}