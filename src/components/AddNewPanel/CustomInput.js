import React from "react";

const CustomInput = props => {
  return (
    <input
      className="AddNewPanel__form__input"
      onChange={e => props.myInput(e, props.inputType)}
      value={props.myVal}
    ></input>
  );
};

export default CustomInput;
