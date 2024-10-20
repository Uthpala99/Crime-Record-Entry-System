import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Box, Divider, SelectChangeEvent, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export function Step5() {
  const navigate = useNavigate();
  const stepCount = 3;
  const [activeStep, setActiveStep] = useState(0);
  const [numOfCriminals, setnumOfCriminals] = useState("");
  const [criminalArrivedManner, setCriminalArrivedManner] = useState("");
  const [arrivedMethod, setArrivedMethod] = useState("");
  const [weponsType, setWeponsType] = useState("");
  const [weponsSubType, setWeponsSubType] = useState("");
  const [weponNumber, setWeponNumber] = useState("");
  const [otherInfoStep502, setOtherInfoStep502] = useState("");
  const [criminalProcedureType, setCriminalProcedureType] = useState("");
  const [executionAndEscapeType, setExecutionAndEscapeType] = useState("");
  const [otherInfoStep503, setOtherInfoStep503] = useState("");
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMainStepBack = () => {
    navigate('/step4');
  };

  const handleMainStepNext = () => {
    navigate('/step6');
  };

  const handleNumOfCriminalsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setnumOfCriminals(event.target.value);
  };

  const handleCriminalArrivedMannerSelectChange = (event: SelectChangeEvent) => {
    setCriminalArrivedManner(event.target.value);
  };

  const handleArrivedMethodSelectChange = (event: SelectChangeEvent) => {
    setArrivedMethod(event.target.value);
  };

  const handleWeponsTypeSelectChange = (event: SelectChangeEvent) => {
    setWeponsType(event.target.value);
  };

  const handleWeponsSubTypeSelectChange = (event: SelectChangeEvent) => {
    setWeponsSubType(event.target.value);
  };

  const handleWeponNumberTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setWeponNumber(event.target.value);
  };

  const handleOtherInfoStep502TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep502(event.target.value);
  };

  const handleCriminalProcedureTypeSelectChange = (event: SelectChangeEvent) => {
    setCriminalProcedureType(event.target.value);
  };

  const handleExecutionAndEscapeTypeSelectChange = (event: SelectChangeEvent) => {
    setExecutionAndEscapeType(event.target.value);
  };

  const handleOtherInfoStep503TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep503(event.target.value);
  };


  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <span className="text-xl font-bold">5. අපරාධය සඳහා භාවිත ක්‍රම විධි</span>
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
                          <span className="text-xl font-bold mt-2">අපරාධය සඳහා භාවිත ක්‍රම විධි</span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">අපරාධකරුවන් ගණන</span>
                                <TextInput
                                  value={numOfCriminals}
                                  onChange={handleNumOfCriminalsTextChange}
                                  type="number"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">අපරාධකරු පැමිණි විලාශය</span>
                                <SelectInput
                                  value={criminalArrivedManner}
                                  onChange={handleCriminalArrivedMannerSelectChange}
                                  items={["පැමිණි විලාශය"]}
                                />
                              </div>
                            </div>

                            <div className="my-3">
                              <span className="font-semibold">ආගමන ක්‍රමය</span>
                              <SelectInput
                                value={arrivedMethod}
                                onChange={handleArrivedMethodSelectChange}
                                items={["ආගමන ක්‍රමය"]}
                              />
                            </div>
                          </div>
                      </div>
                    )}

                    {activeStep == 1 && (
                      <div>
                          <span className="text-xl font-bold mt-2">අපරාධය සඳහා භාවිත ක්‍රම විධි</span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 ">
                                <span className="font-semibold">අවි ආයුධ හා උපකරණ ප්‍රධාන වර්ගීකරණය</span>
                                <SelectInput
                                  value={weponsType}
                                  onChange={handleWeponsTypeSelectChange}
                                  items={["පැමිණි විලාශය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">අවි ආයුධ හා උපකරණ අනු වර්ගීකරණය</span>
                                <SelectInput
                                  value={weponsSubType}
                                  onChange={handleWeponsSubTypeSelectChange}
                                  items={["පැමිණි විලාශය"]}
                                />
                              </div>
                            </div>

                            <div className="my-3">
                              <span className="font-semibold">අවි ආයුධ අංකය</span>
                              <TextInput
                                  value={weponNumber}
                                  onChange={handleWeponNumberTextChange}
                                  type="text"
                                />
                            </div>

                            <div className="my-6">
                              <span className="font-semibold">වෙනත් තොරතුරු</span>
                              <TextInput
                                  value={otherInfoStep502}
                                  onChange={handleOtherInfoStep502TextChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                  fullWidth={true}
                                />
                            </div>
                          </div>
                      </div>
                    )}

                    {activeStep == 2 && (
                      <div>
                          <span className="text-xl font-bold mt-2">අපරාධය සිදුකර ඇති ක්‍රමය</span>
                          <div className="mx-3">
                            <div className="mt-6">
                              <span className="font-semibold"> අපරාධ ක්‍රම විධි වර්ග</span>
                              <SelectInput
                              value={criminalProcedureType}
                              onChange={handleCriminalProcedureTypeSelectChange}
                              items={["ආගමන ක්‍රමය"]}
                              />
                            </div>
                            <div className="mt-3">
                              <span className="font-semibold">අපරාධය සිදුකර පලා ගිය ආකාරය</span>
                              <SelectInput
                                value={executionAndEscapeType}
                                onChange={handleExecutionAndEscapeTypeSelectChange}
                                items={["පැමිණි විලාශය"]}
                              />
                            </div>

                            <div className="my-3">
                              <span className="font-semibold" >වෙනත් තොරතුරු</span>
                              <TextInput
                                  value={otherInfoStep503}
                                  onChange={handleOtherInfoStep503TextChange}
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
                  text="ඊළඟ පියවරට"
                  onClick={activeStep === 2 ? handleMainStepNext : handleNext}
                />
              </div>
            </div>
          </div>
          <Divider className="h-full" orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div>
        </div>
      </div>
    </BaseBox>
  );
}
