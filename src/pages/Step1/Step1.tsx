import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import { Divider, SelectChangeEvent } from "@mui/material";
import { Button, SelectInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/formHook";
import { HTTPService } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Step1() {
  const { updateFormData, formData } = useFormContext();
  const navigate = useNavigate();
  // const [showPreview, setShowPreview] = useState(false);
  const [typeOfChildAbuse, setTypeOfChildAbuse] = useState("");
  const [subTypeOfChildAbuse, setSubTypeOfChildAbuse] = useState("");

  const handleChildAbuseSelectChange = (event: SelectChangeEvent) => {
    setTypeOfChildAbuse(event.target.value);
  };
  const handleChildAbuseSubTypeSelectChange = (event: SelectChangeEvent) => {
    setSubTypeOfChildAbuse(event.target.value);
  };

  const handleNext = () => {
    if (!typeOfChildAbuse || !subTypeOfChildAbuse)
      return toast.warning("කරුණාකර සියලු අනුමත දත්ත පුරවන්න.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    updateFormData("form1", { typeOfChildAbuse, subTypeOfChildAbuse });
    updateFormData("currentStep", 1);
    navigate("/step2");
  };

  const handleViewValues = () => {
    if (!typeOfChildAbuse || !subTypeOfChildAbuse)
      return toast.warning("Please fill in all fields.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    updateFormData("form1", { typeOfChildAbuse, subTypeOfChildAbuse });
    updateFormData("currentStep", 1);
    navigate("/step2");
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData={...formData,
      form1:{ 
        typeOfChildAbuse, 
        subTypeOfChildAbuse 
      }, 
      currentStep:0 
    };
    
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
  
  // const handleShowPreview = () => {
  //   setShowPreview(true);
  // };

  const handleReset = () => {
    setTypeOfChildAbuse("");
    setSubTypeOfChildAbuse("");
  };

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <ToastContainer />
        <div className="flex justify-between">
          <span className="text-xl font-bold"> 1. බාල අපරාධය සහ බාල අපරාධ වර්ගය</span>
          <div className="place-items-center ">
            <Button variant="outlined" text="තාවකලිකව සුරකින්න" onClick={handleSave} />
          </div>
        </div>
      
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
              <div className="mt-6 mb-3">
                <span className="font-semibold">වාර්තා වූ බාල අපරාධය</span>
                <SelectInput
                  className="w-[330px] block my-3"
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
                  className="w-[330px] block my-3"
                  value={subTypeOfChildAbuse}
                  onChange={handleChildAbuseSubTypeSelectChange}
                  items={["අනූ අපරාධ වරගය"]}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-2 place-content-evenly rounded-md grow">
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
                {/* <Button
                  variant="outlined"
                  buttonColor="primary"
                  text="තහවුරු කර ගැනීමට "
                  onClick={handleShowPreview}
                /> */}
              </div>
            </div>
          </div>
          {/* <Divider className="h-full" orientation="vertical" flexItem />
          <div className="w-[500px] p-5">
            {showPreview && (
              <div>
                <h2>Preview</h2>
                <p><strong>වාර්තා වූ බාල අපරාධය:</strong> {typeOfChildAbuse}</p>
                <p><strong>බාල අපරාධයට අදාල වූ අනූ අපරාධ වර්ගය:</strong> {subTypeOfChildAbuse}</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </BaseBox>
  );
}
