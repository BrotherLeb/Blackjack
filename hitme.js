// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function(){
        var s = Math.floor(Math.random() * 4) + 1;
        var c =Math.floor(Math.random() * 13) + 1;
        //the card
        return new Card(s, c);
};

// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
        var suit = s;
        var number = n;
        //getters
        this.getSuit = function(){
                return suit;
        };
        this.getNumber = function(){
          return number;
        };
        this.getValue = function() {
        	if (number > 10){
        		return 10;
        	}
        	else if (number === 1){
        		return 11;
        	}
        	else {
        		return number;
        	}
        };
        
        this.getPrintedScore = function(){
        	var numbers = [0, "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        	var suits = [0, "Clubs", "Diamonds", "Hearts", "Spades"];
        	return numbers[number] + " of " + suits[suit];
        };
}

// Hand constructor
function Hand(){
	var cards = [deal(), deal()];
	

	this.score = function(){
		return cards[0].getValue() + cards[1].getValue();
	};

	this.printScore = function(){
		return "[" + cards[0].getPrintedScore() + "] [" + cards[1].getPrintedScore() + "]";
	};

	this.hitMe = function(){
		cards[cards.length] = deal();
	};
}

// Test Code
var player1 = new Hand();
var player2 = new Hand();

console.log("...Shuffling...");
console.log("Player 1: " + player1.printScore() + " = " + player1.score() + ".");
console.log("Player 2: " + player2.printScore() + " = " + player2.score() + ".");

if(player1.score() > player2.score()){
	if(player1.score() < 22){
		console.log("-----Player 1 wins!-----");
	}
	else{
		console.log("-----Player 2 wins!-----");
	}
}
else if(player1.score() < player2.score()){
	if(player2.score() < 22){
		console.log("-----Player 2 wins!-----");
	}
	else{
		console.log("-----Player 1 wins!-----");
	}
}
else{
	console.log("-----It's a tie!-----");
}
