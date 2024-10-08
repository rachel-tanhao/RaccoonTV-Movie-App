import React from 'react';
import { Typography, Button } from '@mui/material';

import useStyles from './styles';


// This component is used to create a pagination component that allows the user to navigate through pages
function Pagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();

  // handles the go to previous page button
  const handlePrev = () => {
    if (currentPage !== 1) { setPage((prevPage) => prevPage - 1); }
  };

  // handles the go to next page button
  const handleNext = () => {
    if (currentPage !== totalPages) { setPage((prevPage) => prevPage + 1); }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button onClick={handlePrev} variant="contained" className={classes.button} color="primary" type="button">Prev</Button>
      <Typography variant="h4" className={classes.pageNumber}>{currentPage}</Typography>
      <Button onClick={handleNext} variant="contained" className={classes.button} color="primary" type="button">Next</Button>
    </div>
  );
}

export default Pagination;