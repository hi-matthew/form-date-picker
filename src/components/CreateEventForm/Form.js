import React, { useState } from "react";

function useSetInput(initialValue) {
  const [value, setInputValue] = useState(initialValue);
  const handleChange = ({ target }) => setInputValue(target.value);
  return { value, onChange: handleChange };
}

function Form() {
  const eventTitle = useSetInput("");
  const eventSubTitle = useSetInput("");
  const eventDesc = useSetInput("");
  return (
    <>
      <form className="form" method="POST" action="/api/example-endpoint">
        <label htmlFor="title">
          Event title
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Required"
            {...eventTitle}
          />
        </label>
        <label htmlFor="subtitle">
          Event subtitle
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="Optional"
            {...eventSubTitle}
          />
        </label>
        <div className="calendar-input-container">
          <label htmlFor="start-date">
            Start
            <input
              type="datetime-local"
              id="start-date"
              placeholder={`🗓 ${new Date().toLocaleDateString()}`}
            />
          </label>
          <label htmlFor="end-date">
            End
            <input
              type="datetime-local"
              id="end-date"
              placeholder={`🗓 ${new Date().toLocaleDateString()}`}
            />
          </label>
        </div>
        <label htmlFor="description">
          Event Description
          <input
            type="text"
            id="description"
            placeholder="Optional"
            {...eventDesc}
          />
        </label>
        <div className="button-container">
          <button type="button" id="cancel">
            Cancel
          </button>
          <button type="button" id="create">
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
