import React, { useContext } from "react";
import "./index.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobile from "../../images/productAnalysis/mobile.svg";
import CheckIcon from "@mui/icons-material/Check";
import { ThemeContext } from "../../Theme";
export default function ProductAnalysis() {
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
        <Grid item xs={6}>
          <Item id="mobileImg">
          <div id="appFeatureDec">
            <img src={mobile} alt="mobile" />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item id="mobileImg">
            <Box id="mobileData">
              <div id="heading" sx={{
          backgroundColor: DarkMode === "dark" ? "#333" : "#fff",
          color: DarkMode === "light" ? "#333" : "#fff"}}>Great Product Analytics</div>
              <p id="data">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <div>
                <div id="checkIconData">
                  <CheckIcon id="checkIcon" />
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div id="checkIconData">
                  <CheckIcon id="checkIcon" />
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
                <div id="checkIconData">
                  <CheckIcon id="checkIcon" />
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </div>
              </div>
              <div id="viewData"> CLICK TO VIEW MORE ></div>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
