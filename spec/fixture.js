
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memory Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Memory Game <span></h1>
    </header>
    <main>
        <section>
            <div class="game-status-details">
                <span class="move-counter" id="moveCounter"></span>
                <span class="timer" id="timer">0 mins 0 secs</span>
            </div>
            <table class="game-board">
                <tbody class="game-grid">
                    <tr class="game-grid-row">
                        <td class="game-card">
                            <img class="game-card-img" src="img/1.jpeg" alt="red">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/2.jpeg" alt="blue">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/3.jpeg" alt="yellow">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/4.jpeg" alt="black">
                        </td>
                    </tr>
                    <tr class="game-grid-row">
                        <td class="game-card">
                            <img class="game-card-img" src="img/5.jpeg" alt="green">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/6.jpeg" alt="purple">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/7.jpeg" alt="brown">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/8.jpeg" alt="orange">
                        </td>
                    </tr>
                    <tr class="game-grid-row">
                        <td class="game-card">
                            <img class="game-card-img" src="img/1.jpeg" alt="red">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/2.jpeg" alt="blue">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/3.jpeg" alt="yellow">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/4.jpeg" alt="black">
                        </td>
                    </tr>
                    <tr class="game-grid-row">
                        <td class="game-card">
                            <img class="game-card-img" src="img/5.jpeg" alt="green">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/6.jpeg" alt="purple">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/7.jpeg" alt="brown">
                        </td>
                        <td class="game-card">
                            <img class="game-card-img" src="img/8.jpeg" alt="orange">
                        </td>
                    </tr>
                </tbody>               
            </table>
            <div class="restart-button-div">
                <button id="restartButton" onClick="startGame()" style="font-family: sawasdee; background-color: white;">Restart</button>
            </div>
        </section>
    </main>
    <footer>
        <div class="page-footer">
            <p>Sbonelo &copy; 2019
            </p>
        </div>
    </footer>
    <script src="src/main.js"></script>
    <script>
        class Global {
            constructor() {
                this.window = document;
            }
        }
        let global = new Global;

        module.exports = global;
    </script>
</body>
</html>`

module.exports = html;
