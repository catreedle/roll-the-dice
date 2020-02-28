let score = 0
let play = true
let num
let trial = 1

const name = prompt('What is your name?')

while (play == true && trial <=5 ){
    alert('Click to roll the dice!')
    
    num = Math.floor(Math.random() * Math.floor(6)) + 1;

    // if (num === 1 || 3 || 5) {
    //     score += 5
    // } else {
    //     score -= 3
    // }
    switch(num%2){
        case 1:
            score += 5
            break;
        case 0:
            score -= 3
            break;

    }
    console.log(num, score)
    
    alert(`Halo ${name}! Angka di dadu adalah ${num}. Skor anda adalah ${score}`)
    
    play = confirm('Do you want to play again?')
    trial++
}

alert(`Name: ${name}. Score: ${score}.`)




