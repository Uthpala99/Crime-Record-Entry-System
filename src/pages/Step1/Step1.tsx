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

  // const handleViewValues = () => {
  //   if (!typeOfChildAbuse || !subTypeOfChildAbuse)
  //     return toast.warning("Please fill in all fields.", {
  //       className: "toast-failed",
  //       bodyClassName: "toast-failed",
  //     });
  //   updateFormData("form1", { typeOfChildAbuse, subTypeOfChildAbuse });
  //   updateFormData("currentStep", 1);
  //   navigate("/step2");
  // };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3000" });
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
      <div className="p-6 flex flex-col grow">
        <ToastContainer />
        <div className="flex justify-between">
          <span className="text-xl font-bold"> 1. අපරාධය සහ අපරාධ වර්ගය</span>
          <div className="place-items-center ">
            <Button variant="outlined" text="තාවකලිකව සුරකින්න" onClick={handleSave} />
          </div>
        </div>
      
        <div className="flex gap-2 justify-between rounded-md grow">
          <div className="p-2 grow flex flex-col justify-between">
            <div>
              <div className="mt-6 mb-3">
                <span className="font-semibold">වාර්තා වූ අපරාධය</span>
                <SelectInput
                  className="w-[330px] block my-3"
                  value={typeOfChildAbuse}
                  onChange={handleChildAbuseSelectChange}
                  items={["ඝාතනය" , "දූෂණය" , "සොරකම" ,  "නිවාස කඩාවැටීම"]}
                />
              </div>
              <div className="my-3">
                <span className="font-semibold">
                  අපරාධයට අදාල වූ අනූ අපරාධ වර්ගය
                </span>
                <SelectInput
                  className="w-[330px] block my-3"
                  value={subTypeOfChildAbuse}
                  onChange={handleChildAbuseSubTypeSelectChange}
                  items={["අනුමත මිනීමැරුම" , "ප්‍රායෝගික ඝාතනය / ආත්මහත්යාගේ උදව් (IPC 300, 301, 299)" , "දූෂණය - නීතිගතව (අවුරුදු 16ට පහළ ගැහැණු දරුවන්) [(P.D.C. 364(1), 364(2), 364(3), 364(a)]" , 
                    "දූෂණය - (අවුරුදු 16 ඉක්මවූ) [(I.D.S. 364(1), 364(2), 364(a)]", "අනුමත මිනීමැරුම (IPC 296, 297)" , "භයානක අවි වලින් තුවාල කිරීම (පිහිනි ආදී)" , 
                  "අසාමාන්‍ය අපරාධ සහ බරපතළ ලිංගික පීඩනය (I.D.S. 365, 365(a), 365(b)" , "හෙරොයින්, කොකේන්, කිසිම ප්‍රමාණයක මොර්ෆින්, මේතාම්පැටමින් හෝ අයිස් නිෂ්පාදනය" , 
                  "ස්වයංක්‍රීය ගිනි අවියක හෝ නැවත විමෝචනය කළ හැකි ගිනි අවියක හිමිකිරීම" , "නිවාස කඩාවැටීම (440 - 446 ක්‍රි.ව.)" , "සොරකම (I.D.N.S. 380, 385)" , 
                  "ගිනිතබාගැනීම් හෝ පුපුරන ද්‍රව්‍යවලින් හානි සිදුකිරීම (IPC 418, 419, 421)" , "රු. 50,000 කට වැඩි වටිනාකමක සොරකම (IPC 367, 368(a), 368(b), 369, 370, 394, 396)" ]}
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
