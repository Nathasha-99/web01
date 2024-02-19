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
 import Test from './scenes/dashboard/Test';
//import MidwifeEligibleCoupleRegistrationForm from './scenes/Family/MidwifeEligibleCoupleRegistrationForm';
//import CombinedSteppers from "./scenes/Family/new";
//import FieldClinicInformationForm from "./scenes/Family/FieldClinicInformationForm";
import Midwife from "./scenes/dashboard/Midwife";
// import { SickTwoTone } from "@mui/icons-material";
import ClinicCareInformationForm from "./scenes/Midwife/ClinicCareInformationForm";
import SidebarTest from "./scenes/global/SidebarTest";
import RegisteredPregnancyMothers from "./scenes/Midwife/RegisteredPregnancyMothers";
import MotherProfileView from "./scenes/Family/MotherProfileView";
import FieldClinicInformationForm from "./scenes/Midwife/FieldClinicInformationForm";


function App() {
  return (
    <div className="App">
      <main className='Content'>
        <Topbar />
        
        <Routes>
          {/* <Route path="/" element={<ClinicCareInformationForm/>}/> */}
          <Route path="/" element={<Midwife/>}/>
          {/* <Route path="/" element={<Dashboard/>}/> */}
          {/* <Route path="/" element={<MohDr/>}/> */}
          <Route path="/test" element={<Test/>} />

          <Route path="/regPreg" element={<RegisteredPregnancyMothers/>} />
          <Route path="/motherProfile" element={<MotherProfileView/>} />
          <Route path="/fieldClinicForm" element={<FieldClinicInformationForm/>} />

          

        </Routes>
        {/* <Footer/> */}
        
      </main>  
      
    </div>
  );
}

export default App;

