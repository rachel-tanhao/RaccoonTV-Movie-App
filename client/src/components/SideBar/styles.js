import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0% 0',
  },
  image: {
    width: '100%',
    maxWidth: '240px',
    height: 'auto',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'grayscale(100%)',
    opacity: theme.palette.mode === 'dark' ? 0.8 : 0.6,
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
}));