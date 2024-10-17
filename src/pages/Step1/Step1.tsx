import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Button, SelectInput } from "../../components";

export function Step1() {
  const [typeOfChildAbuse, setTypeOfChildAbuse] = useState("");
  const [subTypeOfChildAbuse, setSubTypeOfChildAbuse] = useState("බාල අපරාධය");
  const handleChildAbuseSelectChange = (event: SelectChangeEvent) => {
    setTypeOfChildAbuse(event.target.value);
  };
  const handleChildAbuseSubTypeSelectChange = (event: SelectChangeEvent) => {
    setSubTypeOfChildAbuse(event.target.value);
  };
  return (
    <BaseBox>
      <div className="p-4 flex flex-col grow">
        <span className="text-xl ">1. බාල අපරාධය සහ බාල අපරාධ වර්ගය</span>
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-5 grow flex flex-col justify-between">
            <div>
              <div className="my-6">
                <span>වාර්තා වූ බාල අපරාධය</span>
                <SelectInput
                  value={typeOfChildAbuse}
                  onChange={handleChildAbuseSelectChange}
                  items={["බාල අපරාධය"]}
                />
              </div>
              <div className="my-6">
                <span>බාල අපරාධයට අදාල වූ අනූ අපරාධ වර්ගය</span>
                <SelectInput
                  value={subTypeOfChildAbuse}
                  onChange={handleChildAbuseSubTypeSelectChange}
                  items={["අනූ අපරාධ වර්ගය"]}
                />
              </div>
            </div>
            <div className=" flex gap-2">
              <Button
                variant="outlined"
                buttonColor="error"
                text="යළි සැකසුමට"
              />
              <Button
                variant="contained"
                buttonColor="primary"
                text="ඊළඟ පියවරට"
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
