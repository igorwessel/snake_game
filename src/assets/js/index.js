const gameCanvas = document.getElementById('game');

const colors = {
  player: '#0fb41b',
};

const game = {
  x: 0,
  y: 0,
  speed: 3,
};

/** @type {CanvasRenderingContext2D} */
const gameContext = gameCanvas.getContext('2d');

function drawPlayer() {
  gameContext.fillStyle = colors.player;
  gameContext.fillRect(game.x, game.y, 20, 20);
}

function movePlayer(x, y) {
  gameContext.clearRect(game.x, game.y, 20, 20);
  gameContext.fillStyle = colors.player;
  gameContext.fillRect(x, y, 20, 20);

  game.x = x;
  game.y = y;
}

const commands = {
  ArrowUp: () => movePlayer(game.x, game.y - game.speed),
  ArrowDown: () => movePlayer(game.x, game.y + game.speed),
  ArrowLeft: () => movePlayer(game.x - game.speed, game.y),
  ArrowRight: () => movePlayer(game.x + game.speed, game.y),
};

drawPlayer();
document.addEventListener('keydown', (e) => {
  if (commands[e.key]) {
    e.preventDefault(); // prevent scroll with arrow keys.
    commands[e.key]();
  }
  console.log(game);
});
