import { Routes ,Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
// import  Dashboard from "./scenes/dashboard";
//import Calendar from "./components/Calendar";
//import Footer from "./scenes/global/Footer";
import Footer from "./scenes/global/footer"
import Admin from "./scenes/dashboard/Admin";
import Dashboard from "./scenes/dashboard";

function App() {
  return (
    <div className="App">
      <main className='Content'>
        <Topbar />
        <Routes>
          <Route path="/" element={<Admin />} />
        </Routes>
        {/* <Footer/> */}
        
      </main>  
      
    </div>
  );
}

export default App;

