import React from "react";
import "./App.css";
import { Button } from "./components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function App() {
  return (
    <div className="m-12">
      <Button
        variant="outlined"
        buttonColor="error"
        endIcon={<ArrowForwardIcon />}
        startIcon={<ArrowBackIcon />}
        text="Next Page"
      />
    </div>
  );
}

export default App;
