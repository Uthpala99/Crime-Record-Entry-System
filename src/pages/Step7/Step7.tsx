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

export function Step7() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const stepCount = 4;

  const [activeStep, setActiveStep] = useState(0);
  const [suspectName, setSuspectName] = useState("");
  const [markersMainClassification, setMarkersMainClassification] = useState("");
  const [physicalOrMaterialOrPhysiologicalAndBehavioralClassification, setPhysicalOrMaterialOrPhysiologicalAndBehavioralClassification] = useState("");
  const [physicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails, setPhysicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails] = useState("");
  const [materialOrPhysicalAndBehavioralClassification, setMaterialOrPhysicalAndBehavioralClassification] = useState("");
  const [materialOrPhysicalAndBehavioralClassificationDetails, setMaterialOrPhysicalAndBehavioralClassificationDetails] = useState("");
  const [behavioralAndPhysiologicalClassification, setBehavioralAndPhysiologicalClassification] = useState("");
  const [physiologicalClassification, setPhysiologicalClassification] = useState("");
  const [behavioralAndPhysiologicalClassificationDetails, setBehavioralAndPhysiologicalClassificationDetails] = useState("");
  const [physiologicalClassificationDetails, setPhysiologicalClassificationDetails] = useState("");
  const [propertyMainClassification, setPropertyMainClassification] = useState("");
  const [propertyIdentificationMarksClassification, setPropertyIdentificationMarksClassification] = useState("");
  const [propertyTypeClassification, setPropertyTypeClassification] = useState("");
  const [propertyIdentificationMarksClassificationDetails, setPropertyIdentificationMarksClassificationDetails] = useState("");
  const [propertyTypeClassificationDetails, setPropertyTypeClassificationDetails] = useState("");
  const [classificationOfMarkers4, setClassificationOfMarkers4] = useState("");
  const [classificationOfMarkers5, setClassificationOfMarkers5] = useState("");
  const [classificationOfMarkers4Details, setClassificationOfMarkers4Details] = useState("");
  const [classificationOfMarkers5Details, setClassificationOfMarkers5Details] = useState("");

  const handleNext = () => {
    if (activeStep === 0 ){
      if (!suspectName || !markersMainClassification || !physicalOrMaterialOrPhysiologicalAndBehavioralClassification || !physicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails 
        || !materialOrPhysicalAndBehavioralClassification ||  !materialOrPhysicalAndBehavioralClassificationDetails  ) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }else if (activeStep === 1 ){
      if ( !behavioralAndPhysiologicalClassification || !physiologicalClassification || !behavioralAndPhysiologicalClassificationDetails || !physiologicalClassificationDetails ) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }else if (activeStep === 2 ){
      if (!propertyMainClassification || !propertyIdentificationMarksClassification ||  !propertyTypeClassification || 
        !propertyIdentificationMarksClassificationDetails || !propertyTypeClassificationDetails ) {
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
    if (activeStep === 3 ){
      if (!classificationOfMarkers4 || !classificationOfMarkers5 || !classificationOfMarkers4Details || !classificationOfMarkers5Details ) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }
    updateFormData("form7", {
      suspectName,
      markersMainClassification,
      physicalOrMaterialOrPhysiologicalAndBehavioralClassification,
      physicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails,
      materialOrPhysicalAndBehavioralClassification,
      materialOrPhysicalAndBehavioralClassificationDetails,
      behavioralAndPhysiologicalClassification,
      physiologicalClassification,
      behavioralAndPhysiologicalClassificationDetails,
      physiologicalClassificationDetails,
      propertyMainClassification,
      propertyIdentificationMarksClassification,
      propertyTypeClassification,
      propertyIdentificationMarksClassificationDetails,
      propertyTypeClassificationDetails,
      classificationOfMarkers4,
      classificationOfMarkers5,
      classificationOfMarkers4Details,
      classificationOfMarkers5Details
    });
    updateFormData("currentStep", 7);
    navigate('/step8');
  };

  const handleMainStepBack = () => {
    updateFormData("form7", {
      suspectName,
      markersMainClassification,
      physicalOrMaterialOrPhysiologicalAndBehavioralClassification,
      physicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails,
      materialOrPhysicalAndBehavioralClassification,
      materialOrPhysicalAndBehavioralClassificationDetails,
      behavioralAndPhysiologicalClassification,
      physiologicalClassification,
      behavioralAndPhysiologicalClassificationDetails,
      physiologicalClassificationDetails,
      propertyMainClassification,
      propertyIdentificationMarksClassification,
      propertyTypeClassification,
      propertyIdentificationMarksClassificationDetails,
      propertyTypeClassificationDetails,
      classificationOfMarkers4,
      classificationOfMarkers5,
      classificationOfMarkers4Details,
      classificationOfMarkers5Details
    });
    updateFormData("currentStep", 5);
    navigate('/step6');
  };
  
  const handleSuspectNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectName(event.target.value);
  };

  const handleMarkersMainClassificationSelectChange = (event: SelectChangeEvent) => {
    setMarkersMainClassification(event.target.value);
  };

  const handlePhysicalOrMaterialOrPhysiologicalAndBehavioralClassificationSelectChange = (event: SelectChangeEvent) => {
    setPhysicalOrMaterialOrPhysiologicalAndBehavioralClassification(event.target.value);
  };

  const handleMaterialOrPhysicalAndBehavioralClassificationSelectChange = (event: SelectChangeEvent) => {
    setMaterialOrPhysicalAndBehavioralClassification(event.target.value);
  };

  const handlePhysicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPhysicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails(event.target.value);
  };

  const handleMaterialOrPhysicalAndBehavioralClassificationDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setMaterialOrPhysicalAndBehavioralClassificationDetails(event.target.value);
  };

  const handleBehavioralAndPhysiologicalClassificationSelectChange = (event: SelectChangeEvent) => {
    setBehavioralAndPhysiologicalClassification(event.target.value);
  };

  const handlePhysiologicalClassificationSelectChange = (event: SelectChangeEvent) => {
    setPhysiologicalClassification(event.target.value);
  };

  const handleBehavioralAndPhysiologicalClassificationDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setBehavioralAndPhysiologicalClassificationDetails(event.target.value);
  };

  const handlePhysiologicalClassificationDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPhysiologicalClassificationDetails(event.target.value);
  };

  const handlePropertyMainClassificationSelectChange = (event: SelectChangeEvent) => {
    setPropertyMainClassification(event.target.value);
  };

  const handlePropertyIdentificationMarksClassificationSelectChange = (event: SelectChangeEvent) => {
    setPropertyIdentificationMarksClassification(event.target.value);
  };

  const handlePropertyTypeClassificationSelectChange = (event: SelectChangeEvent) => {
    setPropertyTypeClassification(event.target.value);
  };

  const handlePropertyIdentificationMarksClassificationDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPropertyIdentificationMarksClassificationDetails(event.target.value);
  };

  const handlePropertyTypeClassificationDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPropertyTypeClassificationDetails(event.target.value);
  };

  const handleClassificationOfMarkers4SelectChange = (event: SelectChangeEvent) => {
    setClassificationOfMarkers4(event.target.value);
  };

  const handleClassificationOfMarkers5SelectChange = (event: SelectChangeEvent) => {
    setClassificationOfMarkers5(event.target.value);
  };

  const handleClassificationOfMarkers4DetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setClassificationOfMarkers4Details(event.target.value);
  };

  const handleClassificationOfMarkers5DetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setClassificationOfMarkers5Details(event.target.value);
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,form7:{       
      suspectName,
      markersMainClassification,
      physicalOrMaterialOrPhysiologicalAndBehavioralClassification,
      physicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails,
      materialOrPhysicalAndBehavioralClassification,
      materialOrPhysicalAndBehavioralClassificationDetails,
      behavioralAndPhysiologicalClassification,
      physiologicalClassification,
      behavioralAndPhysiologicalClassificationDetails,
      physiologicalClassificationDetails,
      propertyMainClassification,
      propertyIdentificationMarksClassification,
      propertyTypeClassification,
      propertyIdentificationMarksClassificationDetails,
      propertyTypeClassificationDetails,
      classificationOfMarkers4,
      classificationOfMarkers5,
      classificationOfMarkers4Details,
      classificationOfMarkers5Details 
    }};
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
  };


  return (
    <BaseBox >
      <div className="p-5 flex flex-col grow">
        <ToastContainer/>
        <div className="flex justify-between">
        <span className="text-xl font-bold">7. සැකකරු හෝ දේපළ හඳුනාගැනීමේ ලකුණු</span>
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
                <Box sx={{ width: '35%', alignSelf:'center'}} >
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
                          <span className="text-xl font-bold mt-2">සැකකටයුතු පුද්ගලයින් හඳුනා ගැනීමට අදාළ වන ලක්ෂණ </span>
                          <div className="mx-3" >
                            <br/>
                            <span className="text-xl font-bold mt-2">විශේෂ චර්යාත්මක ලක්ෂණ </span>
                            <div className="mx-3" >
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="mt-6 mb-3">
                                  <span className="font-semibold">සැකකරුගේ නම</span>
                                  <TextInput
                                    value={suspectName}
                                    onChange={handleSuspectNameTextChange}
                                    type="text"
                                    placeholder="නම"
                                  />
                                </div>

                                <div className="mt-6 mb-3">
                                  <span className="font-semibold">සලකුණු ප්‍රධාන වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={markersMainClassification}
                                    onChange={handleMarkersMainClassificationSelectChange}
                                    items={["කායික වර්ගීකරණය"]}
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                  <span className="font-semibold">භෞතික/ද්‍රව්‍යාත්මක/කායික හා චර්යාත්මක වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={physicalOrMaterialOrPhysiologicalAndBehavioralClassification}
                                    onChange={handlePhysicalOrMaterialOrPhysiologicalAndBehavioralClassificationSelectChange}
                                    items={["කායික වර්ගීකරණය"]}
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">ද්‍රව්‍යමය/කායික හා චර්යාත්මක වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={materialOrPhysicalAndBehavioralClassification}
                                    onChange={handleMaterialOrPhysicalAndBehavioralClassificationSelectChange}
                                    items={["කායික වර්ගීකරණය"]}
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                  <span className="font-semibold">භෞතික/ද්‍රව්‍යාත්මක/කායික හා චර්යාත්මක වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={physicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetails}
                                    onChange={handlePhysicalOrMaterialOrPhysiologicalAndBehavioralClassificationDetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">ද්‍රව්‍යමය/කායික හා චර්යාත්මක වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={materialOrPhysicalAndBehavioralClassificationDetails}
                                    onChange={handleMaterialOrPhysicalAndBehavioralClassificationDetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  )}

                    {activeStep === 1 && (
                      <div>
                          <span className="text-xl font-bold mt-2">සැකකටයුතු පුද්ගලයින් හඳුනා ගැනීමට අදාළ වන ලක්ෂණ </span>
                          <div className="mx-3" >
                            <br/>
                            <span className="text-xl font-bold mt-2">විශේෂ චර්යාත්මක ලක්ෂණ </span>
                            <div className="mx-3" >
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="mt-6 mb-3">
                                  <span className="font-semibold">චර්යාත්මක හා කායික වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={behavioralAndPhysiologicalClassification}
                                    onChange={handleBehavioralAndPhysiologicalClassificationSelectChange}
                                    items={["චර්යාත්මක හා කායික වර්ගීකරණය"]}
                                  />
                                </div>

                                <div className="mt-6 mb-3">
                                  <span className="font-semibold">කායික වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={physiologicalClassification}
                                    onChange={handlePhysiologicalClassificationSelectChange}
                                    items={["කායික වර්ගීකරණය"]}
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                  <span className="font-semibold">චර්යාත්මක හා කායික වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={behavioralAndPhysiologicalClassificationDetails}
                                    onChange={handleBehavioralAndPhysiologicalClassificationDetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">කායික වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={physiologicalClassificationDetails}
                                    onChange={handlePhysiologicalClassificationDetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                      <div>
                          <span className="text-xl font-bold mt-2">දේපළ හඳුනා ගැනීමට අදාළ වන ලක්ෂණ සහ සලකුණු</span>
                          <div className="mx-3" >
                            <br/>
                            <span className="text-xl font-bold mt-2">අපරාධය නිසා සිදුවූ දේපල හානි වර්ග</span>
                            <div className="mx-3" >
                                <div className="mt-6 mb-3">
                                  <span className="font-semibold">දේපළ ප්‍රධාන වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={propertyMainClassification}
                                    onChange={handlePropertyMainClassificationSelectChange}
                                    items={["දේපළ ප්‍රධාන වර්ගීකරණය"]}
                                  />
                                </div>

                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                  <span className="font-semibold">දේපළ හඳුනා ගැනීමේ සලකුණු වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={propertyIdentificationMarksClassification}
                                    onChange={handlePropertyIdentificationMarksClassificationSelectChange}
                                    items={["සලකුණු වර්ගීකරණය"]}
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">දේපල වර්ග වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={propertyTypeClassification}
                                    onChange={handlePropertyTypeClassificationSelectChange}
                                    items={["දේපල වර්ග වර්ගීකරණය"]}
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                  <span className="font-semibold">දේපළ හඳුනා ගැනීමේ සලකුණු වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={propertyIdentificationMarksClassificationDetails}
                                    onChange={handlePropertyIdentificationMarksClassificationDetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">දේපල වර්ග වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={propertyTypeClassificationDetails}
                                    onChange={handlePropertyTypeClassificationDetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    )}

                    {activeStep === 3 && (
                      <div>
                          <span className="text-xl font-bold mt-2">දේපළ හඳුනා ගැනීමට අදාළ වන ලක්ෂණ සහ සලකුණු</span>
                          <div className="mx-3" >
                            <br/>
                            <span className="text-xl font-bold mt-2">අපරාධය නිසා සිදුවූ දේපල හානි වර්ග</span>
                            <div className="mx-3" >
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                <span className="font-semibold">සලකුණු අනු 4 වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={classificationOfMarkers4}
                                    onChange={handleClassificationOfMarkers4SelectChange}
                                    items={["සලකුණු අනු 4 වර්ගීකරණය"]}
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">සලකුණු අනු 5 වර්ගීකරණය</span>
                                  <SelectInput
                                    className="w-[330px] block my-3"
                                    value={classificationOfMarkers5}
                                    onChange={handleClassificationOfMarkers5SelectChange}
                                    items={["සලකුණු අනු 5 වර්ගීකරණය"]}
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2 justify-between rounded-md grow ">
                                <div className="my-3">
                                  <span className="font-semibold">සලකුණු අනු 4 වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={classificationOfMarkers4Details}
                                    onChange={handleClassificationOfMarkers4DetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                                <div className="my-3">
                                  <span className="font-semibold">සලකුණු අනු 5 වර්ගීකරණ විස්තර</span>
                                  <TextInput
                                    value={classificationOfMarkers5Details}
                                    onChange={handleClassificationOfMarkers5DetailsTextChange}
                                    type="text"
                                    placeholder="විස්තර"
                                  />
                                </div>
                              </div>
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
                  text= "ඊළඟ පියවරට"
                  onClick={activeStep === 3 ? handleMainStepNext : handleNext}
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
