import { Button } from "@mui/material";
import React from "react";

const Buttonn = (props) => {
  
  return (
    <Button 
      style={props}
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default Buttonn;