import React from "react";
import { Button, ButtonProps } from "@mui/material";



interface CustomButtonProps extends ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  backgroundColor = "#734d26",
  sx,
  ...rest
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        textTransform: "none",
        backgroundColor,
        ...sx,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
