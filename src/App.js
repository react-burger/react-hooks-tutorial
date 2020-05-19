import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";

import Hello from "./Hello";
const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    console.log("App render");
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      console.log("App unnount");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [values.email]);

  return (
    <div className="App">
      <button onClick={() => setShowHello(!showHello)}>toggle Hello</button>
      {showHello && <Hello />}
      <input
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        // onChange={e => setPassword(e.target.value)}
      />
      <input
        placeholder="first name"
        type="firstName"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        // onChange={e => setPassword(e.target.value)}
      />
    </div>
  );
};

export default App;
