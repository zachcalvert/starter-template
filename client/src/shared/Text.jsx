import { Typography } from '@mui/material';

export function Text({ children, variant }) {
  return (
    <Typography color='#E48282' fontSize="20px" variant={variant} letterSpacing='.1rem' sx={{ marginBottom: '16px' }}>
      {children}
    </Typography>
  );
}
