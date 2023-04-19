
import './App.scss';
import Header  from './component/Header';
import BestMusic from './component/BestMusicComponent';
import AppFeatures from './component/AppFeatures-Component';
import ConstFile,{serviceCardData,company,usefullLinks,coustomerData}  from './const file';
import ProductAnalysis from './component/ProductAnamysis-Component';
import AppFeaturesAndProduct from './component/Component-4';
import Services from './component/Serivces-Component';
import Coustomers from './component/Coustomers';
import Footer from './component/Footer';
import Download from './component/Download';
import { ThemeContext } from './Theme';
import { useContext } from 'react';
function App() {
  const {toggleTheme, DarkMode}=useContext(ThemeContext);

  
  return (
    <div >
      <Header/>
      <BestMusic/>
      <AppFeatures ConstFile={ConstFile}/>
      <ProductAnalysis/>
      <AppFeaturesAndProduct/>
      <Services serviceCardData={serviceCardData}/>
      <Coustomers coustomerData={coustomerData}/>
      <Download/>
      <Footer company={company} usefullLinks={usefullLinks}/>
    </div>
);
}


export default App;
