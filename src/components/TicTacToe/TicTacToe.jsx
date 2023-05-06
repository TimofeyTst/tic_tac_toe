import { useState } from 'react';
import { Box } from '@mui/material';
import ShowGameResult from '../ShowGameResult/ShowGameResult';
import GameStatus from '../GameStatus/GameStatus';
import Board from '../Board/Board';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      const newPlayer = player === 'X' ? 'O' : 'X';
      setPlayer(newPlayer);
      checkWinner(newBoard);
    }
  };

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setOpen(true);
        break;
      }
    }

    if (board.every((square) => square !== null)) {
      setOpen(true);
    }
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const resetGame = () => {
    setOpen(false);
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <Board board={board} handleClick={handleClick} winner={winner} />
      <GameStatus
        winner={winner}
        player={player}
        board={board}
        resetGame={resetGame}
      />
      <ShowGameResult
        winner={winner}
        open={open}
        resetGame={resetGame}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default TicTacToe;
