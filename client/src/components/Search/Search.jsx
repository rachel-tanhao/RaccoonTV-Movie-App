import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

// This component is used to create a search bar for the user to enter a search query
function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      {/* The TextField component is used to create an input field for the user to enter a search query */}
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        slotProps={{
          input: {
            className: classes.input,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        placeholder="Search movies..."
      />
    </div>
  );
}

export default Search;
