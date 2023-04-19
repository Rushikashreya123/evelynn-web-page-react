import React from "react";
import { Box } from "@mui/system";
import'./index.scss';
import fb from "../../images/footer/facebook.PNG";
import twitter from "../../images/footer/twitter.PNG";
import instagram from "../../images/footer/instagram.PNG";
import linkedin from "../../images/footer/linkedin.PNG";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
export default function Footer({company,usefullLinks}){
    const [style, setStyle] = useState("field");
    const changeStyle = () => {     
        setStyle("clicked");
      };
    return(
        <div id="footer">
            <div id="footerComp">
            <Box className="Footercontainer">
                <Box id="footcomp1">
                    <div id="headingFooter">About Us</div>
                    <div className="foottxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing.</div>
                    <div id="footImg">
                            <img src={fb}/>
                            <img src={twitter}/>
                            <img src={instagram}/>
                            <img src={linkedin}/>
                        
                    </div>
                </Box>
                <Box id="footcomp2" >
                <div id="headingFooter">Company</div>
                <div>
                {(company.map((item)=>
                <div className="arrowData" >
                    <ArrowForwardIosIcon className="arrow"/>{item}
                </div>           
                )  
                )}
                </div>
                </Box>
                <Box id="footcomp2" >
                <div id="headingFooter">Useful Links</div>
                <div>
                {(usefullLinks.map((item)=>
                <div className="arrowData">
                    <ArrowForwardIosIcon className="arrow" />{item}
                </div>           
                )  
                )}
                </div>
                </Box>
                <Box >
                <div id="headingFooter">Newsletter</div>
                <div className="arrowData">Sign Up for the latest news</div>
                <div className={style}  onClick={changeStyle}><EmailIcon sx={{paddingRight:'5px'}}/><input type="text" id="input" placeholder="YOUR EMAIL"></input></div>
                <div><Stack spacing={2} direction="row">
                    <Button variant="contained" sx={{padding:'5px 100px'}}>Subscribe</Button>
                     </Stack></div>

                </Box>



            </Box>
        </div>
        </div>
        
    );
}