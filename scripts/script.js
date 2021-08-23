// const FRONT = "card_front";
// const BACK = "card_back";

// let toons = ['lobo-mau',
//     'margarida',
//     'Masha',
//     'mickey-mouse',
//     'pikachu',
//     'pluto',
//     'pumba',
//     'urso',
//     'yoshi'];

//     let cards = null;

//     startGame();

//     function startGame() {
//         cards = createCardsFromToons(toons);
//         shuffleCards(cards);
//         console.log(cards);
//     }

//     function shuffleCards(cards) {
//         //o ultimo index
//         // let currentIndex= cards.lenght;
//         // let randomIndex = 0;

//         // while (currentIndex !== 0) {

//         //     randomIndex = Math.floor(Math.random() * currentIndex);
//         //     currentIndex--;

//         //     [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
//         // }

//         cards.forEach(card )
//     }

// function createCardsFromToons(toons) {

//     let cards = [];

//     for (let toon of toons) {
//         cards.push(createPairFromToon(toon));
//     }
// // flat map vai trazer até os itens de array dentro de array
//     return cards.flatMap(pair=>pair);
// }

// function createPairFromToon(toon) {

//     return [{
//         id: createIdWithToon(toon),
//         icon: toon,
//         flipped: false,
//     }, {
//         id: createIdWithToon(toon),
//         icon: toon,
//         flipped: false,
//     }]
// }


// function createIdWithToon(toon){
//     return toon + parseInt(Math.random() * 1000);
// }

const cards = document.querySelectorAll('.card');
// está virada?
let hasFlippedCard = false;
// após a segunda carta selecionada travar o tabuleiro até resolver
let lockBoard = false;
let matches = 0;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;

    if (this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this; 
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch(){
    // método ternário
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    isMatch ? disableCards() : unflipCards();
    // if (firstCard.dataset.icon === secondCard.dataset.icon) {
    //     disableCards();
    //     return;
    // }

    // unflipCards();
   
        

}

function disableCards(){
    matches++;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();

    checkGameOver();
    //teste
}

function unflipCards() {
    lockBoard = true;

    setTimeout(()=> {   
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },500);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
//a função dentro do parenteses com um parenteses no final, executara a ação na hora
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();

function checkGameOver(){
if(matches === 10)
{
    let gameOverScreen = document.getElementById('gameOver');
    setTimeout(()=> {   
        gameOverScreen.style.display = 'flex';
        resetTotal();
      
    },700);


   
}

}



function restart(){
    let resetbtn = document.querySelector('#restart');

    resetbtn.addEventListener('click', () =>{
        let gameOverScreen = document.getElementById('gameOver');
        gameOverScreen.style.display = 'none';
        // for(let card of cards){
        //     card[i].classList.remove('flip');
        // }
        

        
        
    })
}
function resetTotal() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

    for(let card of cards){
        card.classList.remove('flip');
    }
}
    


