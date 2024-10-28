import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, SelectChangeEvent } from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/formHook";
import { HTTPService } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Step4() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const [typeOfCrimeScene, setTypeOfCrimeScene] = useState("");
  const [crimeScene, setCrimeScene] = useState("");
  const [otherInfoStep4, setOtherInfoStep4] = useState("");

  
  const handleTypeOfCrimeSceneSelectChange = (event: SelectChangeEvent) => {
    setTypeOfCrimeScene(event.target.value);
  };

  const handleCrimeSceneTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeScene(event.target.value);
  };

  const handleOtherInfoStep4TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep4(event.target.value);
  };

  const handleNext = () => {
    if (!typeOfCrimeScene || !crimeScene || !otherInfoStep4) {
      return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
          className: "toast-failed",
          bodyClassName: "toast-failed",
      });
    }  
    updateFormData("form4", {
      typeOfCrimeScene,
      crimeScene,
      otherInfoStep4
    });
    updateFormData("currentStep", 4);
    navigate("/step5");
  };
  const handleBack = () => {
    updateFormData("form4", {
      typeOfCrimeScene,
      crimeScene,
      otherInfoStep4
    });
    updateFormData("currentStep", 2);
    navigate("/step3");
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,form4:{ 
      typeOfCrimeScene,
      crimeScene,
      otherInfoStep4 
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
    setTypeOfCrimeScene("");
    setCrimeScene("");
    setOtherInfoStep4("");
  };
  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
      <ToastContainer />
      <div className="flex justify-between">
        <span className="text-xl font-bold">4. අපරාධ ස්ථානයේ ස්වරූපය</span>
          <div className="place-items-center ">
            <Button
              variant="outlined"
              text="තාවකලිකව සුරකින්න"
              onClick={handleSave}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
                <div className="mt-6 mb-3">
                  <span className="font-semibold">අපරාධ ස්ථාන වරගීකරණය</span>
                  <SelectInput
                    className="w-[330px] block my-3"
                    value={typeOfCrimeScene}
                    onChange={handleTypeOfCrimeSceneSelectChange}
                    items={["ස්ථාන වරගීකරණය"]}
                  />
                </div>
                <div className="my-3">
                  <span className="font-semibold">අපරාධ ස්ථානය</span>
                  <TextInput
                    value={crimeScene}
                    onChange={handleCrimeSceneTextChange}
                    placeholder="අපරාධ ස්ථානය"
                  />
                </div>
              
                <div className="my-6">
                  <span className="font-semibold">වෙනත් තොරතුරු</span>
                  <TextInput
                    value={otherInfoStep4}
                    onChange={handleOtherInfoStep4TextChange}
                    placeholder="වෙනත් තොරතුරු"
                    fullWidth={true}
                  />
                </div>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-2 place-content-evenly rounded-md grow">
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  buttonColor="primary"
                  text="පෙර පියවරට"
                  onClick={handleBack}
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
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
          {/* <Divider className="h-full" orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div> */}
        </div>
      </div>
    </BaseBox>
  );
}
