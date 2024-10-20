import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, SelectChangeEvent } from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/formHook";

export function Step2() {
  const navigate = useNavigate();
  const { updateFormData } = useFormContext();
  const [GNDivision, setGNDivision] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
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

  const handleCrimeLocationAddrTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCrimeLocationAddr(event.target.value);
  };

  const handleMainStepBack = () => {
    navigate("/step1");
  };

  const handleNext = () => {
    updateFormData("form2", {
      GNDivision,
      latitude,
      longitude,
      crimeLocationAddr,
    });
    updateFormData("currentStep", 2);
    navigate("/step3");
  };
  const handleBack = () => {
    updateFormData("form2", {
      GNDivision,
      latitude,
      longitude,
      crimeLocationAddr,
    });
    updateFormData("currentStep", 0);
    navigate("/step1");
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <span className="text-xl font-bold">
          2. අපරාධ ස්ථානයේ නිලධාරී වසම සහ ලිපිනය
        </span>
        <div className="flex gap-2 justify-between rounded-md grow mt-3">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
              <div className="mt-3">
                <span className="font-semibold">ග්‍රාම නිලධාරී වසම</span>
                <SelectInput
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
              <div className="flex gap-2 justify-between rounded-md grow">
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
          <Divider className="h-full" orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div>
        </div>
      </div>
    </BaseBox>
  );
}
