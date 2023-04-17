import { Box, Typography, useTheme } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor= "#4682B4"
        p="1rem 6%"
        textAlign="center"
        borderRadius="0 0 50% 50% / 70rem"
      >
        <Typography fontWeight="bold" fontSize="32px" color="white">
          Pet Community
        </Typography>
      </Box>

      <Box
        width="40%"
        p="2rem"
        m="2rem auto"
        borderRadius="2rem"
        backgroundColor={theme.palette.background.paper}
      >
        <Typography fontWeight="bold" variant="h2" sx={{ mb: "1.5rem" }}>
          Welcome to Pet Community!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
