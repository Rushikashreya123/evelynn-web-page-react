import React from "react";
import "./index.scss";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import mobile from "../../images/appFeatures/mobile.svg";
import CardComp from "../../commonComponent/Card";
import { useContext } from "react";
import { ThemeContext } from "../../Theme";

export default function AppFeatures({ ConstFile }) {
  const {toggleTheme, DarkMode}=useContext(ThemeContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: DarkMode === "dark" ? "#333" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: DarkMode==="light"? '#333' :'#fff'
  }));
  return (
    <div id="appFeatureComp">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item className="chord">
              <Box id="AppFeatureData">
                <Box  sx={{
          backgroundColor: DarkMode === "dark" ? "#333" : "#fff",
          color: DarkMode === "light" ? "#333" : "#fff",fontSize:'42PX'}}>App Features</Box>
                <Box>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </p>
                </Box>
              </Box>
              <Box>
                <Box id="cardData">
                  <CardComp constfile={ConstFile} />
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
          
            <Item className="mobileImage">
            <div id="appFeatureDec">
              
                <img src={mobile} id="mobile" />
                
            </div>
              
            </Item>
            
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
