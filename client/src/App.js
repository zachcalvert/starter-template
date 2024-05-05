import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';

import Header from './components/Header/Header'; // Import your Header component
import AuthRoutes from './routes/AuthRoutes';
import UnAuthRoutes from './routes/UnAuthRoutes';
import AuthService from './services/auth';
import { themeDark, themeLight } from './themes';

function App() {
  const [processing, setProcessing] = useState(false);
  const [user, setUser] = useState({'id': null, 'email': null});
  const [darkMode, setDarkMode] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    AuthService.getProfile().then(user => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
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
      <Paper
        elevation={0}
        sx={{
          my: 4,
        }}
      >
        <BrowserRouter>
          <Routes>
            {AuthRoutes}
            {UnAuthRoutes}
          </Routes>
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
