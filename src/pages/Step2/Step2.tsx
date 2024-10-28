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

export function Step2() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const [GNDivision, setGNDivision] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [division, setDivision] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [crimeLocationAddr, setCrimeLocationAddr] = useState("");

  const handleGNDivisionSelectChange = (event: SelectChangeEvent) => {
    setGNDivision(event.target.value);
  };

  const handleLatitudeTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLongitude(event.target.value);
  };

  const handleDivisionSelectChange = (event: SelectChangeEvent) => {
    setDivision(event.target.value);
  };

  const handlePoliceStationSelectChange = (event: SelectChangeEvent) => {
    setPoliceStation(event.target.value);
  };


  const handleCrimeLocationAddrTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCrimeLocationAddr(event.target.value);
  };

  const handleNext = () => {
    if (!GNDivision || !latitude || !longitude || !division || !policeStation || !crimeLocationAddr) {
      return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
    updateFormData("form2", {
      GNDivision,
      latitude,
      longitude,
      division,
      policeStation,
      crimeLocationAddr,
    });
    console.log("🚀 ~ handleNext ~ updateFormData:", updateFormData);
    updateFormData("currentStep", 2);
    navigate("/step3");
  };
  
  const handleBack = () => {
    updateFormData("form2", {
      GNDivision,
      latitude,
      longitude,
      division,
      policeStation,
      crimeLocationAddr,
    });
    updateFormData("currentStep", 0);
    navigate("/step1");
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3000" });
    const newFormData = {...formData,form2: {  
      GNDivision,
      latitude,
      longitude,
      division,
      policeStation,
      crimeLocationAddr
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
    }).catch((error)=>{
      console.error(error);
    });
  };

  const handleReset = () => {
    setGNDivision("");
    setLatitude("");
    setLongitude("");
    setDivision("");
    setPoliceStation("");
    setCrimeLocationAddr("");
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <ToastContainer />
        <div className="flex justify-between">
          <span className="text-xl font-bold">
            2. අපරාධ ස්ථානයේ නිලධාරී වසම සහ ලිපිනය
          </span>
          <div className="place-items-center ">
            <Button
              variant="outlined"
              text="තාවකලිකව සුරකින්න"
              onClick={handleSave}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-between rounded-md grow mt-3">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
              <div className="mt-3">
                <span className="font-semibold">ග්‍රාම නිලධාරී වසම</span>
                <SelectInput
                  className="w-[330px] block my-3"
                  value={GNDivision}
                  onChange={handleGNDivisionSelectChange}
                  items={[
                    "කම්මල්තුර",
                    "උතුරු පල්ලන්සේන",
                    "කොච්චිකඩේ",
                    "මට්ටක්කුලිය",
                    "කොටහේන නැගෙනහිර",
                    "මාලිගාවත්ත නැගෙනහිර",
                    "ඛෙත්තාරාම",
                    "අළුත්කඩේ නැගෙනහිර",
                    "නිව් බසාර්",
                    "කොම්පඤ්ඤ වීදිය",
                    "කෙසෙල්වත්ත",
                  ]}
                />
              </div>
              <div className="flex gap-2 justify-between rounded-md grow">
                <div className="my-3">
                  <span className="font-semibold">අක්‍ෂාංශ</span>
                  <TextInput
                    placeholder="අක්‍ෂාංශ"
                    value={latitude}
                    onChange={handleLatitudeTextChange}
                  />
                </div>
                <div className="my-3">
                  <span className="font-semibold">දේශාංශ</span>
                  <TextInput
                    value={longitude}
                    onChange={handleLongitudeTextChange}
                    placeholder="දේශාංශ"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-between rounded-md grow">
                <div className="my-3">
                  <span className="font-semibold">පොලිස් වසම</span>
                  <SelectInput
                    className="w-[330px] block my-3"
                    value={division}
                    onChange={handleDivisionSelectChange}
                    items={[
                      "උතුරු කොළඹ",
                      "මැද කොළඹ",
                      "කොළඹ දකුණ",
                      "නුගේගොඩ",
                      "කැලණිය",
                      "ගම්පහ",
                      "මීගමුව",
                      "ගල්කිස්ස",
                      "පානදුර",
                      "කළුතර",
                      "මහනුවර",
                      "ගම්පොල",
                      "තේල්දෙණිය",
                      "මාතලේ",
                      "නුවරඑළිය",
                      "හැටන්",
                      "මාතර",
                      "ගාල්ල",
                      "ඇල්පිටිය",
                      "තංගල්ල",
                      "කන්කසන්තුරේ",
                      "යාපනය",
                      "වව්නියාව",
                      "කිලිනොච්චි",
                      "මන්නාරම",
                      "මුලතිව්",
                      "මඩකලපුව",
                      "අම්පාර",
                      "ත්‍රිකුණාමලය",
                      "කන්තලේ",
                      "කුරුනෑගල",
                      "කුලියපිටිය",
                      "නිකවැරටිය",
                      "පුත්තලම",
                      "හලාවත",
                      "අනුරාධපුර",
                      "පොලොන්නරුව",
                      "බදුල්ල",
                      "බන්ඩාරවෙල",
                      "මොනරාගල",
                      "රත්නපුර",
                      "ඇඹිලිපිටිය",
                      "කැගල්ල",
                      "සීතාවකපුර",
                    ]}
                  />
                </div>
                <div className="my-3">
                  <span className="font-semibold">පොලිස් ස්ථානය</span>
                  <SelectInput
                    className="w-[330px] block my-3"
                    value={policeStation}
                    onChange={handlePoliceStationSelectChange}
                    items={[
                      "ගම්පහ",
                      "මිනුවන්ගොඩ",
                      "කිරිඳිවැල",
                      "පූගොඩ",
                      "දොම්පේ",
                      "නිට්ටඹුව",
                      "ගනේමුල්ල",
                      "වීරගුල",
                      "වැලිවේරිය",
                      "මල්වතුහිරිපිටිය",
                      "වේයන්ගොඩ",
                      "මීරිගම",
                      "පල්ලෙවෙල",
                      "යක්කල",
                    ]}
                  />
                </div>
              </div>

              <div className="my-3">
                <span className="font-semibold">අපරාධ ස්ථානයේ ලිපිනය</span>
                <TextInput
                  value={crimeLocationAddr}
                  onChange={handleCrimeLocationAddrTextChange}
                  placeholder="ලිපිනය"
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
                  variant="contained"
                  buttonColor="error"
                  text="යළි සැකසුමට"
                  onClick={handleReset}
                />
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
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
