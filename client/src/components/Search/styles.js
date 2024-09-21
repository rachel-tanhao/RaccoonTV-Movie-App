import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContainer: 'center',
      width: '100%',
    },
  },
  input: {
    color: theme.palette.text.primary,
    filter: 'none',
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)'}`,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `2px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 1)'}`,
    },
    '& .MuiInput-underline.Mui-focused:after': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));