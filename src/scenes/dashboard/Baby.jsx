import React from "react";
import { Box, IconButton } from "@mui/material";
import Header from "../../components/header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Upcomings from "../../components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import referal from '../../Assets/referal.json';
import baby2 from '../../Assets/baby2.json';
import Lottie from 'lottie-react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from "react-router-dom";

const Baby = () => {
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

    return (
        <Box ml="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hello - Baby" subtitle="Welcome to your dashboard" />

                {/* SEARCH BOX */}
                <Box display="flex" bgcolor={"#e4e5e2"} borderRadius={"3px"} marginRight={"20px"}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
                    <IconButton type="button" sx={{ p: 1 }}>
                        <Search />
                    </IconButton>
                </Box>
            </Box>

            {/* Main boxes */}
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(5,1fr)',
                gap:'5px',
                margin:'15px 15px 0',
                justifyContent:'center'}}>
            <div>
                <Lottie style={{ height: 200 }} animationData={baby2} />
            </div>

            
            

            <div className="cards">
                <div className="card-inner">
                    <h8>REFERALS</h8>
                    <Lottie style={{ height: 100 }} animationData={referal} />
                </div>
            </div>
            <div className="cards">
                <div className="card-inner">
                    <h8>REFERALS</h8>
                    <Lottie style={{ height: 100 }} animationData={referal} />
                </div>
            </div>

        </div>

        <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" LinkComponent={Link} to="/test"/>
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>

        {/* second row */}
        <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 2fr 2fr',
                gap:'5px',
                margin:'5px 15px 0',
                justifyContent:'center'}}>

            
                <div className="calendar" style={{gridRow:'1/span 2'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>  
                <div className="upcomingClinics" style={{gridRow:'1/span 5'}}>
                    <div marginLeft="20px">
                        <h3> Upcoming Clinics</h3>
                    </div>
                    <div><Upcomings /></div>

                </div>    


        


                

            </div>

        </Box>
    );

};
export default Baby;
