import React, { useContext } from "react";
import "./index.scss";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { ThemeContext } from "../../Theme";

export default function CoustomerCard({ coustomerData }) {
  const { toggleTheme, DarkMode } = useContext(ThemeContext);
  const [customerData1, setCustomerData] = useState(coustomerData)
  const handleMouseEnter = (item) => {
    let nData = customerData1.map(each => {
      if(each.name === item.name) each.isHover = true 
      else each.isHover = false 
      return each
    })
    setCustomerData(nData)
    
    
  };
  const handleMouseLeave = (item) => {
    let nData = customerData1.map(each => {
      each.isHover = false 
      return each
       
    })
    setCustomerData(nData)
  
  };



  return (

    <div className="coustomCard" >
      {customerData1.map((item) => (
        <div onMouseEnter={()=>handleMouseEnter(item)} onMouseLeave={()=>handleMouseLeave(item)}>

          <div className="cardCompCustomer">
            <div>
              <fieldset className="field-set" >
                <legend>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt={item.name}
                      src={item.image}
                      sx={{
                        width: 90,
                        height: 90,
                        border: "1px solid #3f51b5",
                        background: "#fff",
                        padding: "5px",
                      }}
                      id={item.isHover?'avatarHover':'avathar'} 
                    />
                  </Stack>
                </legend>

                <div>
                  <Typography
                    variant="body2"
                    sx={{ paddingTop: "20px", paddingBottom: "20px",backgroundColor:DarkMode==='light'?'#fff':'#333', color:DarkMode==='light'?'#333':'#fff' }}
                    id="custData"
                  >
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore"
                  </Typography>
                  <div id="ArrowFunction">
                    |<ArrowForwardIcon sx={{ height: "16px", width: "16px" }} />
                    |<ArrowForwardIcon sx={{ height: "16px", width: "16px" }} />
                    |<ArrowForwardIcon sx={{ height: "16px", width: "16px" }} />
                    |<ArrowForwardIcon sx={{ height: "16px", width: "16px" }} />
                    |<ArrowForwardIcon sx={{ height: "16px", width: "16px" }} />
                  </div>
                  <div id="details">
                    <div>
                      <div id="username">{item.name}</div>
                      <div>{item.role}</div>
                    </div>
                    <div>
                      <TwitterIcon id={item.isHover ? 'twitHover':'twit'}/>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
