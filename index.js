let player1CountEl = document.getElementById("player-1-count-el")
let player1LpCount = 8000

let player2CountEl = document.getElementById("player-2-count-el")
let player2LpCount = 8000


// Player 1

function player1Increment10() {
    player1LpCount += 10
    player1CountEl.textContent = player1LpCount
}

function player1Increment100() {
    player1LpCount += 100
    player1CountEl.textContent = player1LpCount
}

function player1Increment500() {
    player1LpCount += 500
    player1CountEl.textContent = player1LpCount
}

function player1Increment1000() {
    player1LpCount += 1000
    player1CountEl.textContent = player1LpCount
}

function player1IncrementDouble() {
    player1LpCount *= 2
    player1CountEl.textContent = player1LpCount
}

function player1Decrement10() {
    player1LpCount = Math.max(0, player1LpCount - 10)
    player1CountEl.textContent = player1LpCount
}

function player1Decrement100() {
    player1LpCount = Math.max(0, player1LpCount - 100)
    player1CountEl.textContent = player1LpCount
}

function player1Decrement500() {
    player1LpCount = Math.max(0, player1LpCount - 500)
    player1CountEl.textContent = player1LpCount
}

function player1Decrement1000() {
    player1LpCount = Math.max(0, player1LpCount - 1000)
    player1CountEl.textContent = player1LpCount
}

function player1DecrementHalf() {
    player1LpCount = Math.max(0, Math.floor(player1LpCount / 2))
    player1CountEl.textContent = player1LpCount
}


// Player 2

function player2Increment10() {
    player2LpCount += 10
    player2CountEl.textContent = player2LpCount
}

function player2Increment100() {
    player2LpCount += 100
    player2CountEl.textContent = player2LpCount
}

function player2Increment500() {
    player2LpCount += 500
    player2CountEl.textContent = player2LpCount
}

function player2Increment1000() {
    player2LpCount += 1000
    player2CountEl.textContent = player2LpCount
}

function player2IncrementDouble() {
    player2LpCount *= 2
    player2CountEl.textContent = player2LpCount
}

function player2Decrement10() {
    player2LpCount = Math.max(0, player2LpCount - 10)
    player2CountEl.textContent = player2LpCount
}

function player2Decrement100() {
    player2LpCount = Math.max(0, player2LpCount - 100)
    player2CountEl.textContent = player2LpCount
}

function player2Decrement500() {
    player2LpCount = Math.max(0, player2LpCount - 500)
    player2CountEl.textContent = player2LpCount
}

function player2Decrement1000() {
    player2LpCount = Math.max(0, player2LpCount - 1000)
    player2CountEl.textContent = player2LpCount
}

function player2DecrementHalf() {
    player2LpCount = Math.max(0, Math.floor(player2LpCount / 2))
    player2CountEl.textContent = player2LpCount
}

function reset() {
    player1LpCount = 8000
    player2LpCount = 8000
    player1CountEl.textContent = player1LpCount
    player2CountEl.textContent = player2LpCount
}