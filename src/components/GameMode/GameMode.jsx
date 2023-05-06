import { useState } from 'react';
import { Box, Button } from '@mui/material';
import TicTacToe from '../TicTacToe/TicTacToe';
import TicTacToeWithComputer from '../TicTacToeWithComputer/TicTacToeWithComputer.jsx';

const GameMode = () => {
  const [mode, setMode] = useState('human');

  const handleModeSelect = (mode) => {
    setMode(mode);
  };

  return (
    <Box>
      <Box align="center" sx={{ display: 'flex', justifyContent: 'center', '& > *': { mr: 4 } }}>
        <Button variant={mode === 'human' ? 'contained' : 'outlined'} onClick={() => handleModeSelect('human')}>Играть с человеком</Button>
        <Button variant={mode === 'computer' ? 'contained' : 'outlined'} onClick={() => handleModeSelect('computer')}>Играть с компьютером</Button>
      </Box>
      {mode === 'human' && <TicTacToe />}
      {mode === 'computer' && <TicTacToeWithComputer />}
    </Box>
  );
};

export default GameMode;
