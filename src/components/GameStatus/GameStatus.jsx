import React from 'react';
import { Box, Button, Alert } from '@mui/material';

export default function GameStatus({ board, player, winner, resetGame }) {
  const message = winner ? `Winner: ${winner}` : board.every(square => square !== null) ? 'Draw' : `Next player: ${player}`;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={100}>
      {winner ? (
        <Box display="flex" >
          <Alert severity="success"> {message} </Alert>
          <Button onClick={resetGame} sx={{ marginLeft: 2 }}>Play Again</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{message}</Box>
      )}
    </Box>
  );
}
