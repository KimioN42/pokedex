import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepperProps } from "../interfaces/global";
import UserForm from "./UserForm";
import Pokedex from "../pages/Pokedex";
import { Container } from "@mui/material";
import { saveData } from "../utils/helper";

const steps = ["Your Information", "Select your Pokemon", "Review"];

export default function HorizontalLinearStepper(stepperProps: StepperProps) {
  const handleNext = () => {
    //if form is not validated, alert user
    if (stepperProps.activeStep === 0 && stepperProps.isValidForm === false) {
      alert("Please fill out all fields");
      return;
    }

    stepperProps.setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    saveData("step", (stepperProps.activeStep + 1).toString());
  };

  const handleBack = () => {
    stepperProps.setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
    saveData("step", (stepperProps.activeStep - 1).toString());
  };

  const handleReset = () => {
    stepperProps.setActiveStep(0);
    stepperProps?.resetForm();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepperProps.activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepperProps.activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Step 1 - User Info*/}
          {stepperProps.activeStep === 0 && (
            <Container maxWidth="xl">
              <UserForm
                userData={stepperProps.userData}
                handleChange={stepperProps.handleChange}
                resetForm={stepperProps.resetForm}
                setValidation={stepperProps.setValidation}
                isValidForm={stepperProps.isValidForm}
              />
            </Container>
          )}

          {/* Step 2 - Pokedex */}
          {stepperProps.activeStep === 1 && (
            <Container maxWidth="xl">
              <Pokedex />
            </Container>
          )}

          {/* Step 3 - Review */}
          {stepperProps.activeStep === 2 && (
            <Container maxWidth="xl">
              <Typography sx={{ mt: 2, mb: 1 }}>
                Review your information and submit
              </Typography>
            </Container>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={stepperProps.activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              onClick={handleNext}
              disabled={stepperProps.isValidForm === false}
            >
              {stepperProps.activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
