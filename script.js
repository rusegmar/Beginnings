let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const getAbsoluteDistance = (number, comparison) =>{
    return Math.abs(comparison - number);
}
const compareGuesses = (user, computer, target) =>{
    const alert = () => {
        window.alert('it is not possible to input numbers larger than 9 or smaller than 0');
    }
    if (user < 0 || user > 9){
        alert();
    }
    if (getAbsoluteDistance(target,user) < getAbsoluteDistance(target,computer) ){
        return true;
    } else if (getAbsoluteDistance(target,user) > getAbsoluteDistance(target,computer) ){
        return false;
    } else {
        return true;
    }
}
const updateScore = (winner) => {
    switch (winner){
        case 'human':
            humanScore += 1;
        case 'computer':
            computerScore +=1;
    }

}
const advanceRound = () => currentRoundNumber += 1;

