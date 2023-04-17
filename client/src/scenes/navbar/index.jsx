import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const theme = useTheme();
  const neutralLight = theme.palette.grey[300];
  const alt = theme.palette.grey[800];

  const fullName = `${user.username}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <Typography
        fontWeight="bold"
        fontSize="clamp(2rem, 2.5rem, 2.25rem)"
        color={neutralLight}
        onClick={() => navigate("/home")}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        Pet Community
      </Typography>
    
        <FormControl variant="standard" sx={{ borderRadius: "1rem" }}>
  <Select
    value={fullName}
    sx={{
      backgroundColor: "#f5f5f5",
      borderRadius: "1rem",
      p: "0.25rem 1rem",
      "& .MuiSvgIcon-root": {
        pr: "0.25rem",
        width: "3rem",
      },
      "& .MuiSelect-select:focus": {
        backgroundColor: "#f5f5f5",
      },
      "& .MuiTypography-root": {
        fontWeight: "bold",
      },
    }}
    input={<InputBase />}
    MenuProps={{ PaperProps: { sx: { borderRadius: "1rem" } } }}
  >
    <MenuItem value={fullName}>
      <Typography>{fullName}</Typography>
    </MenuItem>
    <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
  </Select>
</FormControl>

      
    </FlexBetween>
  );
};

export default Navbar;
