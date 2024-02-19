import { Box, IconButton, Typography } from "@mui/material";
import Header from "../../components/header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Upcomings from "../../components/Upcomings";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import { Search } from "@mui/icons-material";
import HappyFamily from "../../Assets/HappyFamily.json";
import clinic from '../../Assets/clinic.json';
import marriedCouple from '../../Assets/marriedCouple.json';
import notification from '../../Assets/notification.json';
import medicare from '../../Assets/medicare.json';
import reports from '../../Assets/reports.json';
import pregnant from '../../Assets/pregnant.json';
import Lottie from 'lottie-react';
import { Link, Router, Routes } from "react-router-dom";
//import SidebarTest from "../global/SidebarTest";
import test from "./Test";

const Midwife = () => {
    
  
    return (
        <Box ml="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hello - midwife" subtitle="Welcome to your dashboard" />

        {/* SEARCH BOX */}
        <Box
          display="flex"
          bgcolor={"#e4e5e2"}
          borderRadius={"3px"}
          marginRight={"20px"}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </Box>
      </Box>

      {/* Main boxes */}
      <Grid className="main-cards">
        <Grid>
          <Lottie animationData={medicare} />
        </Grid>

        <Grid className="cards">
          <Grid className="card-inner">
            <h8>MARRIED COUPLE REGISTRATION</h8>
            <Lottie style={{ height: 110 }} animationData={marriedCouple} />
          </Grid>
        </Grid>

        <Grid className="cards">
          <Grid className="card-inner">
            <h8>PREGNANCY REGISTRATION</h8>
            <Lottie style={{ height: 100 }} animationData={pregnant} />
          </Grid>
        </Grid>
        <Grid className="cards">
          <Grid className="card-inner">
            <h8>ELIGIBLE FAMILIES</h8>
            <Lottie style={{ height: 110 }} animationData={HappyFamily} />
          </Grid>
        </Grid>
       
            <Grid className="cards" >
                <Link to="/regPreg" style={{ textDecoration: 'none' , color: 'black'}}>
                <Grid className ="card-inner">
                    <Typography>REGISTERED PREGNANT MOTHERS</Typography>   
                    <Lottie style={{ height: 120 }} animationData={pregnant} />
                </Grid>
                </Link>
            </Grid>
        
        </Grid>
      <Grid className="second">
        <Grid className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Grid>
        <Grid className="upcomingClinics">
          <Grid marginLeft="20px">
            <h3> Upcoming Clinics</h3>
          </Grid>
          <Grid>
            <Upcomings />
          </Grid>
        </Grid>

        <Grid className="cards">
          <Grid className="card-inner">
            <h8>NOTIFICATION HANDLING</h8>
            <Lottie style={{ height: 90 }} animationData={notification} />
          </Grid>
        </Grid>
        <Grid className="cards">
          <Grid className="card-inner">
            <h8>SUMMARY REPORTS</h8>
            <Lottie style={{ height: 100 }} animationData={reports} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Midwife;
