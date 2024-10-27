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

export function Step8() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const stepCount = 8;

  const [activeStep, setActiveStep] = useState(0);
  const [suspectNameStep801, setSuspectNameStep801] = useState("");
  const [suspectFullName, setSuspectFullName] = useState("");
  const [suspectSurName, setSuspectSurName] = useState("");
  const [suspectFathersName, setSuspectFathersName] = useState("");
  const [suspectMothersName, setSuspectMothersName] = useState("");
  const [suspectAliasesOrOtherNames, setSuspectAliasesOrOtherNames] = useState("");
  const [identityCardType, setIdentityCardType] = useState("");
  const [identityCardNumber, setIdentityCardNumber] = useState("");
  const [identityCardIssuedDate, setIdentityCardIssuedDate] = useState("");
  const [identityCardIssuingInstitution, setIdentityCardIssuingInstitution] = useState("");
  const [suspectBirthDate, setSuspectBirthDate] = useState("");
  const [suspectAge, setSuspectAge] = useState("");
  const [suspectBirthPlace, setSuspectBirthPlace] = useState("");
  const [suspectAddressType, setSuspectAddressType] = useState("");
  const [suspectAddress, setSuspectAddress] = useState("");
  const [suspectEthnicity, setSuspectEthnicity] = useState("");
  const [suspectReligion, setSuspectReligion] = useState("");
  const [suspectSexuality, setSuspectSexuality] = useState("");
  const [suspectMarriage, setSuspectMarriage] = useState("");
  const [suspectEducationStatus, setSuspectEducationStatus] = useState("");
  const [suspectEducationStatusDetails, setSuspectEducationStatusDetails] = useState("");
  const [suspectEmploymentAndProfessionalStatus, setSuspectEmploymentAndProfessionalStatus] = useState("");
  const [suspectEmploymentAndProfessionalStatusDetails, setSuspectEmploymentAndProfessionalStatusDetails] = useState("");
  const [suspectHeightft, setSuspectHeightft] = useState("");
  const [suspectHeightinch, setSuspectHeightinch] = useState("");
  const [suspectChestSizeinch, setSuspectChestSizeinch] = useState("");
  const [suspectShoulderWidthinch, setSuspectShoulderWidthinch] = useState("");
  const [suspectShapeOfFace, setSuspectShapeOfFace] = useState("");
  const [otherInfoStep805, setOtherInfoStep805] = useState("");
  const [suspectSpecificCharacteristicsOrPhysicalSymptoms, setSuspectSpecificCharacteristicsOrPhysicalSymptoms] = useState("");
  const [suspectClassificationOfSymptomLocations, setSuspectClassificationOfSymptomLocations] = useState("");
  const [suspectReferenceLocation, setSuspectReferenceLocation] = useState("");
  const [specificInforStep8061, setSpecificInforStep8061] = useState("");
  const [suspectSpecialBehavioralCharacteristicType, setSuspectSpecialBehavioralCharacteristicType] = useState("");
  const [suspectSpecialBehavioralCharacteristic, setSuspectSpecialBehavioralCharacteristic] = useState("");
  const [specificInforStep8062, setSpecificInforStep8062] = useState("");
  const [suspectHangOutPersonName, setSuspectHangOutPersonName] = useState("");
  const [suspectHangOutPersonSexuality, setSuspectHangOutPersonSexuality] = useState("");
  const [suspectHangOutPersonAddress, setSuspectHangOutPersonAddress] = useState("");
  const [specificInforStep8071, setSpecificInforStep8071] = useState("");
  const [suspectExtramaritalAffairPersonName, setSuspectExtramaritalAffairPersonName] = useState("");
  const [suspectExtramaritalAffairPersonSexuality, setSuspectExtramaritalAffairPersonSexuality] = useState("");
  const [suspectExtramaritalAffairPersonAddress, setSuspectExtramaritalAffairPersonAddress] = useState("");
  const [specificInforStep8072, setSpecificInforStep8072] = useState("");
  const [suspectPhotoReferenceNum, setSuspectPhotoReferenceNum] = useState("");
  const [suspectPhotoCDReferenceNum, setSuspectPhotoCDReferenceNum] = useState("");
  const [suspectFingerprintReferenceNum, setSuspectFingerprintReferenceNum] = useState("");
  const [suspectFingerprintCDReferenceNum, setSuspectFingerprintCDReferenceNum] = useState("");
  const [suspectCriminalRegistryNum, setSuspectCriminalRegistryNum] = useState("");
  const [suspectCriminalRegistryCDReferenceNum, setSuspectCriminalRegistryCDReferenceNum] = useState("");
  const [suspectIslandRegisteredCriminalNum, setSuspectIslandRegisteredCriminalNum] = useState("");


  const handleSuspectNameStep801TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectNameStep801(event.target.value);
  };

  const handleSuspectFullNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectFullName(event.target.value);
  };

  const handleSuspectSurNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectSurName(event.target.value);
  };

  const handleSuspectFathersNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectFathersName(event.target.value);
  };

  const handleSuspectMothersNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectMothersName(event.target.value);
  };
  
  const handleSuspectAliasesOrOtherNamesTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectAliasesOrOtherNames(event.target.value);
  };

  const handleIdentityCardTypeSelectChange = (event: SelectChangeEvent) => {
    setIdentityCardType(event.target.value);
  };

  const handleIdentityCardNumberTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setIdentityCardNumber(event.target.value);
  };

  const handleIdentityCardIssuedDateTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setIdentityCardIssuedDate(event.target.value);
  };

  const handleIdentityCardIssuingInstitutionTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setIdentityCardIssuingInstitution(event.target.value);
  };

  const handleSuspectBirthDateTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectBirthDate(event.target.value);
  };

  const handleSuspectAgeTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectAge(event.target.value);
  };

  const handleSuspectBirthPlaceTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectBirthPlace(event.target.value);
  };

  const handleSuspectAddressTypeSelectChange = (event: SelectChangeEvent) => {
    setSuspectAddressType(event.target.value);
  };

  const handleSuspectAddressTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectAddress(event.target.value);
  };

  const handleSuspectEthnicitySelectChange = (event: SelectChangeEvent) => {
    setSuspectEthnicity(event.target.value);
  };

  const handleSuspectReligionSelectChange = (event: SelectChangeEvent) => {
    setSuspectReligion(event.target.value);
  };

  const handleSuspectSexualitySelectChange = (event: SelectChangeEvent) => {
    setSuspectSexuality(event.target.value);
  };

  const handleSuspectMarriageSelectChange = (event: SelectChangeEvent) => {
    setSuspectMarriage(event.target.value);
  };

  const handleSuspectEducationStatusSelectChange = (event: SelectChangeEvent) => {
    setSuspectEducationStatus(event.target.value);
  };

  const handleSuspectEducationStatusDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectEducationStatusDetails(event.target.value);
  };

  const handleSuspectEmploymentAndProfessionalStatusSelectChange = (event: SelectChangeEvent) => {
    setSuspectEmploymentAndProfessionalStatus(event.target.value);
  };

  const handleSuspectEmploymentAndProfessionalStatusDetailsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectEmploymentAndProfessionalStatusDetails(event.target.value);
  };

  const handleSuspectHeightftSelectChange = (event: SelectChangeEvent) => {
    setSuspectHeightft(event.target.value);
  };

  const handleSuspectHeightinchSelectChange = (event: SelectChangeEvent) => {
    setSuspectHeightinch(event.target.value);
  };

  const handleSuspectChestSizeinchSelectChange = (event: SelectChangeEvent) => {
    setSuspectChestSizeinch(event.target.value);
  };

  const handleSuspectShoulderWidthinchSelectChange = (event: SelectChangeEvent) => {
    setSuspectShoulderWidthinch(event.target.value);
  };

  const handleSuspectShapeOfFaceTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectShapeOfFace(event.target.value);
  };

  const handleOtherInfoStep805TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep805(event.target.value);
  };

  const handleSuspectSpecificCharacteristicsOrPhysicalSymptomsTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectSpecificCharacteristicsOrPhysicalSymptoms(event.target.value);
  };  

  const handleSuspectClassificationOfSymptomLocationsSelectChange = (event: SelectChangeEvent) => {
    setSuspectClassificationOfSymptomLocations(event.target.value);
  };

  const handleSuspectReferenceLocationTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectReferenceLocation(event.target.value);
  }; 

  const handleSpecificInforStep8061TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSpecificInforStep8061(event.target.value);
  }; 

  const handleSuspectSpecialBehavioralCharacteristicTypeTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectSpecialBehavioralCharacteristicType(event.target.value);
  }; 

  const handleSuspectSpecialBehavioralCharacteristicTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectSpecialBehavioralCharacteristic(event.target.value);
  }; 

  const handleSpecificInforStep8062TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSpecificInforStep8062(event.target.value);
  }; 

  const handleSuspectHangOutPersonNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectHangOutPersonName(event.target.value);
  }; 
  
  const handleSuspectHangOutPersonSexualitySelectChange = (event: SelectChangeEvent) => {
    setSuspectHangOutPersonSexuality(event.target.value);
  };

  const handleSuspectHangOutPersonAddressTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectHangOutPersonAddress(event.target.value);
  }; 

  const handleSpecificInforStep8071TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSpecificInforStep8071(event.target.value);
  }; 

  const handleSuspectExtramaritalAffairPersonNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectExtramaritalAffairPersonName(event.target.value);
  }; 
  
  const handleSuspectExtramaritalAffairPersonSexualitySelectChange = (event: SelectChangeEvent) => {
    setSuspectExtramaritalAffairPersonSexuality(event.target.value);
  };

  const handleSuspectExtramaritalAffairPersonAddressTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectExtramaritalAffairPersonAddress(event.target.value);
  }; 

  const handleSpecificInforStep8072TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSpecificInforStep8072(event.target.value);
  }; 

  const handleSuspectPhotoReferenceNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectPhotoReferenceNum(event.target.value);
  };

  const handleSuspectPhotoCDReferenceNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectPhotoCDReferenceNum(event.target.value);
  };
  
  const handleSuspectFingerprintReferenceNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectFingerprintReferenceNum(event.target.value);
  };

  const handleSuspectFingerprintCDReferenceNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectFingerprintCDReferenceNum(event.target.value);
  };

  const handleSuspectCriminalRegistryNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectCriminalRegistryNum(event.target.value);
  };

  const handleSuspectCriminalRegistryCDReferenceNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectCriminalRegistryCDReferenceNum(event.target.value);
  };

  const handleSuspectIslandRegisteredCriminalNumTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setSuspectIslandRegisteredCriminalNum(event.target.value);
  };

  const handleNext = () => {
    if (activeStep === 0 ){
      if (!suspectNameStep801 || !suspectFullName || !suspectSurName || 
        !suspectFathersName || !suspectMothersName || !suspectAliasesOrOtherNames) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
    }
    }else if (activeStep === 1 ){
      if (!identityCardType || !identityCardNumber || !identityCardIssuedDate || 
        !identityCardIssuingInstitution || !suspectBirthDate || 
        !suspectAge || !suspectBirthPlace) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }else if (activeStep === 2 ){
      if (!suspectAddressType || !suspectAddress || !suspectEthnicity || 
        !suspectReligion || !suspectSexuality || !suspectMarriage) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }    
    }else if (activeStep === 3 ){
      if (!suspectEducationStatus || !suspectEducationStatusDetails || 
        !suspectEmploymentAndProfessionalStatus || !suspectEmploymentAndProfessionalStatusDetails) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }else if (activeStep === 4 ){
      if (!suspectHeightft || !suspectHeightinch || !suspectChestSizeinch || 
        !suspectShoulderWidthinch || !suspectShapeOfFace || !otherInfoStep805) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }else if (activeStep === 5 ){
      if (!suspectSpecificCharacteristicsOrPhysicalSymptoms || 
        !suspectClassificationOfSymptomLocations ||  !suspectReferenceLocation || 
        !specificInforStep8061 || !suspectSpecialBehavioralCharacteristicType || 
        !suspectSpecialBehavioralCharacteristic || !specificInforStep8062) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
    }
    }else if (activeStep === 6 ){
      if (!suspectHangOutPersonName || !suspectHangOutPersonSexuality || 
        !suspectHangOutPersonAddress || !specificInforStep8071 || 
        !suspectExtramaritalAffairPersonName || !suspectExtramaritalAffairPersonSexuality || 
        !suspectExtramaritalAffairPersonAddress || !specificInforStep8072) {
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
    if (activeStep === 7 ){
      if (!suspectPhotoReferenceNum || !suspectPhotoCDReferenceNum || !suspectFingerprintReferenceNum ||
        !suspectFingerprintCDReferenceNum || !suspectCriminalRegistryNum || 
        !suspectCriminalRegistryCDReferenceNum || !suspectIslandRegisteredCriminalNum) {
        return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
            className: "toast-failed",
            bodyClassName: "toast-failed",
        });
      }
    }
    updateFormData("form8", {
      suspectNameStep801,
      suspectFullName,
      suspectSurName,
      suspectFathersName,
      suspectMothersName,
      suspectAliasesOrOtherNames,
      identityCardType,
      identityCardNumber,
      identityCardIssuedDate,
      identityCardIssuingInstitution,
      suspectBirthDate,
      suspectAge,
      suspectBirthPlace,
      suspectAddressType,
      suspectAddress,
      suspectEthnicity,
      suspectReligion,
      suspectSexuality,
      suspectMarriage,
      suspectEducationStatus,
      suspectEducationStatusDetails,
      suspectEmploymentAndProfessionalStatus,
      suspectEmploymentAndProfessionalStatusDetails,
      suspectHeightft,
      suspectHeightinch,
      suspectChestSizeinch,
      suspectShoulderWidthinch,
      suspectShapeOfFace,
      otherInfoStep805,
      suspectSpecificCharacteristicsOrPhysicalSymptoms,
      suspectClassificationOfSymptomLocations,
      suspectReferenceLocation,
      specificInforStep8061,
      suspectSpecialBehavioralCharacteristicType,
      suspectSpecialBehavioralCharacteristic,
      specificInforStep8062,
      suspectHangOutPersonName,
      suspectHangOutPersonSexuality,
      suspectHangOutPersonAddress,
      specificInforStep8071,
      suspectExtramaritalAffairPersonName,
      suspectExtramaritalAffairPersonSexuality,
      suspectExtramaritalAffairPersonAddress,
      specificInforStep8072,
      suspectPhotoReferenceNum,
      suspectPhotoCDReferenceNum,
      suspectFingerprintReferenceNum,
      suspectFingerprintCDReferenceNum,
      suspectCriminalRegistryNum,
      suspectCriminalRegistryCDReferenceNum,
      suspectIslandRegisteredCriminalNum
    });
    updateFormData("currentStep", 8);
    navigate('/step9');
  };

  const handleMainStepBack = () => {
    updateFormData("form8", {
      suspectNameStep801,
      suspectFullName,
      suspectSurName,
      suspectFathersName,
      suspectMothersName,
      suspectAliasesOrOtherNames,
      identityCardType,
      identityCardNumber,
      identityCardIssuedDate,
      identityCardIssuingInstitution,
      suspectBirthDate,
      suspectAge,
      suspectBirthPlace,
      suspectAddressType,
      suspectAddress,
      suspectEthnicity,
      suspectReligion,
      suspectSexuality,
      suspectMarriage,
      suspectEducationStatus,
      suspectEducationStatusDetails,
      suspectEmploymentAndProfessionalStatus,
      suspectEmploymentAndProfessionalStatusDetails,
      suspectHeightft,
      suspectHeightinch,
      suspectChestSizeinch,
      suspectShoulderWidthinch,
      suspectShapeOfFace,
      otherInfoStep805,
      suspectSpecificCharacteristicsOrPhysicalSymptoms,
      suspectClassificationOfSymptomLocations,
      suspectReferenceLocation,
      specificInforStep8061,
      suspectSpecialBehavioralCharacteristicType,
      suspectSpecialBehavioralCharacteristic,
      specificInforStep8062,
      suspectHangOutPersonName,
      suspectHangOutPersonSexuality,
      suspectHangOutPersonAddress,
      specificInforStep8071,
      suspectExtramaritalAffairPersonName,
      suspectExtramaritalAffairPersonSexuality,
      suspectExtramaritalAffairPersonAddress,
      specificInforStep8072,
      suspectPhotoReferenceNum,
      suspectPhotoCDReferenceNum,
      suspectFingerprintReferenceNum,
      suspectFingerprintCDReferenceNum,
      suspectCriminalRegistryNum,
      suspectCriminalRegistryCDReferenceNum,
      suspectIslandRegisteredCriminalNum
    });
    updateFormData("currentStep", 6);
    navigate('/step7');
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,form8:{       
      suspectNameStep801,
      suspectFullName,
      suspectSurName,
      suspectFathersName,
      suspectMothersName,
      suspectAliasesOrOtherNames,
      identityCardType,
      identityCardNumber,
      identityCardIssuedDate,
      identityCardIssuingInstitution,
      suspectBirthDate,
      suspectAge,
      suspectBirthPlace,
      suspectAddressType,
      suspectAddress,
      suspectEthnicity,
      suspectReligion,
      suspectSexuality,
      suspectMarriage,
      suspectEducationStatus,
      suspectEducationStatusDetails,
      suspectEmploymentAndProfessionalStatus,
      suspectEmploymentAndProfessionalStatusDetails,
      suspectHeightft,
      suspectHeightinch,
      suspectChestSizeinch,
      suspectShoulderWidthinch,
      suspectShapeOfFace,
      otherInfoStep805,
      suspectSpecificCharacteristicsOrPhysicalSymptoms,
      suspectClassificationOfSymptomLocations,
      suspectReferenceLocation,
      specificInforStep8061,
      suspectSpecialBehavioralCharacteristicType,
      suspectSpecialBehavioralCharacteristic,
      specificInforStep8062,
      suspectHangOutPersonName,
      suspectHangOutPersonSexuality,
      suspectHangOutPersonAddress,
      specificInforStep8071,
      suspectExtramaritalAffairPersonName,
      suspectExtramaritalAffairPersonSexuality,
      suspectExtramaritalAffairPersonAddress,
      specificInforStep8072,
      suspectPhotoReferenceNum,
      suspectPhotoCDReferenceNum,
      suspectFingerprintReferenceNum,
      suspectFingerprintCDReferenceNum,
      suspectCriminalRegistryNum,
      suspectCriminalRegistryCDReferenceNum,
      suspectIslandRegisteredCriminalNum 
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
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <ToastContainer/>
        <div className="flex justify-between">
        <span className="text-xl font-bold">8. සැකකරුවන් සහ වින්දිතයන් සහ පැමිණිලිකරුවන්ගේ තොරතුරු</span>
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
                <Box sx={{ width: '80%', alignSelf:'center'}} >
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
                        <div>
                          <span className="text-xl font-bold mt-2">සැකකරුවන්ට අදාල තොරතුරු</span>
                          <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">සැකකරුගේ නම</span>
                                <TextInput
                                  value={suspectNameStep801}
                                  onChange={handleSuspectNameStep801TextChange}
                                  type="text"
                                  placeholder="නම"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">සම්පූර්ණ නම</span>
                                <TextInput
                                  value={suspectFullName}
                                  onChange={handleSuspectFullNameTextChange}
                                  type="text"
                                  placeholder="සම්පූර්ණ නම"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br/>
                        <div>
                          <span className="text-xl font-bold mt-2">සැකකරුගේ නම සහ අදාල වන පුද්ගල නාම</span>
                          <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">පෙළපත් නාමය</span>
                                <TextInput
                                  value={suspectSurName}
                                  onChange={handleSuspectSurNameTextChange}
                                  type="text"
                                  placeholder="පෙළපත් නාමය"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">පියාගේ නාමය</span>
                                <TextInput
                                  value={suspectFathersName}
                                  onChange={handleSuspectFathersNameTextChange}
                                  type="text"
                                  placeholder="පියාගේ නාමය"
                                />
                              </div>
                            </div>

                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">මවගේ නම</span>
                                <TextInput
                                  value={suspectMothersName}
                                  onChange={handleSuspectMothersNameTextChange}
                                  type="text"
                                  placeholder="මවගේ නම"
                                />
                              </div>

                              <div className="my-3">
                                <span className="font-semibold">අන්වර්ථ නම් හෝ වෙනත් නම්</span>
                                <TextInput
                                  value={suspectAliasesOrOtherNames}
                                  onChange={handleSuspectAliasesOrOtherNamesTextChange}
                                  type="text"
                                  placeholder="අන්වර්ථ නම් හෝ වෙනත් නම්"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">හැදුනුම්පත් වර්ග සහ නිකුත් කළ ආයතන සහ දින</span>
                        <div className="mx-3" >
                            <div className="mt-6">
                              <span className="font-semibold">හැදුනුම්පත් වර්ගය</span>
                              <SelectInput
                                    className="w-[330px] block my-3"
                                    value={identityCardType}
                                    onChange={handleIdentityCardTypeSelectChange}
                                    items={["හැදුනුම්පත් වර්ගය"]}
                                  />
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">අංකය සටහන් කරන්න</span>
                                <TextInput
                                  className="w-[250px]"
                                  value={identityCardNumber}
                                  onChange={handleIdentityCardNumberTextChange}
                                  type="text"
                                  placeholder="අංකය"
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">නිකුත් කළ දිනය</span>
                                <TextInput
                                  className="w-[250px]"
                                  value={identityCardIssuedDate}
                                  onChange={handleIdentityCardIssuedDateTextChange}
                                  type="date"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">නිකුත් කළ ආයතනය</span>
                                <TextInput
                                  className="w-[250px]"
                                  value={identityCardIssuingInstitution}
                                  onChange={handleIdentityCardIssuingInstitutionTextChange}
                                  type="text"
                                  placeholder="නිකුත් කළ ආයතනය"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">උපන්දිනය සහ වයස සහ උපන් ස්ථානය</span>
                        <div className="mx-3" >
                          <div className="flex gap-2 justify-between rounded-md grow ">
                            <div className="mt-6 mb-3">
                              <span className="font-semibold">උපන්දිනය</span>
                              <TextInput
                                className="w-[250px]"
                                value={suspectBirthDate}
                                onChange={handleSuspectBirthDateTextChange}
                                type="date"
                              />
                            </div>
                            <div className="mt-6 mb-3">
                              <span className="font-semibold">වයස</span>
                              <TextInput
                                className="w-[250px]"
                                value={suspectAge}
                                onChange={handleSuspectAgeTextChange}
                                type="number"
                              />
                            </div>
                            <div className="mt-6 mb-3">
                              <span className="font-semibold">උපන් ස්ථානය</span>
                              <TextInput
                                className="w-[250px]"
                                value={suspectBirthPlace}
                                onChange={handleSuspectBirthPlaceTextChange}
                                type="text"
                                placeholder="උපන් ස්ථානය"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}    

                    {activeStep === 2 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">පුද්ගලයාගේ ලිපිනයන්</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">ලිපින වර්ගය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectAddressType}
                                    onChange={handleSuspectAddressTypeSelectChange}
                                    items={["තාවකාලික ලිපිනය" , "ස්ථිර ලිපිනය"]}
                                  />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">අදාල ලිපිනය ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={suspectAddress}
                                  onChange={handleSuspectAddressTextChange}
                                  type="text"
                                  placeholder="අදාල ලිපිනය"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">ජන වර්ගය සහ ආගම</span>
                        <div className="mx-3" >
                          <div className="flex gap-2 justify-between rounded-md grow ">
                            <div className="mt-6">
                              <span className="font-semibold">ජන වර්ගය</span>
                              <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectEthnicity}
                                    onChange={handleSuspectEthnicitySelectChange}
                                    items={["සිංහල" , "දෙමළ" , "මුස්ලිම්"]}
                                  />
                            </div>
                            
                            <div className="mt-6">
                              <span className="font-semibold">ආගම</span>
                              <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectReligion}
                                    onChange={handleSuspectReligionSelectChange}
                                    items={["බෞද්ධ" , "හින්දු" , "කතෝලික" , "මුස්ලිම්" ]}
                                  />
                            </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">පුද්ගලයාගේ ලිංගිකත්වය සහ විවාහකත්වය</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">ලිංගිකත්වය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectSexuality}
                                    onChange={handleSuspectSexualitySelectChange}
                                    items={["ස්ත්‍රී" , "පුරුෂ"]}
                                  />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">විවාහකත්වය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectMarriage}
                                    onChange={handleSuspectMarriageSelectChange}
                                    items={["තනිකඩ", "විවාහක", "දික්කසාද වූ"]}
                                  />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}

                    {activeStep === 3 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">පුද්ගලයාගේ අධ්‍යාපන තත්ත්වය</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">අධ්‍යාපන තත්ත්වය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectEducationStatus}
                                    onChange={handleSuspectEducationStatusSelectChange}
                                    items={["අධ්‍යාපන තත්ත්වය"]}
                                  />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">විස්තර ඇතොත් ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={suspectEducationStatusDetails}
                                  onChange={handleSuspectEducationStatusDetailsTextChange}
                                  type="text"
                                  placeholder="විස්තර"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">පුද්ගලයාගේ රැකියාව හා වෘත්තීය තත්ත්වය</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">රැකියාව හා වෘත්තීය තත්ත්වය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectEmploymentAndProfessionalStatus}
                                    onChange={handleSuspectEmploymentAndProfessionalStatusSelectChange}
                                    items={["රැකියාව හා වෘත්තීය තත්ත්වය"]}
                                  />
                              </div>
                              <div className="mt-6">
                              <span className="font-semibold">විස්තර ඇතොත් ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={suspectEmploymentAndProfessionalStatusDetails}
                                  onChange={handleSuspectEmploymentAndProfessionalStatusDetailsTextChange}
                                  type="text"
                                  placeholder="විස්තර"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}

                    {activeStep === 4 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">දේහ ලක්ෂණ - ශරීර ප්‍රමාණ </span>
                        <div className="mx-3" >
                          <br/>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                            <div>
                              <span className="text-xl font-bold">උස ප්‍රමාණය</span>
                              <div className="mx-3" >
                                <div className="flex gap-2 justify-between rounded-md grow ">
                                  <div className="mt-6 me-7">
                                    <span className="font-semibold">අඩි</span>
                                    <SelectInput
                                        className="w-[100px] block my-3"
                                        value={suspectHeightft}
                                        onChange={handleSuspectHeightftSelectChange}
                                        items={["3","4","5","6", "7"]}
                                    />
                                  </div>
                                  <div className="mt-6">
                                    <span className="font-semibold">අඟල්</span>
                                    <SelectInput
                                      className="w-[100px] block my-3"
                                      value={suspectHeightinch}
                                      onChange={handleSuspectHeightinchSelectChange}
                                      items={["1" , "2", "3", "4", "5", "6", "7", "8", "9", "10" , "11"]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <span className="text-xl font-bold">පපුවේ ප්‍රමාණය</span>
                              <div className="mx-3" >
                                  <div className="flex gap-2 justify-between rounded-md grow ">
                                    <div className="mt-6">
                                      <span className="font-semibold">අඟල්</span>
                                      <SelectInput
                                          className="w-[100px] block my-3"
                                          value={suspectChestSizeinch}
                                          onChange={handleSuspectChestSizeinchSelectChange}
                                          items={["28" , "29", "30", "31", "32", "33", "34", "35", "36", "37" , "38"]}
                                        />
                                    </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <span className="text-xl font-bold">උරහිස් පළල</span>
                              <div className="mx-3" >
                                  <div className="flex gap-2 justify-between rounded-md grow ">
                                    <div className="mt-6">
                                      <span className="font-semibold">අඟල්</span>
                                      <SelectInput
                                          className="w-[100px] block my-3"
                                          value={suspectShoulderWidthinch}
                                          onChange={handleSuspectShoulderWidthinchSelectChange}
                                          items={["10", "11","12", "13", "14", "15", "16", "17", "18" ]}
                                        />
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">හිසකෙස් වල ස්වරූපය, මුහුණේ ස්වරූපය හා පැහැය</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">හිසකෙස් වල ස්වරූපය, මුහුණේ ස්වරූපය හා පැහැය</span>
                                <TextInput
                                  value={suspectShapeOfFace}
                                  onChange={handleSuspectShapeOfFaceTextChange}
                                  type="text"
                                  placeholder="ස්වරූපය"
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">වෙනත් තොරතුරු</span>
                                <TextInput
                                  value={otherInfoStep805}
                                  onChange={handleOtherInfoStep805TextChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                  
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}

                    {activeStep === 5 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">විශේෂිත ලක්‍ෂණ හෝ කායික සළකුණු</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">විශේෂිත ලක්‍ෂණ හෝ කායික සළකුණු</span>
                                <TextInput
                                  value={suspectSpecificCharacteristicsOrPhysicalSymptoms}
                                  onChange={handleSuspectSpecificCharacteristicsOrPhysicalSymptomsTextChange}
                                  type="text"
                                  placeholder="විශේෂිත ලක්‍ෂණ හෝ කායික සළකුණු"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">පිහිටි ස්ථාන වර්ගීකරණය</span>
                                
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectClassificationOfSymptomLocations}
                                    onChange={handleSuspectClassificationOfSymptomLocationsSelectChange}
                                    items={["පිහිටි ස්ථාන වර්ගීකරණය"]}
                                  />
                              </div>
                          </div>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">යොමු පිහිටි ස්ථානය</span>
                                <TextInput
                                  value={suspectReferenceLocation}
                                  onChange={handleSuspectReferenceLocationTextChange}
                                  type="text"
                                  placeholder="ස්ථානය"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">විශේෂිත තොරතුරු ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={specificInforStep8061}
                                  onChange={handleSpecificInforStep8061TextChange}
                                  type="text"
                                  placeholder="විශේෂිත තොරතුරු"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">විශේෂ චර්යාත්මක ලක්ෂණ</span>
                        <div className="mx-3" >
                          <div className="flex gap-2 justify-between rounded-md grow ">
                            <div className="mt-6">
                              <span className="font-semibold">විශේෂ චර්යාත්මක ලක්ෂණ වර්ගය</span>
                              <TextInput
                                  value={suspectSpecialBehavioralCharacteristicType}
                                  onChange={handleSuspectSpecialBehavioralCharacteristicTypeTextChange}
                                  type="text"
                                  placeholder="ලක්ෂණ වර්ගය"
                                />
                            </div>
                            
                            <div className="mt-6">
                              <span className="font-semibold">විශේෂ චර්යාත්මක ලක්ෂණය</span>
                              <TextInput
                                  value={suspectSpecialBehavioralCharacteristic}
                                  onChange={handleSuspectSpecialBehavioralCharacteristicTextChange}
                                  type="text"
                                  placeholder="චර්යාත්මක ලක්ෂණය"
                                />
                            </div>
                          </div>
                              <div className="my-3">
                              <span className="font-semibold">විශේෂිත තොරතුරු ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={specificInforStep8062}
                                  onChange={handleSpecificInforStep8062TextChange}
                                  type="text"
                                  placeholder="විශේෂිත තොරතුරු"
                                />
                              </div>
                              
                        </div>
                      </div>
                    </div>
                    )}

                    {activeStep === 6 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">නිතර ඇසුරු කරන පුද්ගලයින්</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">පුද්ගලයාගේ නම</span>
                                <TextInput
                                  value={suspectHangOutPersonName}
                                  onChange={handleSuspectHangOutPersonNameTextChange}
                                  type="text"
                                  placeholder="නම"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                              <span className="font-semibold">ලිංගිකත්වය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectHangOutPersonSexuality}
                                    onChange={handleSuspectHangOutPersonSexualitySelectChange}
                                    items={["ස්ත්‍රී" , "පුරුෂ"]}
                                  />
                              </div>
                          </div>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">ලිපිනය</span>
                                <TextInput
                                  value={suspectHangOutPersonAddress}
                                  onChange={handleSuspectHangOutPersonAddressTextChange}
                                  type="text"
                                  placeholder="ලිපිනය"
                                />
                              </div>
                              <div className="my-3">
                              <span className="font-semibold">විශේෂිත තොරතුරු ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={specificInforStep8071}
                                  onChange={handleSpecificInforStep8071TextChange}
                                  type="text"
                                  placeholder="විශේෂිත තොරතුරු"
                                />
                              </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <span className="text-xl font-bold mt-2">පුද්ගලයාගේ අනියම් සබඳතා</span>
                        <div className="mx-3" >
                          <div className="flex gap-2 justify-between rounded-md grow ">
                            <div className="mt-6">
                              <span className="font-semibold">පුද්ගලයාගේ නම</span>
                              <TextInput
                                  value={suspectExtramaritalAffairPersonName}
                                  onChange={handleSuspectExtramaritalAffairPersonNameTextChange}
                                  type="text"
                                  placeholder="නම"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                              <span className="font-semibold">ලිංගිකත්වය</span>
                                <SelectInput
                                    className="w-[330px] block my-3"
                                    value={suspectExtramaritalAffairPersonSexuality}
                                    onChange={handleSuspectExtramaritalAffairPersonSexualitySelectChange}
                                    items={["ස්ත්‍රී" , "පුරුෂ"]}
                                  />
                              </div>
                          </div>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">ලිපිනය</span>
                                <TextInput
                                  value={suspectExtramaritalAffairPersonAddress}
                                  onChange={handleSuspectExtramaritalAffairPersonAddressTextChange}
                                  type="text"
                                  placeholder="ලිපිනය"
                                />
                            </div>
                            
                            <div className="mt-6">
                              <span className="font-semibold">විශේෂිත තොරතුරු ඇතුළත් කරන්න</span>
                                <TextInput
                                  value={specificInforStep8072}
                                  onChange={handleSpecificInforStep8072TextChange}
                                  type="text"
                                  placeholder="විශේෂිත තොරතුරු"
                                />
                            </div>
                          </div>
                              
                        </div>
                      </div>
                    </div>
                    )}

                    {activeStep === 7 && (
                      <div>
                      <div>
                        <span className="text-xl font-bold mt-2">විශේෂිත තොරතුරු සහ යොමු අංක</span>
                        <div className="mx-3" >
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">සැකකරුගේ ඡායාරූප යොමු අංකය</span>
                                <TextInput
                                  value={suspectPhotoReferenceNum}
                                  onChange={handleSuspectPhotoReferenceNumTextChange}
                                  type="text"
                                  placeholder="යොමු අංකය"
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">සැකකරුගේ ඡායාරූප සංයුත්ත තැටියේ යොමු අංකය</span>
                                <TextInput
                                  value={suspectPhotoCDReferenceNum}
                                  onChange={handleSuspectPhotoCDReferenceNumTextChange}
                                  type="text"
                                  placeholder="යොමු අංකය"
                                />
                              </div>
                          </div>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">ඇඟිලි සලකුණු යොමු අංකය</span>
                                <TextInput
                                  value={suspectFingerprintReferenceNum}
                                  onChange={handleSuspectFingerprintReferenceNumTextChange}
                                  type="text"
                                  placeholder="යොමු අංකය"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">ඇඟිලි සලකුණු සංයුත්ත තැටියේ යොමු අංකය</span>
                                <TextInput
                                  value={suspectFingerprintCDReferenceNum}
                                  onChange={handleSuspectFingerprintCDReferenceNumTextChange}
                                  type="text"
                                  placeholder="යොමු අංකය"
                                />
                              </div>
                          </div>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">අපරාධ ලේඛනාගාර අංකය</span>
                                <TextInput
                                  value={suspectCriminalRegistryNum}
                                  onChange={handleSuspectCriminalRegistryNumTextChange}
                                  type="text"
                                  placeholder="යොමු අංකය"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">අපරාධ ලේඛනාගාර සංයුත්ත තැටියේ යොමු අංකය</span>
                                <TextInput
                                  value={suspectCriminalRegistryCDReferenceNum}
                                  onChange={handleSuspectCriminalRegistryCDReferenceNumTextChange}
                                  type="text"
                                  placeholder="යොමු අංකය"
                                />
                              </div>
                          </div>
                              <div className="my-3">
                                <span className="font-semibold">දිවයිනේ ලියාපදිංචි අපරාධකරු අංකය</span>
                                <TextInput
                                  value={suspectIslandRegisteredCriminalNum}
                                  onChange={handleSuspectIslandRegisteredCriminalNumTextChange}
                                  type="text"
                                  placeholder="අපරාධකරු අංකය"
                                />
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
                  onClick={activeStep === 7 ? handleMainStepNext : handleNext}
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
