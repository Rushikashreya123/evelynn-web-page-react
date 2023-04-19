import React from "react";
import { Box } from "@mui/system";
import CoustomerCard from "../../commonComponent/coustomers";

export default function Coustomers({coustomerData}) {
  
  return (
    <div id="servicesComp">
      <Box>
        <div className="heading">What our Customers Have to Say</div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </Box>
      <Box>
        <CoustomerCard coustomerData={coustomerData}/>
        
      </Box>
      
    </div>
  );
}
