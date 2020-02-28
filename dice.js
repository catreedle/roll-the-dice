/* Import readline module */
const readline = require('readline');

/*
 * create a new readline.Interface instance that reads data from standard input
 * and write data to standard output
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Player {

    constructor(name, score) {
        this.name = name
        this.score = score
    }

    // methods
    updateScore() {

        let side = 1 + Math.floor( Math.random() * 6 )
        switch(side%2) {
            case 1:
                this.score += 5;
                break;
            case 0:
                this.score -= 3;
                break;
            default:
                break;
        }
        console.log( `Sisi yang muncul: ${side}. Skor sekarang: ${this.score}`)
    }

    fullRound() {
        let trial = 1;
        while (trial <= 5) {
            this.updateScore()
            trial++;
        }
        console.log(`Name: ${this.name}. Final score: ${this.score}`)
    }
}



const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Please enter your name...', (answer) => {
            player1 = new Player(answer, 0)
            player1.fullRound()
            resolve()
        })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Please enter your name...', (answer) => {
            player2 = new Player(answer, 0)
            player2.fullRound()
            resolve()
        })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Please enter your name...', (answer) => {
            player3 = new Player(answer, 0)
            player3.fullRound()
            resolve()
        })
    })
}


function checkWinner() {
    let scoreWinner = Math.max(player1.score, player2.score, player3.score)
    switch (scoreWinner) {
        case player1.score:
            winner = player1.name
            break;
        case player2.score:
            winner = player2.name
            break;
        case player3.score:
            winner = player3.name
            break;
    }
    console.log(`Winner is ${winner}`)
}

const main = async () => {
    await question1()
    await question2()
    await question3()
    await checkWinner()
    
    rl.close()
}

main()