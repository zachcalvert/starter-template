import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';
import { useSnackbar } from 'notistack';

import { APP_THEME_URL } from './api/urls';
import Header from './components/Header/Header'; // Import your Header component
import AuthRoutes from './routes/AuthRoutes';
import UnAuthRoutes from './routes/UnAuthRoutes';
import AuthService from './services/auth';
import { themeOne, themeTwo } from './themes';

function App() {
  const [processing, setProcessing] = useState(false);
  const [user, setUser] = useState({'id': null, 'email': null});
  const [themeLight, setThemeLight] = useState(themeOne);
  const [themeDark, setDarkTheme] = useState(themeTwo);
  const [darkMode, setDarkMode] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    AuthService.getProfile().then(user => {
      if (user) {
        setUser(user);
      }
    })
  }, [])

  const setThemePreference = (preferDarkTheme) => {
    const preferredTheme = preferDarkTheme ? themeDark : themeLight;
    setDarkMode(preferredTheme);
    localStorage.setItem("appTheme", preferDarkTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme");
    if (savedTheme === "dark") {
      setThemePreference(true);
    }
  }, [setThemePreference]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProcessing(true);
        const response = await fetch(APP_THEME_URL);
        const data = await response.json();

        const theme = data.results[0];
        setThemeLight(
          createTheme({
            palette: {
              primary: { main: theme.primary },
              secondary: { main: theme.secondary },
              header: { background: theme.primary, color: theme.header_font_color },
              background: { default: theme.background },
              
            },
            typography: { color: theme.font_color, fontFamily: ["Poppins", "serif"].join(",") },
          }),
        );

        const secondTheme = data.results[1];
        console.log({ secondTheme })
        setDarkTheme(
          createTheme({
            palette: {
              mode: "dark",
              primary: { main: secondTheme.primary },
              secondary: { main: secondTheme.secondary },
              header: { background: secondTheme.primary, color: secondTheme.header_font_color },
              background: { default: secondTheme.background },
              
            },
            typography: { color: secondTheme.font_color, fontFamily: ["Poppins", "serif"].join(",") },
          }),
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setProcessing(false);
      }
    };

    fetchData();
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode((theme) => !theme);
  };

  const logout = async () => {
    setProcessing(true);

    try {
      let data = await AuthService.logout();
      if (data.status) {
        setProcessing(false);
        enqueueSnackbar(data.message, { variant: "success", autoHideDuration: '3s' });
        window.location.replace('/login');
      } else {
        setProcessing(false);
      }
    }
    catch (e) {
      setProcessing(false);
      enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: '3s' });
    }
  }

  if (processing) return <CircularProgress color="success" />;

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <Header
        user={user}
        logout={logout}
        darkMode={darkMode}
        handleDarkMode={handleDarkModeToggle}
      />
      <Grid container sx={{
        height: 'calc(100vh - 64px)',
        background: darkMode ? themeDark.palette.background.default : themeLight.palette.background.default,
        padding: '32px'
      }}>
        <BrowserRouter>
          <Routes>
            {AuthRoutes}
            {UnAuthRoutes}
          </Routes>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
