import React from "react";
import "../stylesheet/BotonClear.css";

export const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.handleClick}>
    Clear
  </div>
);
