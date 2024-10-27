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

export function Step11() {
  const navigate = useNavigate();
  const { updateFormData, formData } = useFormContext();
  const stepCount = 6;

  const [activeStep, setActiveStep] = useState(0);
  const [typeOfCrimeScene, setTypeOfCrimeScene] = useState("");

  const handleTypeOfCrimeSceneSelectChange = (event: SelectChangeEvent) => {
    setTypeOfCrimeScene(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleMainStepNext = () => {
    updateFormData("form11", {
      typeOfCrimeScene,
    });
    updateFormData("currentStep", 11);
    navigate("/step12");
  };

  const handleMainStepBack = () => {
    updateFormData("form11", {
      typeOfCrimeScene,
    });
    updateFormData("currentStep", 9);
    navigate("/step10");
  };

  const handleSave = async () => {
    const httpService = new HTTPService({ baseURL: "http://localhost:3001" });
    const newFormData = {
      ...formData,
      form11: {
        typeOfCrimeScene,
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

  return (
    <BaseBox>
      <div className="p-5 flex flex-col grow">
        <ToastContainer />
        <div className="flex justify-between">
        <span className="text-xl font-bold">
          11. පොලිස් විමර්ශන සහ ක්‍රියාමාර්ග
        </span>
        <div className="place-items-center ">
          <Button variant="outlined" text="තාවකලිකව සුරකින්න" onClick={handleSave} />
        </div>
        </div>
        <div className="flex gap-2 justify-between rounded-md grow mt-5">
          <div className="p-2 grow flex flex-col justify-between">
            <Box sx={{ width: "100%" }}>
              <div className="p-2 grow flex flex-col justify-between">
                <Box sx={{ width: "70%", alignSelf: "center" }}>
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
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  items={["චර්යාත්මක හා කායික වර්ගීකරණය"]}
                                />
                              </div>
                              <div className="mt-6">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="date"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                        </span>
                        <div className="mx-3">
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="date"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                        </span>
                        <div className="mx-3">
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <SelectInput
                              className="w-[330px] block my-3"
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              items={["චර්යාත්මක හා කායික වර්ගීකරණය"]}
                            />
                          </div>
                          <div className="mt-3">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="date"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="date"
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div>
                        <div>
                          <span className="text-xl font-bold mt-2">
                            අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                          </span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="date"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="my-3">
                              <span className="font-semibold">
                                සලකුණු ප්‍රධාන වර්ගීකරණය
                              </span>
                              <TextInput
                                value={typeOfCrimeScene}
                                onChange={handleTypeOfCrimeSceneSelectChange}
                                type="text"
                                placeholder="වෙනත් තොරතුරු"
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div>
                        <div>
                          <span className="text-xl font-bold mt-2">
                            අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                          </span>
                          <div className="mx-3">
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="mt-6 mb-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="date"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 justify-between rounded-md grow ">
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                              <div className="my-3">
                                <span className="font-semibold">
                                  සලකුණු ප්‍රධාන වර්ගීකරණය
                                </span>
                                <TextInput
                                  value={typeOfCrimeScene}
                                  onChange={handleTypeOfCrimeSceneSelectChange}
                                  type="text"
                                  placeholder="වෙනත් තොරතුරු"
                                />
                              </div>
                            </div>
                            <div className="my-3">
                              <span className="font-semibold">
                                සලකුණු ප්‍රධාන වර්ගීකරණය
                              </span>
                              <TextInput
                                value={typeOfCrimeScene}
                                onChange={handleTypeOfCrimeSceneSelectChange}
                                type="text"
                                placeholder="වෙනත් තොරතුරු"
                              />
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    )}

                    {activeStep === 5 && (
                      <div>
                        <span className="text-xl font-bold mt-2">
                          අපරාධය ගොදුරු පුද්ගල ශාරීරික හානි
                        </span>
                        <div className="mx-3">
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                          <div className="mt-6">
                            <span className="font-semibold">
                              සලකුණු ප්‍රධාන වර්ගීකරණය
                            </span>
                            <TextInput
                              value={typeOfCrimeScene}
                              onChange={handleTypeOfCrimeSceneSelectChange}
                              type="text"
                              placeholder="වෙනත් තොරතුරු"
                            />
                          </div>
                          <div className="flex gap-2 justify-between rounded-md grow ">
                            <div className="my-3">
                              <span className="font-semibold">
                                සලකුණු ප්‍රධාන වර්ගීකරණය
                              </span>
                              <TextInput
                                value={typeOfCrimeScene}
                                onChange={handleTypeOfCrimeSceneSelectChange}
                                type="date"
                              />
                            </div>
                            <div className="my-3">
                              <span className="font-semibold">
                                සලකුණු ප්‍රධාන වර්ගීකරණය
                              </span>
                              <TextInput
                                value={typeOfCrimeScene}
                                onChange={handleTypeOfCrimeSceneSelectChange}
                                type="date"
                              />
                            </div>
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
                  onClick={handleSave}
                />
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  buttonColor="primary"
                  text="ඊළඟ පියවරට"
                  onClick={activeStep === 5 ? handleMainStepNext : handleNext}
                />
              </div>
            </div>
          </div>
          {/* <Divider className="h-full " orientation="vertical" flexItem />
          <div className="w-[500px] p-5">Values go here</div> */}
        </div>
      </div>
    </BaseBox>
  );
}
