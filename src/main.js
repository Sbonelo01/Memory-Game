// Main Game Play

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function startGame() {
    let moves;
    let counter = global.window.getElementById('moveCounter');
    let imgElements = global.window.getElementsByClassName('game-card-img');
    let cardElementsArray = [...cardElements];
    let imgElementsArray = [...imgElements];
    let shuffledImages = shuffle(imgElementsArray);
    let cardElements = global.window.getElementsByClassName('game-card');

    for (i = 0; i < shuffledImages.length; i++) {
        //remove all images from previous games from each card (if any)
        cardElements[i].innerHTML = "";

        //add the shuffled images to each card
        cardElements[i].appendChild(shuffledImages[i]);
        cardElements[i].type = `${shuffledImages[i].alt}`;

        //remove all extra classes for game play
        cardElements[i].classList.remove("show", "open", "match", "disabled");
        cardElements[i].children[0].classList.remove("show-img");
    }

    //listen for events on the cards
    for (let i = 0; i < cardElementsArray.length; i++) {
        cardElementsArray[i].addEventListener("click", displayCard)
    }

    //when game starts show all the cards for a split second
    flashCards();

    //reset moves
    moves = 0;
    counter.innerText = `${moves} move(s)`;

    //reset star rating
    for (let i = 0; i < starElementsArray.length; i++) {
        starElementsArray[i].style.opacity = 1;
    }

    //Reset Timer on game reset
    timer.innerHTML = '0 mins 0 secs';
    clearInterval(interval);
}

function flashCards() {
    let cardElements = global.window.getElementsByClassName('game-card');
    for (i = 0; i < cardElements.length; i++) {
        cardElements[i].children[0].classList.add("show-img")
    }
    setTimeout(function() {
        for (i = 0; i < cardElements.length; i++) {
            cardElements[i].children[0].classList.remove("show-img")
        }
    }, 1000)
}

function displayCard() {
    this.children[0].classList.toggle('show-img');
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    cardOpen(this);
}
    
function cardOpen(card) {
    let openedCards = [];
    openedCards.push(card);
    let len = openedCards.length;
    if (len === 2) {
        moveCounter();
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

function matched() {
    let matchedCards = [];
    let openedCards = [];
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    matchedCards.push(openedCards[0]);
    matchedCards.push(openedCards[1]);
    openedCards = [];
    if (matchedCards.length == 16) {
        endGame();
    }
}

function unmatched() {
    let matchedCards = [];
    let openedCards = [];
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        openedCards[0].children[0].classList.remove('show-img');
        openedCards[1].children[0].classList.remove('show-img');
        enable();
        openedCards = [];

    }, 1100)
}

function disable() {
    let cardElements = global.window.getElementsByClassName('game-card');
    let cardElementsArray = [...cardElements];
    cardElementsArray.filter((card, i, cardElementsArray) => {
        card.classList.add('disabled');
    })
}

function enable() {
    let matchedCards = [];
    let cardElements = global.window.getElementsByClassName('game-card');
    let cardElementsArray = [...cardElements];
    cardElementsArray.filter((card, i, cardElementsArray) => {
        card.classList.remove('disabled');
        for (let i = 0; i < matchedCards.length; i++) {
            matchedCards[i].classList.add('disabled');
        }
    })
}

function moveCounter() {
    let second = 0,
        minute = 0,
        hour = 0,
        interval,
        totalGameTime,
        starRating;
    let moves;
    let counter = global.window.getElementById('moveCounter');
    moves++;
    counter.innerHTML = `${moves} move(s)`;

    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }

    //setting rating based on moves
    if (moves > 8 && moves <= 12) {
        for (let i = 0; i < 5; i++) {
            starElementsArray[i].opacity = 1;
        }
    } else if (moves > 12 && moves <= 16) {
        for (let i = 0; i < 5; i++) {
            if (i > 3) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    } else if (moves > 16 && moves <= 20) {
        for (let i = 0; i < 5; i++) {
            if (i > 2) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    } else if (moves > 20 && moves <= 24) {
        for (let i = 0; i < 5; i++) {
            if (i > 1) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    } else if (moves > 24) {
        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                starElementsArray[i].style.opacity = 0.1;
            }
        }
    }
}

function startTimer() {
    let second = 0,
        minute = 0,
        hour = 0,
        interval,
        totalGameTime,
        starRating;
    interval = setInterval(function() {
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000)
}

function endGame() {
    let moves;
    let finalStarRatingElement = global.window.getElementById('finalStarRating');
    let totalGameTimeElement = global.window.getElementById('totalGameTime');
    let totalGameMovesElement = global.window.getElementById('totalGameMoves');
    clearInterval(interval);
    totalGameTime = timer.innerHTML;
    starRating = global.window.querySelector('.rating').innerHTML;

    //show modal on game end
    modalElement.classList.add("show-modal");

    //show totalGameTime, moves and finalStarRating in Modal
    totalGameTimeElement.innerHTML = totalGameTime;
    totalGameMovesElement.innerHTML = moves;
    finalStarRatingElement.innerHTML = starRating;

    matchedCards = [];
    closeModal();
}

function closeModal() {
    let closeModalIcon = global.window.getElementById('closeModal');
    closeModalIcon.addEventListener("click", function() {
        modalElement.classList.remove("show-modal");
        startGame();
    })
}

function playAgain() {
    modalElement.classList.remove("show-modal");
    startGame();
}

// wait for some milliseconds before game starts
onload = function() {
    setTimeout(function() {
        startGame()
    }, 1200);
}

module.exports = {
    shuffle,
    startGame,
    flashCards,
    displayCard,
    cardOpen,
    matched,
    unmatched,
    disable,
    enable,
    moveCounter,
    startTimer,
    endGame,
    playAgain
}
