import { Typography, Container, Grid, Card, Box } from '@mui/material';
import GoogleLoginButton from "../../components/auth/GoogleLoginButton";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Box height={"100vh"} display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}>
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>
        <Card elevation={3} sx={{ p: 4, width: "75%" }}>
          <Grid container spacing={2} justifyContent="center" direction="column">
            <Grid item xs={12} md={6}>
              <GoogleLoginButton />
            </Grid>
            <Grid item xs={12} md={6}>
              <LoginForm />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPage;