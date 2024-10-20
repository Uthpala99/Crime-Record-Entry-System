import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, SelectChangeEvent } from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export function Step4() {
  const navigate = useNavigate();
  const [typeOfCrimeScene, setTypeOfCrimeScene] = useState("ස්ථාන වරගීකරණය");
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

  const handleMainStepBack = () => {
    navigate('/step3');
  };

  const handleMainStepNext = () => {
    navigate('/step5');
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <span className="text-xl font-bold">4. අපරාධ ස්ථානයේ ස්වරූපය</span>
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
                <div className="mt-6 mb-3">
                  <span className="font-semibold">අපරාධ ස්ථාන වරගීකරණය</span>
                  <SelectInput
                    value={typeOfCrimeScene}
                    onChange={handleTypeOfCrimeSceneSelectChange}
                    items={["බාල අපරාධය"]}
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
              <div className="flex gap-2 justify-between rounded-md grow">
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
