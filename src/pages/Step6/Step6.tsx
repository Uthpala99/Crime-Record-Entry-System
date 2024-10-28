import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Box, Divider, SelectChangeEvent, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/formHook";
import { HTTPService } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function Step6() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const stepCount = 2;

  const [activeStep, setActiveStep] = useState(0);
  const [victimName, setVictimName] = useState("");
  const [damageDone, setDamageDone] = useState("");
  const [otherInfoStep601, setOtherInfoStep601] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertySubType, setPropertySubType] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [otherInfoStep602, setOtherInfoStep602] = useState("");
  

  const handleNext = () => {
    if (activeStep === 0 ){
      if (!victimName || !damageDone || !otherInfoStep601  ) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMainStepNext = () => {
    if (activeStep === 1 ){
      if ( !propertyType || !propertySubType || !propertyValue ||  !otherInfoStep602 ) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }
    updateFormData("form6", {
      victimName,
      damageDone,
      otherInfoStep601,
      propertyType,
      propertySubType,
      propertyValue,
      otherInfoStep602
    });
    updateFormData("currentStep", 6);
    navigate('/step7');
  };

  const handleMainStepBack = () => {
    updateFormData("form6", {
      victimName,
      damageDone,
      otherInfoStep601,
      propertyType,
      propertySubType,
      propertyValue,
      otherInfoStep602
    });
    updateFormData("currentStep", 4);
    navigate('/step5');
  };

  const handleVictimNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setVictimName(event.target.value);
  };
  
  const handleDamageDoneSelectChange = (event: SelectChangeEvent) => {
    setDamageDone(event.target.value);
  };

  const handleOtherInfoStep601TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep601(event.target.value);
  };

  const handlePropertyTypeSelectChange = (event: SelectChangeEvent) => {
    setPropertyType(event.target.value);
  };

  const handlePropertySubTypeSelectChange = (event: SelectChangeEvent) => {
    setPropertySubType(event.target.value);
  };

  const handlePropertyValueTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPropertyValue(event.target.value);
  };

  const handleOtherInfoStep602TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep602(event.target.value);
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,form6:{ 
      victimName,
      damageDone,
      otherInfoStep601,
      propertyType,
      propertySubType,
      propertyValue,
      otherInfoStep602 }};
      
      httpService.post("/submit-form",  {newFormData} ).then((result)=>{
        toast.success((result.data as { msg: string; success: boolean }).msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(result)
      }).catch((error)=>{
        console.error(error);
      });
  };

  const handleReset = () => {
    if (activeStep === 0 ){
      setVictimName("");
      setDamageDone("");
      setOtherInfoStep601("");
    }else if (activeStep === 1 ){
      setPropertyType("");
      setPropertySubType("");
      setPropertyValue("");
      setOtherInfoStep602("");
    }
  };

  return (
    <BaseBox>
      <div className="p-6 flex flex-col grow">
        <ToastContainer />
        <div className="flex justify-between">
        <span className="text-xl font-bold">6. අපරාධ ගොදුරු පුද්ගල ශාරීරික හානි වර්ග හා දේපළ හානි වර්ග හා වටිනාකම්</span>
          <div className="place-items-center ">
            <Button
              variant="outlined"
              text="තාවකලිකව සුරකින්න"
              onClick={handleSave}
            />
          </div>
        </div>        
        <div className="flex gap-2 justify-between rounded-md grow mt-5">
          <div className="p-2 grow flex flex-col justify-between">
          <Box sx={{ width: '100%'}} >
              <div className="p-2 grow flex flex-col justify-between">
                <Box sx={{ width: '20%', alignSelf:'center'}} >
                    <Stepper 
                    activeStep={activeStep}
                    sx={{"& .MuiStepIcon-root": {
                        fontSize: "2rem",
                        }}}
                        >
                        {Array.from({ length: stepCount }, (_, index) => (
                            <Step key={index}>
                            <StepLabel />
                            </Step>
                        ))}
                    </Stepper>
                </Box>   
              </div> 
              <Divider className="pt-2" orientation='horizontal' flexItem />
              <div>
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    {activeStep === 0 && (
                      <div>
                          <span className="text-xl font-bold mt-2">අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි</span>
                          <div className="mx-3" >
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">වින්දිතයාගේ නම</span>
                                <TextInput
                                  value={victimName}
                                  onChange={handleVictimNameTextChange}
                                  type="text"
                                  placeholder="වින්දිතයාගේ නම"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">සිදුවූ හානිය</span>
                                <SelectInput
                                  className="w-[330px] block my-3"
                                  value={damageDone}
                                  onChange={handleDamageDoneSelectChange}
                                  items={["සිදුවූ හානිය"]}
                                />
                              </div>

                              <div className="my-3">
                                <span className="font-semibold">වෙනත් තොරතුරු</span>
                                <TextInput
                                    value={otherInfoStep601}
                                    onChange={handleOtherInfoStep601TextChange}
                                    type="text"
                                    placeholder="වෙනත් තොරතුරු"
                                    fullWidth={true}
                                  />
                              </div>
                          </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div>
                          <span className="text-xl font-bold mt-2">අපරාධය නිසා සිදුවූ දේපළ හානි වර්ග</span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">දේපළ වර්ගය</span>
                                <SelectInput
                                  className="w-[330px] block my-3"
                                  value={propertyType}
                                  onChange={handlePropertyTypeSelectChange}
                                  items={["දේපළ වර්ගය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">දේපළ අනු වර්ගය</span>
                                <SelectInput
                                  className="w-[330px] block my-3"
                                  value={propertySubType}
                                  onChange={handlePropertySubTypeSelectChange}
                                  items={["දේපළ අනු වර්ගය"]}
                                />
                              </div>
                            </div>
                            <div className="my-3">
                              <span className="font-semibold">දේපළ වටිනාකම {"("}වටිනාකම තහවුරු කළ හැකි අපරාධයක් නම්{")"}</span>
                              <TextInput
                                  value={propertyValue}
                                  onChange={handlePropertyValueTextChange}
                                  type="text"
                                  placeholder="දේපළ වටිනාකම"
                                />
                            </div>
                            <div className="my-6">
                              <span className="font-semibold">වෙනත් තොරතුරු</span>
                              <TextInput
                                  value={otherInfoStep602}
                                  onChange={handleOtherInfoStep602TextChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                  fullWidth={true}
                                />
                            </div>
                          </div>
                      </div>
                    )}      
                  </Typography>
                </React.Fragment>
              </div>
            </Box>

            <div className="flex gap-2">
              <div className="flex gap-2 place-content-evenly rounded-md grow">
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  buttonColor="primary"
                  text="පෙර පියවරට"
                  onClick={activeStep === 0 ? handleMainStepBack : handleBack}
                  />
                <Button
                  variant='contained'
                  buttonColor="error"
                  text="යළි සැකසුමට"
                  onClick={handleReset}
                />
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon/>}
                  buttonColor="primary"
                  text="ඊළඟ පියවරට"
                  onClick={activeStep === 1 ? handleMainStepNext : handleNext}
                />
              </div>
            </div>
          </div>
          {/* <Divider className="h-full " orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div> */}
        </div>
      </div>
    </BaseBox>
  );
}
