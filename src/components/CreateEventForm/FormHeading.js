import React from "react";
import information from "../../assets/i-icon.svg";

function FormHeading() {
  return (
    <div className="form-heading">
      <div className="icon-container">
        <img className="form-icon" alt="information icon" src={information} />
      </div>
      <div className="title-container">
        <h1>Create Event</h1>
        <p>Add some information for the event you want to create</p>
      </div>
    </div>
  );
}

export default FormHeading;
