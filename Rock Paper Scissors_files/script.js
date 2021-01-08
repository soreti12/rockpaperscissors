const roundCount = document.getElementById('roundCount')
const input = document.querySelectorAll('input')
const rock = document.getElementById('Rock')
const paper = document.getElementById('Paper')
const scissors = document.getElementById('Scissors')


//generates computer value
let array = ['Rock','Paper','Scissors']
computerPlay = () => {
    return array[Math.floor(Math.random()*array.length)]
}

//runs when computer wins round
let compScore = document.getElementById('compScore')
let cScore = 0
computerWin = () => {
    // roundCount.innerHTML = 'Computer Wins This Round!'
    cScore++
    compScore.innerHTML = cScore
}

//runs when user wins round
let userScore = document.getElementById('userScore')
let uScore = 0
userWin = () => {
    // roundCount.innerHTML = 'You Win This Round!'
    uScore++
    userScore.innerHTML = uScore
}


tie = () => {
    // roundCount.innerHTML = `It's a Tie!`
}

playRound = () => {
    let roundNum = 0;
    let i=0;
    while (roundNum<=5) {
        roundNum+=i
        roundCount.innerHTML = `Round ${roundNum}`

        i++
    }
}



//runs when a round is played and returns winner
function play(user, comp) {
    playRound()
    switch (comp) {
        case array[1]:  
            switch (user) {
                case array[0]:
                    computerWin()
                    break;
                case array[2]:
                    userWin()
                    break;
                case array[1]:
                    tie()
                    break;
            }
            break;
        case array[2]:
            switch (user) {
                case array[1]:
                    computerWin()
                    break;
                case array[0]:
                    userWin()
                    break;
                case array[2]:
                    tie()
                    break;
            }
            break;
        case array[0]: 
            switch(user) {
                case array[1]:
                    userWin()
                    break;
                case array[2]:
                    computerWin()
                    break;
                case array[0]:
                    tie()
                    break;
            }
            break
    } 
}



input.forEach(x=> x.addEventListener('click', () => {
    let c = x.id;
    let b = computerPlay()
    play(c,b)
}))






// const roundCounting = document.getElementById('roundCount')
// let num = 0;
// roundCounting.textContent = `Round: ${num}`
// function playRound() {
//    if (num<100) {
//        num+=1;
//        roundCounting.textContent = `Round ${num}`;
//    }
// } 

// let compArr = [`${rockContent}`, `${paperContent}`, `${scissorsContent}`]

// //randomly selects element form compArr for computer will play
// function computerPlay() {
//     let round = compArr[Math.floor(Math.random()*compArr.length)];
//     return round;
// }




// buttons.forEach((button => {
//     button.addEventListener('click', () => {
//         const user = button.id;
//         const result = computerPlay();
//         play(user, result);
//     })
// }))

