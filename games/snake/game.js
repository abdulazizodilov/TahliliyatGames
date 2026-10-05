const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = {
    x: 300,
    y: 300,
    size: 20,
    speed: 20
};

function drawSnake() {
    ctx.fillStyle = "lime";
    ctx.fillRect(snake.x, snake.y, snake.size, snake.size);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSnake();

    requestAnimationFrame(gameLoop);
}

gameLoop();