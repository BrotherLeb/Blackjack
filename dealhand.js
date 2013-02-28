
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
function Card(s, c) {
        var suit = s;
        var card = c;
        //getters
        this.getSuit = function(){
                return suit;
        };
        this.getCard = function(){
        	return card;
        };
        this.getValue = function() {
        	if (card > 10){
        		return 10;
        	}
        	else if (card === 1){
        		return 11;
        	}
        	else {
        		return card;
        	}
        };
        this.suitValue = function() {
        	if(suit === 1){
        		return " of Clubs";
        	}
        	else if(suit === 2){
        		return " of Diamonds";
        	}
        	else if(suit === 3){
        		return " of Hearts";
        	}
        	else {
        		return " of Spades";
        	}
        };
        this.cardValue = function(){
                if(card === 1){
                	return "Ace";
                }
                else if (card === 11){
                	return "Jack";
                }
                else if (card === 12){
                	return "Queen";
                }
                else if (card === 13){
                	return "King";
                }
                else {
                	return card;
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
	this.hand = function(){
		var cardVal1 = this.getCard1().cardValue() + this.getCard1().suitValue();
		var cardVal2 = this.getCard2().cardValue() + this.getCard2().suitValue();
		return cardVal1 + " and a " + cardVal2;
	};
}

var myHand = new Hand();
var yourHand = new Hand();

console.log("I have a "+myHand.hand()+" and you have a "+yourHand.hand());

if(yourHand.score() > myHand.score()) {
	console.log("you win!");
}
else if(yourHand.score() < myHand.score()) {
	console.log("I win!");
}
else {
	console.log("We tied!");
}