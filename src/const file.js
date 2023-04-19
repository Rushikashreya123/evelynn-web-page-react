import android from "./images/appFeatures/android.PNG";
import material from './images/appFeatures/material.PNG';
import eye from './images/appFeatures/eye.PNG';
import vildcard from './images/appFeatures/vildcard.png';
import responsive from'./images/appFeatures/responsive.PNG';
import like from './images/appFeatures/like.PNG';
import euro from './images/services/euro.PNG';
import stairs from './images/services/stairs.PNG';
import business from './images/services/business.PNG';
import ultimate from './images/services/ultimate.PNG';


const ConstFile=[
    { 
        img:android,
        title:'Use on Any Device',
        desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    },
    {
        img:material,
        title:'Material Design Icon',
        desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    },
    { 
        img:eye,
        title:'Retina Ready',
        desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    },
    {
        img:vildcard,
        title:'W3c Valid Code',
        desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    },
    {
        img:responsive,
        title:'Fully Responsive',
        desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',

    },
    {
        img:like,
        title:'Browser Compatibility',
        desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    },

];
const serviceCardData=[
    {
    image:euro,
    heading:'Free',
    symbol:'$',
    money:'0',
    monthly:'/mo',
    text1:'Full Access',
    text2:'Source Files',
    text3:'Code Upload',
    text4:'Enhanced Security',
    text5:'Free Installment',

},
{
    
        image:stairs,
        heading:'Starter',
        symbol:'$',
        money:'19',
        monthly:'/mo',
        text1:'Full Access',
        text2:'Source Files',
        text3:'Code Upload',
        text4:'Enhanced Security',
        text5:'Free Installment',
    
    
},
{
    image:business,
    heading:'Business',
    symbol:'$',
    money:'39',
    monthly:'/mo',
    text1:'Full Access',
    text2:'Source Files',
    text3:'Code Upload',
    text4:'Enhanced Security',
    text5:'Free Installment',

},
{
    image:ultimate,
    heading:'Ultimate',
    symbol:'$',
    money:'59',
    monthly:'/mo',
    text1:'Full Access',
    text2:'Source Files',
    text3:'Code Upload',
    text4:'Enhanced Security',
    text5:'Free Installment',

},

];
const company=[
    'About Us',
    'Services',
    'Team',
    'Pricing',
    'Project',

];
const coustomerData=[
    {
        image:'http://evelynn-react.ui-lib.com/assets/images/face-1.png',
        name:'John Doe',
        role:'Project Manager',
        isHover:false,
    },

    { 
        image:'http://evelynn-react.ui-lib.com/assets/images/face-2.png',
        name:'John White',
        role:'CEO',
        isHover:false,
        
    },

    { 
        image:'http://evelynn-react.ui-lib.com/assets/images/face-3.png',
        name:'Adham Smith',
        role:'Software Engineer',
        isHover:false,
        
    },
    {
        image:'http://evelynn-react.ui-lib.com/assets/images/face-4.png',
        name:'John',
        role:'Employee',
        isHover:false,
    },
    // { 
    //     image:'http://evelynn-react.ui-lib.com/assets/images/face-2.png',
    //     name:'John White',
    //     role:'CEO',
        
    // },

    // { 
    //     image:'http://evelynn-react.ui-lib.com/assets/images/face-3.png',
    //     name:'Adham Smith',
    //     role:'Software Engineer',
        
    // },

];
const usefullLinks=['Terms of Services','Privacy Policy','Documentation','Changelog','Components'];
export default ConstFile;
export{serviceCardData,company,usefullLinks,coustomerData};
