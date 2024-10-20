import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Button, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export function Step3() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [crimeDate, setCrimeDate] = useState("");
  const [crimeTime, setCrimeTime] = useState("");
  const [crimeStartedDate, setCrimeStartedDate] = useState("");
  const [crimeStartedTime, setCrimeStartedTime] = useState("");  
  const [crimeEndedDate, setCrimeEndedDate] = useState("");
  const [crimeEndedTime, setCrimeEndedTime] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleCrimeDateTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeDate(event.target.value);
  };

  const handleCrimeTimeTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeTime(event.target.value);
  };

  const handleCrimeStartedDateTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeStartedDate(event.target.value);
  };

  const handleCrimeStartedTimeTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeStartedTime(event.target.value);
  };

  const handleCrimeEndedDateTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeEndedDate(event.target.value);
  };

  const handleCrimeEndedTimeTextChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setCrimeEndedTime(event.target.value);
  };

  const handleMainStepBack = () => {
    navigate('/step2');
  };

  const handleMainStepNext = () => {
    navigate('/step4');
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <span className="text-xl font-bold">3. බාල අපරාධය සහ බාල අපරාධ {"වර්"}{"ගය"} </span>
        <div className="flex gap-2 justify-between rounded-md grow mt-5">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
              <RadioGroup
                value={selectedOption}
                onChange={handleOptionChange}
                row
              >
                <div className="flex gap-5 justify-between rounded-md grow mr-20 ms-20">
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="අපරාධය සිදුවූ දිනය හා වේලාව"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="කාල පරාසයක් සඳහන් ඇති විට"
                  />
                </div>
              </RadioGroup>

              {selectedOption === "1" && (
                <div>
                  <div className="mt-6 mb-3">
                    <span className="font-semibold">අපරාධය සිදුවූ දිනය</span>
                    <TextInput
                      type="date"
                      value={crimeDate}
                      onChange={handleCrimeDateTextChange}
                    />
                  </div>

                  <div className="my-6">
                    <span className="font-semibold">අපරාධය සිදුවූ වේලාව</span>
                    <TextInput
                      type="time"
                      value={crimeTime}
                      onChange={handleCrimeTimeTextChange}
                    />
                  </div>
                </div>
              )}

              {selectedOption === "2" && (
                <div>
                  <div className="flex gap-2 justify-between rounded-md grow">
                    <div className="mt-6 ">
                      <span className="font-semibold">ආරම්භක දිනය</span>
                      <TextInput
                        type="date"
                        value={crimeStartedDate}
                        onChange={handleCrimeStartedDateTextChange}
                      />
                    </div>
                    <div className="mt-6 ">
                      <span className="font-semibold">අවසාන දිනය</span>
                      <TextInput
                        type="date"
                        value={crimeEndedDate}
                        onChange={handleCrimeEndedDateTextChange}
                      />
                    </div>
                  </div> 

                  <div className="flex gap-2 justify-between rounded-md grow">
                    <div className="my-3">
                      <span className="font-semibold">ආරම්භක වේලාව</span>
                      <TextInput
                        type="time"
                        value={crimeStartedTime}
                        onChange={handleCrimeStartedTimeTextChange}
                      />
                    </div>
                    <div className="my-3">
                      <span className="font-semibold">අවසාන වෙලාව</span>
                      <TextInput
                        type="time"
                        value={crimeEndedTime}
                        onChange={handleCrimeEndedTimeTextChange}
                      />
                    </div>
                  </div> 
                </div>
              )}
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
