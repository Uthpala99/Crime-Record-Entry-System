import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Box, Divider, SelectChangeEvent, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function Step6() {
  const navigate = useNavigate();
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMainStepBack = () => {
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

  const handleSubmit = async () => {
    try {
      // const response = await axios.post('http://localhost:3001/submit-form', formData);
      // if (response.data.success) {
      //   console.log('Form submitted successfully', response.data.data);
      // } else {
      //   console.error('Form submission failed');
      // }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <span className="text-xl font-bold">6. අපරාධ ගොදුරු පුද්ගල ශාරීරික හානි වර්ග හා දේපළ හානි වර්ග හා වටිනාකම්</span>
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
                    {activeStep == 0 && (
                      <div>
                          <span className="text-xl font-bold mt-2">අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි</span>
                          <div className="mx-3" >
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">වින්දිතයාගේ නම</span>
                                <TextInput
                                  value={victimName}
                                  onChange={handleVictimNameTextChange}
                                  type="text"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">සිදුවූ හානිය</span>
                                <SelectInput
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

                    {activeStep == 1 && (
                      <div>
                          <span className="text-xl font-bold mt-2">අපරාධය නිසා සිදුවූ දේපළ හානි වර්ග</span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">දේපළ වර්ගය</span>
                                <SelectInput
                                  value={propertyType}
                                  onChange={handlePropertyTypeSelectChange}
                                  items={["දේපළ වර්ගය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">දේපළ අනු වර්ගය</span>
                                <SelectInput
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
                                />
                            </div>
                            <div className="my-6">
                              <span className="font-semibold">වෙනත් තොරතුරු</span>
                              <TextInput
                                  value={otherInfoStep602}
                                  onChange={handleOtherInfoStep602TextChange}
                                  type="text"
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
              <div className="flex gap-2 justify-between rounded-md grow">
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
                />
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon/>}
                  buttonColor="primary"
                  text= {activeStep === 1 ? "Submit" : "ඊළඟ පියවරට"}
                  onClick={activeStep === 1 ? handleSubmit : handleNext}
                />
              </div>
            </div>
          </div>
          <Divider className="h-full " orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div>
        </div>
      </div>
    </BaseBox>
  );
}
