import React from "react";
import "./styles/ContentPanel.min.css";

const ContentPanel = props => {
  let contentToView;
  props.myObject === null
    ? (contentToView = null)
    : (contentToView = props.myObject.map(elem => {
        return (
          <div className="container__block" key={elem.id}>
            <h2>ID : {elem.id}</h2>
            <p>
              <strong>Title : </strong> {elem.title}
            </p>
            <p>
              <strong>Body : </strong> {elem.body}
            </p>
            <p>
              <strong>UserId : </strong> {elem.userId}
            </p>
            <button onClick={e => props.myClick(e, elem.id)}>Delete</button>
            <br />
            <br />
          </div>
        );
      }));

  return (
    <div className="ContentPanel">
      <div className="ContentPanel__container">{contentToView}</div>
    </div>
  );
};

export default ContentPanel;
