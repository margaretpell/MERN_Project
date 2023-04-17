import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";


const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={ "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box >
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          mt={"2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>

        
        </Box>
      </Box>
  );
};

export default HomePage;