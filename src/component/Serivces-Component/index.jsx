
import React, { useContext } from "react";
import "./index.scss";
import ServicesCard from "../../commonComponent/servicesCard";
import { ThemeContext } from "../../Theme";
export default function Services({ serviceCardData }) {
  const {toggleTheme, DarkMode}=useContext(ThemeContext);
  return (
    <div id="servicesComp">
      <div >
        <div className="heading"color={DarkMode==="light" ? '#333':'#fff'}>Our Services</div>
        <div className="content">
          <p const >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>

      <div sx={{ paddingTop: "50px" }}>
        <div id="serviceCardDec">
         <ServicesCard serviceCardData={serviceCardData} />

        </div>
        
      </div>
    </div>
  );
}
