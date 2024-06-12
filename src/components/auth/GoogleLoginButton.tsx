import { useContext } from 'react';
import { CredentialResponse, GoogleLogin, googleLogout } from '@react-oauth/google';
import { Context, ContextProps } from '../../context/Context';
import { jwtDecode } from 'jwt-decode';
import { Box, Button } from '@mui/material';

export type GoogleUser = {
  name: string;
  email: string;
  picture: string;
}
const GoogleLoginButton = () => {
  const { setUser } = useContext(Context) as ContextProps;

  const handleLogin = (response: CredentialResponse) => {
    if (response.credential) {
      const decoded: GoogleUser = jwtDecode(response.credential);
      setUser(decoded.name);
      console.log('User logged in:', decoded);
    }
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    console.log('User logged out');
  };

  const handleError = () => {
    console.log('Login failed');
  };

  return (
    <Box>
      <Box mb={2}>
        <GoogleLogin
          onSuccess={handleLogin}
          onError={handleError}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
      </Box>
    </Box>
  );
};

export default GoogleLoginButton;
