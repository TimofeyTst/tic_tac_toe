import React from 'react';
import { Grid } from '@mui/material';
import SquareButton from '../SquareButton/SquareButton';

export default function Board({ board, handleClick, winner }) {
  const renderSquares = (border) => {
    const squares = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        row.push(
          <Grid item key={index} sx={{
            borderTop: i === 0 ? 0 : border,
            borderRight: j === 2 ? 0 : border,
            borderBottom: i === 2 ? 0 : border,
            borderLeft: j === 0 ? 0 : border,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {renderSquare(index)}
          </Grid>
        );
      }
      squares.push(
        <Grid container item key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
          {row}
        </Grid>
      );
    }
    return squares;
  };


  const renderSquare = (index) => {
    return (
      <SquareButton
        value={board[index]}
        onClick={() => handleClick(index)}
        disabled={board[index] !== null || winner}
      />
    );
  };
  return (
    <Grid container spacing={0} sx={{ padding: 1 }}>
      {renderSquares('3px solid black')}
    </Grid>
  );
}
