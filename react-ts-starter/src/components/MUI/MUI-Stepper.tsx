import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepperProps } from "../../interfaces/global";
import UserForm from "../UserForm";
import Pokedex from "../../pages/Pokedex";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";

const steps = ["Your Information", "Select your Pokemon", "Review"];

export default function HorizontalLinearStepper(stepperProps: StepperProps) {
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return false;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (stepperProps.activeStep === 0) {
      if (stepperProps.isValidForm) {
        stepperProps.setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
      } else {
        alert("Please fill out all fields");
      }
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(stepperProps.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(stepperProps.activeStep);
    }

    stepperProps.setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    stepperProps.setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
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
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
}
