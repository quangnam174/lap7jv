const again = document.querySelector('.again')
const number = document.querySelector('.number')
const check = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore= document.querySelector('.highscore')
const guess = document.querySelector('.guess')
const random = document.querySelector('.random')

again.addEventListener(`click`, function(){
    location.reload()
})
check.addEventListener('click',function(){
    const numberrandom = Math.floor(Math.random() * 20) + 1;
    const guessValue = Number(guess.value)

    if (guessValue < numberrandom){
        message.textContent = 'higher number'

    }
    if (guessValue > numberrandom){
        message.textContent = 'smaller number'
    }
    if (guessValue === numberrandom){
        message.textContent ='Correct Number!'
        random.textContent = numberrandom
        document.getElementById('body').style.background = 'rgb(0 183 22)'
        random.style.background = 'rgb(0 183 22)'
        guess.style.background = 'rgb(0 183 22)'
        score.textContent = 20
    }
})
