import React from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function ShowGameResult({ open, winner, resetGame, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          width: '400px',
          height: '200px',
        },
      }}
    >
      <DialogTitle>Game Over</DialogTitle>
      <DialogContent>
        {winner ? (
          <Box sx={{ color: 'green' }}>
            <Box>Winner: {winner}</Box>
          </Box>
        ) : (
          <Box>
            <Box>Draw</Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={resetGame}>Play Again</Button>
        <Button onClick={handleClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
}
