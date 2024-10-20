import React, { ReactNode } from "react";
import MUIButton from "@mui/material/Button";
type ButtonVariant = "text" | "contained" | "outlined";
type ButtonSize = "large" | "medium" | "small";
type ButtonColor = "primary" | "error";
interface ButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: ButtonSize;
  buttonColor?: ButtonColor;
}
function Button({
  startIcon,
  endIcon,
  text,
  variant = "contained",
  disabled = false,
  size = "medium",
  buttonColor = "primary",
}: ButtonProps) {
  return (
    <div>
      <MUIButton
        className="rounded-lg"
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        size={size}
        disabled={disabled}
        color={buttonColor}
      >
        {text}
      </MUIButton>
    </div>
  );
}

export default Button;