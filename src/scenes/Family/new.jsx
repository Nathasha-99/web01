import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HorizontalStepper({ stepsH, activeStepH, handleNextH, handleBackH }) {
  return (
    <Stepper orientation="horizontal" activeStep={activeStepH}>
      {stepsH.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
          <StepContent>
            <Typography>{step.content}</Typography>
            <div>
              <Button
                disabled={activeStepH === 0}
                onClick={handleBackH}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNextH}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === stepsH.length - 1 ? "Finish" : "Continue"}
              </Button>
            </div>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}

function VerticalStepper({ steps, activeStep, handleNext, handleBack }) {
  return (
    <Stepper orientation="vertical" activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
          <StepContent>
            <Typography>{step.content}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === steps.length - 1 ? "Finish" : "Continue"}
              </Button>
            </div>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}

function CombinedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepH, setActiveStepH] = React.useState(0);
  const horizontalSteps = [
    { label: "Sub-step 1" },
    { label: "Sub-step 2" },
    { label: "Sub-step 3" },
  ];

  const verticalSteps = [
    { label: "Step 1", content: "Vertical Step 1 Content" },
    { label: "Step 2", content: <HorizontalStepper stepsH={horizontalSteps} activeStep={activeStepH} handleNextH={() => setActiveStepH(prevStepH => prevStepH + 1)} handleBackH={() => setActiveStepH(prevStepH => prevStepH - 1)} /> },
    { label: "Step 3", content: <HorizontalStepper stepsH={horizontalSteps} activeStep={activeStepH} handleNextH={() => setActiveStepH(prevStepH => prevStepH + 1)} handleBackH={() => setActiveStepH(prevStepH => prevStepH - 1)} /> },

  ];

  return (
    <div>
      <VerticalStepper steps={verticalSteps} activeStep={activeStep} handleNext={() => setActiveStep(prevStep => prevStep + 1)} handleBack={() => setActiveStep(prevStep => prevStep - 1)} />
      
    </div>
  );
}

export default CombinedSteppers;
