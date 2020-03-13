var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const player1_button = document.getElementById('player-1');
const player2_button = document.getElementById('player-2');
console.log(board.length);

console.log(player1_button);
console.log(player2_button);

player1_button.addEventListener('click',rollDice_1);
player2_button.addEventListener('click',rollDice_2);

var player1 = ["Anand", 0, 1000];
var player2 = ["Kumar", 0, 1000];

//console.log(player1_Button)

window.onload = function () {
    var player1_Button = document.getElementById('player-1');
    player1_Button.addEventListener('click', rollDice_1);
}



function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player one rolls", position);
    changePosition_1(player1[1], position);
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player two rolls", position);
    changePosition_2(player2[1], position);
}

function changePosition_1(old, currentPosition) {
    var newPosition = old + currentPosition;
    player1[1] = newPosition;
    console.log("player-1",player1[1]);
    updateMoney_1(player1[1]);
}

function changePosition_2(old, currentPosition) {
    var newPosition = old + currentPosition;
    player2[1] = newPosition;
    console.log("player-2",player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    player1[2] = updateMoney;
    console.log("player-1 money", player1[2]);
}
function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length)
        updateMoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p1 - 1];
    }
    player2[2] = updateMoney;
    console.log("player-2 money", player2[2]);
}