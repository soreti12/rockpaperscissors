//defining constants
        const buttons = document.querySelectorAll('button');

        const div = document.getElementById('newParagraph');

        const para = document.getElementById('par');

        const roundCounting = document.getElementById('roundCount')
        roundCounting.textContent = 'Round: 0'

        const compCount = document.getElementById('computerCount');

        const useCount = document.getElementById('userCount');

        const rocks = document.createElement('p');
        rocks.textContent = 'Rock'
        let rockContent = rocks.textContent
        
        const papers = document.createElement('p');
        papers.textContent = 'Paper';
        let paperContent = papers.textContent;

        const scissors = document.createElement('p');
        scissors.textContent = 'Scissors';
        let scissorsContent = scissors.textContent;

        let compArr = [`${rockContent}`, `${paperContent}`, `${scissorsContent}`]

        //randomly selects element form compArr for computer will play
        function computerPlay() {
            let round = compArr[Math.floor(Math.random()*compArr.length)];
            return round;
        }

        function replay() {
            const result = computerPlay()
            let anotherResult = compArr[Math.floor(Math.random()*compArr.length)]
        //comparison operator?
            switch (result) {
                case paperContent:  
                    switch (anotherResult) {
                        case rockContent:
                            console.log('who');
                            break;
                        case scissorsContent:
                            console.log('what');
                            break;
                        case paperContent:
                            console.log('where');
                            break;
                    }
                    break;
                case scissorsContent:
                    switch (anotherResult) {
                        case paperContent:
                            console.log('when');
                            break;
                        case rockContent:
                            console.log('why');
                            break;
                        case scissorsContent:
                            console.log('how');
                            break;
                    }
                    break;
                case rockContent: 
                    switch(anotherResult) {
                        case paperContent:
                            console.log('akak');
                            break;
                        case scissorsContent:
                            console.log('aiaia');
                            break;
                        case rockContent:
                            console.log('jiji');
                            break;
                    }
                    break
            } 
        }
        replay()
        
        //function counts number of rounds
        function fiveRounds() {
            let i=0;
            while(i<=5) {
                if (i<=5) {
                     return roundCounting.textContent += i;
                } else {
                    return rockContent
                }
                i++
            }
        }
fiveRounds()



        //plays one round of game
        function playRound(input, computerSelection) {
            console.log(input)
            console.log(computerSelection)
            if (input === 'Rock' && computerSelection === 'Paper') {
                 output = `${computerSelection} beats ${input}!`
                 return output
            } else if (input === 'Rock' && computerSelection === 'Scissors') {
                 output = `${input} beats ${computerSelection}!`
                 return output
            } else if (input === 'Paper' && computerSelection === 'Scissors') {
                 output = `${computerSelection} beats ${input}!`
                 return output
            } else if (input === 'Paper' && computerSelection === 'Rock') {
                 output = `${input} beats ${computerSelection}!`
                 return output
            } else if (input === 'Scissors' && computerSelection === 'Rock') {
                  output =`${computerSelection} beats ${input}!`
                  return output
            } else if (input === 'Scissors' && computerSelection === 'Paper') {
                  output =`${input} beats ${computerSelection}!`
                  return output
            } else {
                 output = 'It\'s a tie!'
                 return output
            }
        }
        buttons.forEach((button => {
            button.addEventListener('click', () => {
                const computerSelection = computerPlay();
                const input = button.id;
                para.textContent = playRound(input, computerSelection)
                div.appendChild(para);
            })
        }))