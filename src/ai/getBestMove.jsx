export default function getBestMove(board, player) {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < board.length; i++) {
        // Проверяем, является ли ячейка пустой
        if (board[i] === null) {
            // Симулируем ход игрока
            let newBoard = [...board];
            newBoard[i] = player;

            // Рассчитываем оценку хода
            let score = minimax(newBoard, false);

            // Если полученный результат лучше, чем предыдущий, сохраняем его
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
}

function minimax(board, isMaximizingPlayer) {
    // Проверяем, есть ли победитель или ничья
    let winner = checkWinner(board);
    if (winner !== null) {
        if (winner === "X") {
            return -1;
        } else if (winner === "O") {
            return 1;
        } else {
            return 0;
        }
    }

    // Рекурсивно симулируем ходы
    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                let newBoard = [...board];
                newBoard[i] = "O";
                let score = minimax(newBoard, false);
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                let newBoard = [...board];
                newBoard[i] = "X";
                let score = minimax(newBoard, true);
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function checkWinner(board) {
    const winConditions = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (board.every((square) => square !== null)) {
        return "tie";
    }

    return null;
}
