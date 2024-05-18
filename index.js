let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Rory",
    chips: 200
}

playerEl.textContent = `${player.name}: ${player.chips}`

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1)
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}
// I added hasBlackJack = false to resolve a bug where 
// after getting blackjack, I would not be able to get a new card in the new games
//  because of hasBlackjack still evaluating to true in the new card function. This fixes that bug.
function startGame() {
    hasBlackJack = false 
    isAlive = true
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard() 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()
    }
}