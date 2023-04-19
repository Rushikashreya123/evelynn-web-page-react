import "./index.scss";
import React, { useContext } from "react";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobile from "../../images/bestMusic/mobile.svg";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { ThemeContext } from "../../Theme";

export default function BestMusic() {
  const {toggleTheme, DarkMode}=useContext(ThemeContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: DarkMode === "dark" ? "#333" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: DarkMode==="light"? '#333' :'#fff'
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="container">
        <Grid item xs={6} className="decoration">
          <Item className="mobile">
          <div id="appFeatureDec">
            <img src={mobile} alt="mobile image" id="mobile" />
          </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="mobileData">
            <div id="first-content">Evalynn Music</div>
            <div id="second-content" >Best Music App 2020</div>
            <div id="third-content">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </div>
            <Box sx={{ "& button": { m: 1 }, paddingBottom: "70px" }}>
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  color: "black",
                  border: "1px solid rgba(63, 81, 181, 0.5)",
                  borderRadius: "20px",
                  padding: "5px 35px",
                }}
              >
                CLICK TO WATCH A VEDIO
              </Button>
            </Box>
            <Box>
              <Button variant="contained" className="buttoncomp">
                <AndroidIcon sx={{ paddingRight: "10px" }} />
                Play Store
              </Button>
              <Button variant="contained" className="buttoncomp">
                <AppleIcon sx={{ paddingRight: "10px" }} />
                App Store
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
