let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let status = document.getElementById('status');

function makeMove(cell) {
    if (!cell.innerHTML && !status.innerHTML) {
        cell.innerHTML = currentPlayer;
        cell.style.pointerEvents = 'none';
        if (checkWinner()) {
            status.innerHTML = `Player ${currentPlayer} wins!`;
        } else if ([...cells].every(cell => cell.innerHTML)) {
            status.innerHTML = "It's a draw!";
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML;
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.pointerEvents = 'auto';
    });
    status.innerHTML = '';
    currentPlayer = 'X';
}
