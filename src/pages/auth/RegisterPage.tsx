import { Box, Container, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Box height={"100vh"} display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}>
        <Typography variant="h4" align="center" gutterBottom>Register Page</Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;