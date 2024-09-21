import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '30px 2px',
    color: theme.palette.text.primary, // Ensure text color adapts to the theme
    backgroundColor: theme.palette.background.paper, // Dynamic background color
    border: `1px solid ${theme.palette.divider}`, // Border to match theme mode
    '&:hover': {
      backgroundColor: theme.palette.action.hover, // Hover effect based on the theme
    },
  },
  pageNumber: {
    margin: '0 20px !important',
    color: theme.palette.text.primary,
  },
}));
