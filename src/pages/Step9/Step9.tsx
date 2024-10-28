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

export function Step9() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();

  const [criminalName, setCriminalName] = useState("");
  const [victimNameStep9, setVictimNameStep9] = useState("");
  const [connectionTypeToVictim, setConnectionTypeToVictim] = useState("");
  const [subConnectionTypeToVictim, setSubConnectionTypeToVictim] = useState("");

  const handleCriminalNameTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCriminalName(event.target.value);
  };

  const handleVictimNameStep9TextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setVictimNameStep9(event.target.value);
  };

  const handleConnectionTypeToVictimSelectChange = (event: SelectChangeEvent) => {
    setConnectionTypeToVictim(event.target.value);
  };

  const handleSubConnectionTypeToVictimSelectChange = (event: SelectChangeEvent) => {
    setSubConnectionTypeToVictim(event.target.value);
  };

  const handleMainStepNext = () => {
    if (!criminalName || !victimNameStep9 || !connectionTypeToVictim || !subConnectionTypeToVictim) {
      return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
          className: "toast-failed",
          bodyClassName: "toast-failed",
      });
    }
    updateFormData("form9", {
      criminalName,
      victimNameStep9,
      connectionTypeToVictim,
      subConnectionTypeToVictim
    });
    updateFormData("currentStep", 9);
    navigate('/step10');
  };

  const handleMainStepBack = () => {
    updateFormData("form9", {
      criminalName,
      victimNameStep9,
      connectionTypeToVictim,
      subConnectionTypeToVictim
    });
    updateFormData("currentStep", 7);
    navigate('/step8');
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,form9:{ 
      criminalName,
      victimNameStep9,
      connectionTypeToVictim,
      subConnectionTypeToVictim ,
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
      <div className="p-6 flex flex-col grow">
        <ToastContainer/>
        <div className="flex justify-between">
        <span className="text-xl font-bold">9. අපරාධකරු වින්දිතයාට ඇති සබඳතාවය</span>
          <div className="place-items-center ">
            <Button
              variant="outlined"
              text="තාවකලිකව සුරකින්න"
              onClick={handleSave}
            />
          </div>
        </div>
        
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-5 grow flex flex-col justify-between">
            <div>
            <span className="text-xl font-bold mt-2">අපරාධකරු වින්දිතයාට පවතින සම්බන්දතාවයන් මෙතෙක් අනාවරණය වී නොමැත</span>
            <div className="mx-3" >
              <div className="mt-6">
                <span className="font-semibold">අපරාධකරුගෙ නම</span>
                <TextInput
                  value={criminalName}
                  onChange={handleCriminalNameTextChange}
                  type="text"
                  placeholder="අපරාධකරුගෙ නම"
                />
              </div>
              <div className="mt-6">
                <span className="font-semibold">වින්දිතයාගේ නම</span>
                <TextInput
                  value={victimNameStep9}
                  onChange={handleVictimNameStep9TextChange}
                  type="text"
                  placeholder="වින්දිතයාගේ නම"
                />
              </div>
              <div className="mt-6">
                <span className="font-semibold">වින්දිතයාට ඇති සබදතා ප්‍රධාන වර්ගීකරණය</span>
                <SelectInput
                  className="w-[330px] block my-3"
                  value={connectionTypeToVictim}
                  onChange={handleConnectionTypeToVictimSelectChange}
                  items={["ප්‍රධාන වර්ගීකරණය"]}
                />
              </div>
              <div className="my-3">
                <span className="font-semibold">වින්දිතයාට ඇති සබදතා අනු වර්ගීකරණය</span>
                <SelectInput
                  className="w-[330px] block my-3"
                  value={subConnectionTypeToVictim}
                  onChange={handleSubConnectionTypeToVictimSelectChange}
                  items={["සබදතා අනු වර්ගීකරණය"]}
                />
              </div>
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
                  onClick={handleReset}
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
          {/* <Divider className="h-full" orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div> */}
        </div>
      </div>
    </BaseBox>
  );
}
