import React from "react";
import './index.scss';
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import AndroidIcon from "@mui/icons-material/Android";
export default function Download(){
    return(
        <div id="DownloadComp">
          <div id="downloadDec">
            <div id="downloadHead">Download Now !</div>
              <div id="dataDownload">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</div>
              <div id="buttons" >
              <Button variant="contained" className="buttoncomp">
                  <AndroidIcon sx={{ paddingRight: "10px" }} />
                  Play Store
                </Button>
                <Button variant="contained" className="buttoncomp">
                  <TwitterIcon sx={{ paddingRight: "10px" }} />
                  App Store
                </Button>

            </div>

          </div>
            

        </div>
    );
}