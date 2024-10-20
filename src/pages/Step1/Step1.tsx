import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, SelectChangeEvent } from "@mui/material";
import { Button, SelectInput } from "../../components";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/formHook";
import { HTTPService } from "../../services";

export function Step1() {
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const [typeOfChildAbuse, setTypeOfChildAbuse] = useState("");
  const [subTypeOfChildAbuse, setSubTypeOfChildAbuse] = useState("");

  const handleChildAbuseSelectChange = (event: SelectChangeEvent) => {
    setTypeOfChildAbuse(event.target.value);
  };
  const handleChildAbuseSubTypeSelectChange = (event: SelectChangeEvent) => {
    setSubTypeOfChildAbuse(event.target.value);
  };

  const handleNext = () => {
    updateFormData("form1", { typeOfChildAbuse, subTypeOfChildAbuse });
    updateFormData("currentStep", 1);
    navigate("/step2");
  };

  const handleSave = () => {
    const httpService = new HTTPService({ baseURL: "" });
    //httpService.post("",{typeOfChildAbuse,su})
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <span className="text-xl font-bold">
          1. බාල අපරාධය සහ බාල අපරාධ වර්ගය
        </span>
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
              <div className="mt-6 mb-3">
                <span className="font-semibold">වාර්තා වූ බාල අපරාධය</span>
                <SelectInput
                  value={typeOfChildAbuse}
                  onChange={handleChildAbuseSelectChange}
                  items={["බාල අපරාධය"]}
                />
              </div>
              <div className="my-3">
                <span className="font-semibold">
                  බාල අපරාධයට අදාල වූ අනූ අපරාධ වර්ගය
                </span>
                <SelectInput
                  value={subTypeOfChildAbuse}
                  onChange={handleChildAbuseSubTypeSelectChange}
                  items={["අනූ අපරාධ වරගය"]}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                buttonColor="error"
                text="යළි සැකසුමට"
              />
              <Button
                variant="contained"
                buttonColor="primary"
                text="ඊළඟ පියවරට"
                onClick={handleNext}
              />
            </div>
          </div>
          <Divider className="h-full" orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div>
        </div>
      </div>
    </BaseBox>
  );
}
