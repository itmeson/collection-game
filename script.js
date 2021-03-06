const deal = document.getElementById('deal');
deal.addEventListener('click', dealBoard);
var deck = shuffleDeck();
var score = 0;

var selected = [];

function dealBoard() {
    /*lay out a 3 by 4 grid of cards*/
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-card', deck[i]);
        card.classList.add(...deck[i]);
        card.addEventListener('click', pickCard);
        card.innerHTML = deck[i]
        board.appendChild(card);
    }

}

function shuffleDeck() {
    /*shuffle the deck*/
    const properties = {'color': ['red', 'green', 'purple'], 
                        'shape': ['oval', 'diamond', 'squiggle'], 
                        'number': [1, 2, 3],
                        'shading': ['solid', 'striped', 'open']};
    const deck = [];
    for (let color of properties.color) {
        for (let shape of properties.shape) {
            for (let number of properties.number) {
                for (let shading of properties.shading) {
                    deck.push([color, shape, number, shading]);
                }
            }
        }
    }
    return shuffle(deck);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function pickCard(e) {
      console.log(e.target)
        if (selected.length <= 2) {
            if (e.target.classList.contains('selected')) {
                e.target.classList.remove('selected');
                selected.splice(selected.indexOf(e.target.getAttribute('data-card')), 1);

            } else {
                e.target.classList.add('selected');
                selected.push(e.target);
            }
        }
        if (selected.length === 3) {
            setTimeout (() => {checkMatch()}, 2000);
        }
  }

  function checkMatch() {

      const vals = selected.map(card => card.getAttribute('data-card').split(','));
      console.log(vals)
      let flag = true;
      for (i = 0; i < 4; i++) {
          if ((vals[0][i] === vals[1][i] && vals[0][i] == vals[2][i]) || 
            (vals[0][i] != vals[1][i] && vals[0][i] != vals[2][i] && vals[1][i] != vals[2][i])) {
                flag = true;
            }
          else {
                console.log('no match');
                flag = false;
                break;

          }
      }
        if (flag) {
            console.log('match');
            selected.forEach(card => card.classList.add('matched'));
            selected.forEach(card => card.classList.remove('selected'));
            refillTaken();
            updateScore();
        }
        else {
            console.log('no match');
            selected.forEach(card => card.classList.remove('selected'));
            selected = [];
        }
  }

  function refillTaken() {
        const taken = document.querySelectorAll('.matched');
        taken.forEach(card => card.classList.remove('matched'));
        taken.forEach(card => {
            let newCard = deck.shift();
            card.classList.remove(...card.getAttribute('data-card').split(','));
            card.setAttribute('data-card', newCard);
            card.classList.add(...newCard);
            card.innerHTML = newCard;
        });
        selected = [];
  }

  function updateScore() {
        score += 1;
        const scoreBoard = document.getElementById('score');
        scoreBoard.innerHTML = score;
        
  }