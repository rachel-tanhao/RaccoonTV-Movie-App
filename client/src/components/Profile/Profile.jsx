import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '../index';

function Profile() {
  const { user } = useSelector((state) => state.user);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });


  // use effect to refetch the favorite and watchlist movies every time the component mounts
  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, []);
  

  // function to log out the user
  const logout = () => {
    localStorage.clear();
    window.location.href = '/'; // redirect the user to the home page
  };


  // On the Profile page, display the user's favorite and watchlist movies
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>

      {/* if the user has no favorite or watchlist movies, display a message */}
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length
        ? <Typography variant="h5">Add favourite or watchlist same movies to see them here!</Typography>
        : (
          <Box>
            <RatedCards title="Favorite Movies" movies={favoriteMovies} />
            <RatedCards title="Watchlist" movies={watchlistMovies} />
          </Box>
        )}
    </Box>
  );
}

export default Profile;