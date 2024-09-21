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
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
}));