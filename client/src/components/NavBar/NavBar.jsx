import React, { useState, useEffect, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // allow us to switch between pages
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { Search, SideBar } from '../index';
import { setUser } from '../../features/auth';
import { fetchToken, createSessionId, moviesApi } from '../../utils/index';
import { ColorModeContext } from '../../utils/ToggleColorMode.jsx';

const NavBar = () =>  {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)'); // is screen wide below 600px, use Mobile UI
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [mobileOpen, setMobileOpen] = useState(false);

  const colorMode = useContext(ColorModeContext);

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">

        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton color="inherit" edge="start" style={{ outline: 'none' }}
           onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className={classes.menuButton}>
            <Menu /> {/* menu icon */}
          </IconButton>
          )}

          {/* dark mode switch icon */}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* If it is not on Mobile, we also want a search box */}
          {!isMobile && <Search />}

          <div>
            {!isAuthenticated ? (  // if user is not authenticated, show login button
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle /> {/* account icon (&nbsp is an empty space tag) */}
              </Button>
            ) : ( // if user is authenticated, show their avatar and link to their profile
              <Button color="inherit" component={Link} to={`/profile/${user.id}`} className={classes.linkButton}>
                {!isMobile && <>My Movies &nbsp;</>} {/* if not mobile, show "My Movies", and the logged in user avatar */}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar?.avatar_path}`}/>
              </Button>
            )}
          </div>

          {isMobile && <Search />}  {/* if mobile, show search box */}
        </Toolbar>

      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer variant="temporary" anchor="left" open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className = {classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}>
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;