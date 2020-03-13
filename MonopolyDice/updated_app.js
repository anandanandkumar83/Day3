var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160];
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
//class creation
class player {
    constructor(name, position, money) {
        this.name = name;
        this.position = position;
        this.money = money;
    }

    rollDice() {
        let pos = Math.floor(Math.random() * 6) + 1;
        console.log(pos);
        this.updateposition(pos);
    }

    updateposition(pos) {
        this.position += pos;
        console.log(this.position);
        this.updatemoney();
    }

    updatemoney() {
        if (this.position < board.length)
            this.money -= board[this.position];
        else
            this.position %= 15;
        this.money -= board[this.position];
        console.log(player_1);
        console.log(player_2);
    }


}

let player_1 = new player("Raju", 0, 1000);
let player_2 = new player("Parthiban", 0, 1000);

//action define
player1_button.addEventListener('click', function () {
    player_1.rollDice();
}, false);
player2_button.addEventListener('click', function () {
    player_2.rollDice()
}, false);