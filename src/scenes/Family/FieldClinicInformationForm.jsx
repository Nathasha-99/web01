import React from "react";
import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
//import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Radio, FormControlLabel, RadioGroup, FormControl,FormLabel, Typography } from "@mui/material";
import Header from "../../components/header";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';


function RadioInputGroup({ label, options }) {
  return (
    <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
      <FormControl>
        <FormLabel id={`radio-group-label-${label}`}>{label}</FormLabel>
        <RadioGroup row aria-labelledby={`radio-group-label-${label}`} name={`row-radio-buttons-group-${label}`}>
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}


const FieldClinicInformationForm = () => {
  const radioGroupOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    
  ];
  return (
    <div>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Field Clinic Information" />
      </Box>
      <form>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          //height="80vh"
          flexDirection="column"
        >
          <Grid container spacing={6}   sx={{ width: "90%" }}>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Visit Date" required sx={{ width: "100%" }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="POA"
                name="POA"
                label="POA"
                sx={{ width: "100%" }}
              />
            </Grid>



            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Anemia" options={radioGroupOptions} />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <Typography>Oedema</Typography>
              <RadioInputGroup item xs={3} label="Ankle" options={radioGroupOptions} />
              {/* <RadioInputGroup item xs={3} label="Facial" options={radioGroupOptions} /> */}
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <TextField
                    required
                    placeholder="Fundal Height"
                    name="FundalHeight"
                    label="Fundal Height"
                    sx={{ width: "100%" }}
                  />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Presenting Part"
                name="PresentingPart"
                label="Presenting Part"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="FM" options={radioGroupOptions} />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="FHS" options={radioGroupOptions} />
            </Grid>
            

            <Grid container spacing={2} item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <Typography>Urine</Typography>
              
              <RadioInputGroup item xs={6} label="Sugar" options={radioGroupOptions} />
              <RadioInputGroup item xs={6} label="Albumin" options={radioGroupOptions} />
              
              
            </Grid>

            {/* <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Albumin" options={radioGroupOptions} />
            </Grid> */}

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Typography variant="h6" mt={5}>Prenatal Health Tips</Typography>
            </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Nutritional Requirements/ On Myth" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Was informed about the expected delivery time?" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="If there were any dangerous situations, were the relatives informed about it?" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Conditions to avoid during pregnancy  /  Risk factors" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="The importance of being mindful of fetal movements" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Personal Safety" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Typography variant="h6" mt={5}>Child Birth Tips</Typography>
                </Grid>  

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Informing the mother about the onset of labour" options={radioGroupOptions} />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="What to take with you to the hospital" options={radioGroupOptions} />
                </Grid> 

                <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Typography variant="h6" mt={5}>Postpartum Tips</Typography>
                </Grid>  
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Baby Care" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Risk characteristics of the new born" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Exclusive breastfeeding" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Relation to correct breastfeeding posture" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Knowing without doubt if there is milk" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Postpartum risk factor" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="The need for family planning" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Awareness about family planning methods" options={radioGroupOptions} />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Dates to visit the clinic" options={radioGroupOptions} />
                </Grid> 



            

            
          </Grid>
        </Box>
      </form>
    </div>
  )
}

export default FieldClinicInformationForm;
