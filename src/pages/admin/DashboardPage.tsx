import { Box, Container, Typography } from "@mui/material";

const DashboardPage = () => {
  return (
    <Container maxWidth="sm">
      <Box height={"100vh"} display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}>
        <Typography variant="h4" align="center" gutterBottom>Dashboard Page</Typography>
      </Box>
    </Container>
  );
};

export default DashboardPage;