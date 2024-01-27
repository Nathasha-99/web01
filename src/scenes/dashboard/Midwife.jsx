import { Box, IconButton } from "@mui/material";
import Header from "../../components/header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Upcomings from "../../components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import HappyFamily from "../../Assets/HappyFamily.json";
import clinic from '../../Assets/clinic.json';
import marriedCouple from '../../Assets/marriedCouple.json';
import notification from '../../Assets/notification.json';
import medicare from '../../Assets/medicare.json';
import reports from '../../Assets/reports.json';
import pregnant from '../../Assets/pregnant.json';
import Lottie from 'lottie-react';

const Midwife = () => {
    
  
    return (
        <Box ml="20px"  >
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hello - midwife" subtitle="Welcome to your dashboard" />

                {/* SEARCH BOX */}
            <Box display="flex" bgcolor={"#e4e5e2"} borderRadius={"3px"} marginRight={"20px"}>
                <InputBase sx={{ml:1,flex:1}} placeholder="Search"></InputBase>
                <IconButton type="button" sx={{p:1}}> 
                    <Search />
                </IconButton>
            </Box>
            </Box>
            
            {/* Main boxes */}
            <div className="main-cards">
                <div>
                    <Lottie animationData={medicare} />
                </div>

                

                <div className="cards">
                    <div className="card-inner">
                        <h8>MARRIED COUPLE REGISTRATION</h8>
                        <Lottie style={{height:110}} animationData={marriedCouple}/>
                    </div>
                </div>
                
                <div className="cards">
                    <div className="card-inner">
                        <h8>PREGNANCY REGISTRATION</h8>
                        <Lottie style={{height:100}} animationData={pregnant}/>
                    </div>
                </div>

                <div className="cards">
                    <div className="card-inner">
                        <h8>NOTIFICATION HANDLING</h8>
                        <Lottie style={{height:90}} animationData={notification}/>
                    </div>
                </div>

                <div className="cards">
                    <div className="card-inner">
                        <h8>SUMMARY REPORTS</h8>
                        <Lottie style={{height:100}} animationData={reports}/>
                    </div>
            </div>
            </div>

            <div className="second">
            
                <div className="calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>
                <div className="upcomingClinics">
                    <div marginLeft= "20px">
                    <h3 > Upcoming Clinics</h3>
                    </div>
                    <div><Upcomings/></div>
                  
                </div>
                <div className="cards">
                    <div className="card-inner">
                        <h8>ELIGIBLE FAMILIES</h8>
                        <Lottie style={{height:110}} animationData={HappyFamily}/>
                    </div>
                </div>
                <div className="cards">
                    <div className="card-inner">
                        <h8>REGISTERED PREGNANT MOTHERS</h8>
                        <Lottie style={{height:150}} animationData={pregnant}/>
                    </div>
                </div>

            </div>

        </Box>
    );

};
export default Midwife;
