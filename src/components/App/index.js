import React from "react";
import CreateEventForm from "../CreateEventForm";
import DatePicker from "../DatePicker";

import "./_App.css";

function App() {
  return (
    <div className="App">
      <CreateEventForm />
      <DatePicker />
    </div>
  );
}

export default App;
