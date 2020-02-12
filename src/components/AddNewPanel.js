import React from "react";
import "./styles/AddNewPanel.min.css";
import CustomInput from "./AddNewPanel/CustomInput";

const AddNewPanel = props => {
  return (
    <div className="AddNewPanel">
      <div className="AddNewPanel__form">
        <p>Title</p>
        <CustomInput
          myInput={props.myInput}
          inputType={"title"}
          myVal={props.myTitleVal}
        />
        <p>Body</p>
        <CustomInput
          myInput={props.myInput}
          inputType={"body"}
          myVal={props.myBodyVal}
        />
        <p>User Id</p>
        <CustomInput
          myInput={props.myInput}
          inputType={"userId"}
          myVal={props.myUserIdVal}
        />
        <button onClick={props.myClick}>Add</button>
      </div>
    </div>
  );
};

export default AddNewPanel;
