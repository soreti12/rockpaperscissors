//defining global scopes
        const buttons = document.querySelectorAll('button');

        const para = document.getElementById('par');

       const scorePara = document.getElementsByClassName('scorePara')

        const rocks = document.createElement('p');
        rocks.textContent = 'Rock'
        let rockContent = rocks.textContent
        
        const papers = document.createElement('p');
        papers.textContent = 'Paper';
        let paperContent = papers.textContent;

        const scissors = document.createElement('p');
        scissors.textContent = 'Scissors';
        let scissorsContent = scissors.textContent;

        //this runs in the playRound() function below when user wins
        let userSum = 0;
        function userWin(aa) {
            para.textContent = 'You Win This Round!';
            const score = document.getElementById('userScoreId');
            if (userSum >= 0) {
                userSum+=1;
                score.textContent = userSum;
            }

        }
        
        //this runs in the playRoud() function below when computer wins
        let computerSum = 0;
        function computerWin(bb) {
            para.textContent = 'Computer Wins This Round!';
            const score = document.getElementById('computerScoreId');
            if (computerSum >= 0) {
                computerSum+=1;
                score.textContent = computerSum;
            }

        }

        //this runs in the playRound() function below when it is a tie
        function tie() {
            para.textContent = 'It\'s A Tie!'
        }
        

        const roundCounting = document.getElementById('roundCount')
        let num = 0;
        roundCounting.textContent = `Round: ${num}`
       function playRound() {
           if (num<100) {
               num+=1;
               roundCounting.textContent = `Round ${num}`;
           }
       } 

        let compArr = [`${rockContent}`, `${paperContent}`, `${scissorsContent}`]

        //randomly selects element form compArr for computer will play
        function computerPlay() {
            let round = compArr[Math.floor(Math.random()*compArr.length)];
            return round;
        }

        function play(user, result) {
            playRound()
        //comparison operator?
            switch (result) {
                case paperContent:  
                    switch (user) {
                        case rockContent:
                            computerWin()
                            break;
                        case scissorsContent:
                            userWin()
                            break;
                        case paperContent:
                            tie()
                            break;
                    }
                    break;
                case scissorsContent:
                    switch (user) {
                        case paperContent:
                            computerWin()
                            break;
                        case rockContent:
                            userWin()
                            break;
                        case scissorsContent:
                            tie()
                            break;
                    }
                    break;
                case rockContent: 
                    switch(user) {
                        case paperContent:
                            userWin()
                            break;
                        case scissorsContent:
                            computerWin()
                            break;
                        case rockContent:
                            tie()
                            break;
                    }
                    break
            } 
        }


        buttons.forEach((button => {
            button.addEventListener('click', () => {
                const user = button.id;
                const result = computerPlay();
                play(user, result);
            })
        }))
