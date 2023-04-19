import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CheckIcon from "@mui/icons-material/Check";
import mobileImg from "../../images/analysisAndProducts/mobileImg.svg";
import "./index.scss";
import { ThemeContext } from "../../Theme";
export default function AppFeaturesAndProduct() {
  const {toggleTheme, DarkMode}=useContext(ThemeContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: DarkMode === "dark" ? "#333" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: DarkMode==="light"? '#333' :'#fff'
  }));
  return (
    <Box sx={{ flexGrow: 1 }} id="product">
      <Grid container spacing={2} className="container">
        <Grid item xs={8} id="grid">
          <Item className="firstGrid">
            <Box>
              <Box id="heading" color={DarkMode==="light" ? '#333':'#fff'}>App Features</Box>
              <Box className="data">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </Box>
              <Box>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  className="buttonGroup"
                >
                  <Button
                    sx={{
                      padding: "10px 30px",
                      background: " rgb(241, 242, 249)",
                      borderColor: "none",
                      textTransform:'none',
                    }}
                    className="button"
                  >
                    Community
                  </Button>
                  <Button
                    sx={{
                      padding: "10px 30px",
                      background: " rgb(241, 242, 249)",
                      textTransform:'none',
                    }}
                    className="button"
                  >
                    Self Service
                  </Button>
                  <Button
                    sx={{
                      padding: "10px 30px",
                      background: " rgb(241, 242, 249)",
                      textTransform:'none',
                     
                    }}
                    className="button"
                  >
                    Teamwork
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <div id="heading">Great Product Analytics</div>
            <div id="content">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem
              </p>
            </div>

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
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="firstGrid">
          <div id="appFeatureDec">
            <img src={mobileImg} />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
