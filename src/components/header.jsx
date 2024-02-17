import { Typography, Box,useTheme, colors } from "@mui/material";
import {tokens} from '../theme';

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="20px" mt={3}>
          <Typography
            variant="h5"
            color={"#000"}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            {title}
          </Typography>
          <Typography variant="h8" color={"#2a777c"}>
            {subtitle}
          </Typography>
        </Box>
      );
};

export default Header;