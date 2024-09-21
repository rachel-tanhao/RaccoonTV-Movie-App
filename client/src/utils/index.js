import axios from 'axios';


export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});
 

// Fetches the token from the API and redirects the user to the TMDB login page
export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;
    // If the token is successfully created, store it in local storage and redirect the user to the TMDB login page
    if (data.success) {
      localStorage.setItem('request_token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }

  } catch (error) {
    console.log('Sorry, your token could not be created.');
  }
};


// This function creates a session ID for the user
export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) { // If the token exists, create a session ID
    try {
      // Get the session ID from the API
      const { data: { session_id } } = await moviesApi.post('authentication/session/new', {
        request_token: token,
      });
      // Store the session ID in local storage and then return it
      localStorage.setItem('session_id', session_id);
      return session_id;

    } catch (error) {
      console.log(error);
    }
  }
};