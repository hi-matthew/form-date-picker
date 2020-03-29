import React from "react";
import Form from "./Form";
import FormHeading from "./FormHeading";
import "./_CreateEventForm.css";

function CreateEventForm() {
  return (
    <div className="create-event">
      <FormHeading />
      <Form />
    </div>
  );
}

export default CreateEventForm;
