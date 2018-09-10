
class Card {
    constructor() {
        this.card = [];
    }
    carddeck() { //can be reset//
        this.card = [];
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        const strvalue = ["1 Ace", "2 Two", "3 Three", "4 Four", "5 Five", "6 Six", "7 Seven", "8 Eight", "9 Nine", "10 Ten", "11 Jack", "12 Queen", "13 King"]
        const value = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for (const s of suits){
            // console.log(s);
            for (const sv of strvalue){
                // console.log(sv);
                this.card.push(s + ', '+ sv)
            }
        }
        return this;
    }

    shuffle() {
        const { card } = this;
        let m = card.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [card[m], card[i]] = [card[i], card[m]];
        }
      
        return this;
    }
    deal() {
        return this.card.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    pick(card) {
        this.hand.push(card.deal());
        return this;
    }
    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new Card();
// console.log(deck1);
deck1.carddeck();
// console.log(deck1);
deck1.shuffle();
// console.log(deck1);
deck1.deal();
// console.log(deck1);

const player1 = new Player("Marco");
console.log(player1);
player1.pick(deck1).pick(deck1).pick(deck1).pick(deck1);
console.log(player1);
player1.discard();
console.log(player1);