const FRONT = "card_front";
const BACK = "card_back";

let toons = ['lobo-mau',
    'margarida',
    'Masha',
    'mickey-mouse',
    'pikachu',
    'pluto',
    'pumba',
    'urso',
    'yoshi'];

    let cards = null;

    startGame();

    function startGame() {
        cards = createCardsFromToons(toons);
        shuffleCards(cards);
        console.log(cards);
    }

    function shuffleCards(cards) {
        //o ultimo index
        // let currentIndex= cards.lenght;
        // let randomIndex = 0;

        // while (currentIndex !== 0) {

        //     randomIndex = Math.floor(Math.random() * currentIndex);
        //     currentIndex--;

        //     [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
        // }

        cards.forEach()
    }

function createCardsFromToons(toons) {

    let cards = [];

    for (let toon of toons) {
        cards.push(createPairFromToon(toon));
    }
// flat map vai trazer até os itens de array dentro de array
    return cards.flatMap(pair=>pair);
}

function createPairFromToon(toon) {

    return [{
        id: createIdWithToon(toon),
        icon: toon,
        flipped: false,
    }, {
        id: createIdWithToon(toon),
        icon: toon,
        flipped: false,
    }]
}


function createIdWithToon(toon){
    return toon + parseInt(Math.random() * 1000);
}