import { Routes ,Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
// import  Dashboard from "./scenes/dashboard";
//import Calendar from "./components/Calendar";
//import Footer from "./scenes/global/Footer";
// import Footer from "./scenes/global/footer"
// import Admin from "./scenes/dashboard/Admin";
//
 import Dashboard from "./scenes/dashboard";
//import Midwife from "./scenes/dashboard/Midwife";
import MohDr from "./scenes/dashboard/MohDr";
// import Baby from './scenes/dashboard/Baby';
// import test from './scenes/dashboard/test';
//import MidwifeEligibleCoupleRegistrationForm from './scenes/Family/MidwifeEligibleCoupleRegistrationForm';
//import CombinedSteppers from "./scenes/Family/new";
import FieldClinicInformationForm from "./scenes/Family/FieldClinicInformationForm";
// import Midwife from "./scenes/dashboard/Midwife";
// import { SickTwoTone } from "@mui/icons-material";




function App() {
  return (
    <div className="App">
      <main className='Content'>
        <Topbar />
        
        <Routes>
          <Route path="/" element={<FieldClinicInformationForm/>}/>
          {/* <Route path="/" element={<Midwife/>}/> */}
          {/* <Route path="/" element={<Dashboard/>}/> */}
          {/* <Route path="/" element={<MohDr/>}/> */}
          {/* <Route path="/" element={<test/>}/> */}
        </Routes>
        {/* <Footer/> */}
        
      </main>  
      
    </div>
  );
}

export default App;

