import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { HTTPService } from "../../services";
import { toast } from "react-toastify";
import { Button } from "../Button";

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

export function VerticalStepper({
  currentStep,
  formData,
}: {
  currentStep: number;
  formData: any;
}) {

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData = { ...formData };
    console.log("You are saving ", newFormData);

    httpService.post("/submit-form",  {newFormData} ).then((result)=>{
      console.log(result)
      toast.success((result.data as { msg: string; success: boolean }).msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error)=>{
      console.error(error);
    });

    console.log(newFormData)
  };

  console.log(formData);

  return (
    <div>
      <Box sx={{ maxWidth: 400, marginLeft: '35%' }}>
        <Stepper activeStep={currentStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel className="font-semibold">{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <br />
        <br />
      <div className="place-items-center ">
          <Button text="තාවකලිකව සුරකින්න" onClick={handleSave} />
        </div>
    </div>
  );
}
