const {
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
} = require('../src/main');

const fs = require('fs');
const jsdom = require('jsdom');
const {
    JSDOM
} = jsdom;

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console)

const clickSimulator = (arg) => {
    let event = new dom.window.MouseEvent('click', {
        view: dom.window,
        bubbles: true,
        cancelable: false
    })

    let element = document.getElementsByTagName('li')[arg];
    element.dispatchEvent(event);
}

const onClick = btn => {
    btn.addEventListener('startGame', e => {
        main.startGame();
    });

    const e = new dom.window.Event("startGame");

    btn.dispatchEvent(e);
}

beforeEach(() => {
    const dom = new jsdom.JSDOM(fs.readFileSync(__dirname + '/fixture.js'));
    global.document = dom.window.document;
})

afterEach(() => {
    delete require.cache[require.resolve('../src/main')]
})


it('Should return start', function() {
    const btn = document.getElementById('restartButton');
    expect(btn.innerHTML).toBe('Restart');
});

it('should be defined', function() {
    expect(shuffle).toBeDefined();
});
