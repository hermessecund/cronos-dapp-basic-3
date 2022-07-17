import React from "react";

import Typography from "@mui/material/Typography";
import { AppBar, Box } from "@mui/material";

interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <AppBar position="static">
          <Box sx={{ textAlign: "center", m: 1 }}>
            <Typography>hermessecund</Typography>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
};

export default Footer;
