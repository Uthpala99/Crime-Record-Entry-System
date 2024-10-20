import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "පියවර 1",
  },
  {
    label: "පියවර 2",
  },
  {
    label: "පියවර 3",
  },
  {
    label: "පියවර 4",
  },
  {
    label: "පියවර 5",
  },
  {
    label: "පියවර 6",
  },
  {
    label: "පියවර 7",
  },
  {
    label: "පියවර 8",
  },
  {
    label: "පියවර 9",
  },
  {
    label: "පියවර 10",
  },
  {
    label: "පියවර 11",
  },
  {
    label: "පියවර 12",
  },
];

export function VerticalStepper({ currentStep }: { currentStep: number }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  console.log(currentStep);
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={currentStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
