  import { Box, Typography, useTheme } from "@mui/material";
  import UserImage from "components/UserImage";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
  
    const getUser = async () => {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user) {
      return null;
    }
  
    const {
      username,
    } = user;
  
    return (
        <WidgetWrapper   sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
  {/* FIRST ROW */}
  <FlexBetween
    gap="0.5rem"
    pb="1.1rem"
    onClick={() => navigate(`/profile/${userId}`)}
    sx={{ justifyContent: 'center', alignItems: 'center' }}
  >
    <UserImage image={picturePath} />
    <Typography
      variant="h3"
      color="text.primary"
      fontWeight="bold"
      sx={{
        '&:hover': {
          color: main ,
          cursor: 'pointer',
        },
      }}
    >
      {username}
    </Typography>
  </FlexBetween>


  {/* FOURTH ROW */}
  <Box
   
    p="1rem 0"
    sx={{
      textAlign: 'center',
      backgroundColor: 'background.paper',
      borderRadius: '10px',
      color: 'text.primary',
    }}
  >
    <Typography
      fontSize="2rem"
      fontWeight="bold"
      mb="3rem"
      sx={{ color: dark }}
    >
      Cutie's Profile
    </Typography>
  </Box>
</WidgetWrapper>

      
    );
  };
  
  export default UserWidget;