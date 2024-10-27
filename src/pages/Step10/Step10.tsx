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

export function Step10() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();

  const [contributingFactorToCrime, setContributingFactorToCrime] = useState("");
  const [otherInfoStep10, setOtherInfoStep10] = useState("");

  
  const handleContributingFactorToCrimeSelectChange = (event: SelectChangeEvent) => {
    setContributingFactorToCrime(event.target.value);
  };

  const handleOtherInfoStep10TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setOtherInfoStep10(event.target.value);
  };

  const handleMainStepNext = () => {
    if (!contributingFactorToCrime || !otherInfoStep10) {
      return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
          className: "toast-failed",
          bodyClassName: "toast-failed",
      });
    }
    updateFormData("form10", {
      contributingFactorToCrime,
      otherInfoStep10
    });
    updateFormData("currentStep", 10);
    navigate('/step11');
  };

  const handleMainStepBack = () => {
    updateFormData("form10", {
      contributingFactorToCrime,
      otherInfoStep10
    });
    updateFormData("currentStep", 8);
    navigate('/step9');
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,form10:{ 
      contributingFactorToCrime,
      otherInfoStep10
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

  return (
    <BaseBox>
      <div className="p-4 flex flex-col grow">
        <ToastContainer/>
        <span className="text-xl font-bold">10. අපරාධ සඳහා ඉවහල් වූ හේතු සාධක</span>
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-5 grow flex flex-col justify-between">
            <div>
                <div className="my-6">
                  <span>අපරාධයට ඉවහල්වූ හේතු සාධකය</span>
                  <SelectInput
                    className="w-[330px] block my-3"
                    value={contributingFactorToCrime}
                    onChange={handleContributingFactorToCrimeSelectChange}
                    items={["හේතු සාධකය"]}
                  />
                </div>    
                <div className="my-6">
                  <span>වෙනත් තොරතුරු</span>
                  <TextInput
                    value={otherInfoStep10}
                    onChange={handleOtherInfoStep10TextChange}
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
                  onClick={handleMainStepBack}
                  />
                <Button
                  variant='contained'
                  buttonColor="error"
                  text="යළි සැකසුමට"
                  onClick={handleSave}
                />
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon/>}
                  buttonColor="primary"
                  text="ඊළඟ පියවරට"
                  onClick={handleMainStepNext}
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
