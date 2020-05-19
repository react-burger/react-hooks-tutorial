import React, { useState } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div className="App">
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        // onChange={e => setPassword(e.target.value)}
      />
    </div>
  );
};

export default App;
