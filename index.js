
function getRandomNumber (m, n) {
    m = parseInt(m)
    n = parseInt(n)
    let randomNumber = Math.floor( Math.random() * (n - m + 1) ) + m

    return randomNumber
} 

function getPlayerPoints (wins, losses) {
    let points = wins - losses
    return points
}

function getPlayerRank (points) {

    let rank = "None"

    if (points <= 10) {
        rank = "Ferro"
        
    } else if (points <= 20 ) { 
        rank = "Bronze"
        
    } else if (points <= 50 ) {
        rank = "Prata"

    } else if (points <= 80 ) {
        rank = "Ouro"

    } else if (points <= 90 ) {
        rank = "Diamante"

    } else if (points <= 100 ) {
        rank = "Lendário"

    } else if (points > 101 ) {
        rank = "Imortal"

    }

    return rank
    
}

function getPlayerWins () {
    let wins = getRandomNumber (0, 150)
    return wins
}

let playerWins = getPlayerWins()
let playerLosses = playerWins * 0.15
playerLosses = parseInt(playerLosses)
let playerPoints = getPlayerPoints (playerWins, playerLosses)
let playerRank = getPlayerRank (playerPoints) 

console.log ("O herói tem de saldo " + playerPoints + " e está no nível de " + playerRank + ".")

