import React, { useState } from "react";
import { BaseBox } from "../../components/BaseBox";
import {
  Box,
  Divider,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Button, SelectInput, TextInput } from "../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/formHook";
import { HTTPService } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Step12() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const stepCount = 5;

  const [activeStep, setActiveStep] = useState(0);
  const [accusedName, setAccusedName] = useState("");
  const [warrantType, setWarrantType] = useState("");
  const [warrantIssuedCourt, setWarrantIssuedCourt] = useState("");
  const [warrantIssuedDate, setWarrantIssuedDate] = useState("");

  const handleWarrantTypeSelectChange = (event: SelectChangeEvent) => {
    setWarrantType(event.target.value);
  };

  const handleAccusedNameTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccusedName(event.target.value);
  };

  const handleWarrantIssuedCourtTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWarrantIssuedCourt(event.target.value);
  };

  const handleWarrantIssuedDateTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWarrantIssuedDate(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMainStepBack = () => {
    updateFormData("form12", {
      accusedName,
      warrantType,
      warrantIssuedCourt,
      warrantIssuedDate,
    });
    updateFormData("currentStep", 10);
    navigate("/step11");
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData = {
      ...formData,
      form12: {
        accusedName,
        warrantType,
        warrantIssuedCourt,
        warrantIssuedDate,
      },
    };

    httpService
      .post("/submit-form", { newFormData })
      .then((result) => {
        toast.success((result.data as { msg: string; success: boolean }).msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReset = () => {
  };

  return (
    <BaseBox>
      <div className="p-4 flex flex-col grow">
        <ToastContainer />
        <div className="flex justify-between">
        <span className="text-xl font-bold">12. අධිකරණ ක්‍රියාමාර්ග</span>
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
            <Box sx={{ width: "100%" }}>
              <div className="p-2 grow flex flex-col justify-between">
                <Box sx={{ width: "50%", alignSelf: "center" }}>
                  <Stepper
                    activeStep={activeStep}
                    sx={{
                      "& .MuiStepIcon-root": {
                        fontSize: "2rem",
                      },
                    }}
                  >
                    {Array.from({ length: stepCount }, (_, index) => (
                      <Step key={index}>
                        <StepLabel />
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
              <Divider className="pt-2" orientation="horizontal" flexItem />
              <div>
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    {activeStep === 0 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          චූදිතයින් සදහා වරෙන්තු නිකුත් කර ඇත
                        </span>
                        <div className="mx-3">
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">චූදිතයාගෙ නම</span>
                            <TextInput
                              placeholder="චූදිතයාගෙ නම"
                              value={accusedName}
                              onChange={handleAccusedNameTextChange}
                              type="text"
                            />
                          </div>
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">වරෙන්තු වර්ගය</span>
                            <SelectInput
                              className="w-[330px] block my-3"
                              value={warrantType}
                              onChange={handleWarrantTypeSelectChange}
                              items={["වරෙන්තු වර්ගය"]}
                            />
                          </div>

                          <div className="my-3">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ අධිකරණය
                            </span>
                            <TextInput
                              value={warrantIssuedCourt}
                              onChange={handleWarrantIssuedCourtTextChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>

                          <div className="mt-6">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ දිනය
                            </span>
                            <TextInput
                              value={warrantIssuedDate}
                              onChange={handleWarrantIssuedDateTextChange}
                              type="date"
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div>
                        <div>
                          <span className="text-xl font-bold mt-2">
                            අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                          </span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <SelectInput
                                  className="w-[330px] block my-3"
                                  value={warrantType}
                                  onChange={handleWarrantTypeSelectChange}
                                  items={["වරෙන්තු වර්ගය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={warrantIssuedDate}
                                  onChange={handleWarrantIssuedDateTextChange}
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div>
                          <span className="text-xl font-bold mt-2">
                            අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                          </span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <SelectInput
                                  className="w-[330px] block my-3"
                                  value={warrantType}
                                  onChange={handleWarrantTypeSelectChange}
                                  items={["වරෙන්තු වර්ගය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={warrantIssuedDate}
                                  onChange={handleWarrantIssuedDateTextChange}
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div>
                          <span className="text-xl font-bold mt-2">
                            අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                          </span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <SelectInput
                                  className="w-[330px] block my-3"
                                  value={warrantType}
                                  onChange={handleWarrantTypeSelectChange}
                                  items={["වරෙන්තු වර්ගය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={warrantIssuedDate}
                                  onChange={handleWarrantIssuedDateTextChange}
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          චූදිතයින් සදහා වරෙන්තු නිකුත් කර ඇත
                        </span>
                        <div className="mx-3">
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">චූදිතයාගෙ නම</span>
                            <TextInput
                              placeholder="චූදිතයාගෙ නම"
                              value={accusedName}
                              onChange={handleAccusedNameTextChange}
                              type="text"
                            />
                          </div>
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">වරෙන්තු වර්ගය</span>
                            <SelectInput
                              className="w-[330px] block my-3"
                              value={warrantType}
                              onChange={handleWarrantTypeSelectChange}
                              items={["වරෙන්තු වර්ගය"]}
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ දිනය
                            </span>
                            <TextInput
                              value={warrantIssuedDate}
                              onChange={handleWarrantIssuedDateTextChange}
                              type="date"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ අධිකරණය
                            </span>
                            <TextInput
                              value={warrantIssuedCourt}
                              onChange={handleWarrantIssuedCourtTextChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          චූදිතයින් සදහා වරෙන්තු නිකුත් කර ඇත
                        </span>
                        <div className="mx-3">
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">චූදිතයාගෙ නම</span>
                            <TextInput
                              placeholder="චූදිතයාගෙ නම"
                              value={accusedName}
                              onChange={handleAccusedNameTextChange}
                              type="text"
                            />
                          </div>
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">වරෙන්තු වර්ගය</span>
                            <TextInput
                              placeholder="චූදිතයාගෙ නම"
                              value={accusedName}
                              onChange={handleAccusedNameTextChange}
                              type="text"
                            />
                          </div>

                          <div className="my-3">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ අධිකරණය
                            </span>
                            <TextInput
                              value={warrantIssuedCourt}
                              onChange={handleWarrantIssuedCourtTextChange}
                              type="date"
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          චූදිතයින් සදහා වරෙන්තු නිකුත් කර ඇත
                        </span>
                        <div className="mx-3">
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">චූදිතයාගෙ නම</span>
                            <TextInput
                              placeholder="චූදිතයාගෙ නම"
                              value={accusedName}
                              onChange={handleAccusedNameTextChange}
                              type="text"
                            />
                          </div>
                          <div className="mt-6 mb-3">
                            <span className="font-semibold">වරෙන්තු වර්ගය</span>
                            <TextInput
                              placeholder="චූදිතයාගෙ නම"
                              value={accusedName}
                              onChange={handleAccusedNameTextChange}
                              type="text"
                            />
                          </div>

                          <div className="mt-6">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ අධිකරණය
                            </span>
                            <TextInput
                              value={warrantIssuedCourt}
                              onChange={handleWarrantIssuedCourtTextChange}
                              type="number"
                            />
                          </div>

                          <div className="mt-6">
                            <span className="font-semibold">
                              වරෙන්තුව නිකුත් කළ දිනය
                            </span>
                            <TextInput
                              value={warrantIssuedDate}
                              onChange={handleWarrantIssuedDateTextChange}
                              type="text"
                              fullWidth={true}
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    )}
                  </Typography>
                </React.Fragment>
              </div>
            </Box>

            <div className="flex gap-2">
              <div className="flex gap-2 place-content-evenly rounded-md grow">
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  buttonColor="primary"
                  text="පෙර පියවරට"
                  onClick={activeStep === 0 ? handleMainStepBack : handleBack}
                />
                <Button
                  variant="contained"
                  buttonColor="error"
                  text="යළි සැකසුමට"
                  onClick={handleReset}
                />

                <Button
                  variant="outlined"
                  endIcon={activeStep === 4 ? <></> : <ArrowForwardIcon />}
                  buttonColor="primary"
                  text={activeStep === 4 ? "දත්ත ගබඩා කරන්න" : "ඊළඟ පියවරට"}
                  onClick={activeStep === 4 ? handleSave : handleNext}
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
