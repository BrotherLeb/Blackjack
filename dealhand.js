
// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function(){
        var s = Math.floor(Math.random() * 4) + 1;
        var n =Math.floor(Math.random() * 13) + 1;
        //the card
        return new Card(s, n);
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
          if(number>10){
				return 10;
			}
			else if(number===1) {
				return 11;
			}
			else {
				return number;
			}
        };
}

// Hand constructor
function Hand(){
	var card1 = deal();
	var card2 = deal();
	this.getCard1 = function(){
		return card1;
	};
	this.getCard2 = function(){
		return card2;	
	};
	this.score = function(){
		var score1 = this.getCard1().getValue();
		var score2 = this.getCard2().getValue();
		return score1 + score2;
	};
}

var myHand = new Hand();
var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+yourHand.score());

if(yourHand.score() > myHand.score()) {
	console.log("you win!");
}
else if(yourHand.score() < myHand.score()) {
	console.log("I win!");
}
else {
	console.log("We tied!");
}
