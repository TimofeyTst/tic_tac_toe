import React from 'react'
import { Button } from '@mui/material';

export default function SquareButton({ value, onClick, disabled }) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      style={{
        width: 200,
        height: 200,
        fontSize: 88,
        '&:hover': {
          backgroundColor: 'primary.main',
        
      }}}
    >
      {value}
    </Button>
  )
}