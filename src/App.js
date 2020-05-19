import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";

import Hello from "./Hello";
import { useFetch } from "./useFetch";
const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  // use the updater function to not call JSON... in every render.
  const [count, setCount] = useState(() => {
    const number = JSON.parse(localStorage.getItem("count"));
    if (number === null) {
      return 0;
    }
    return number;
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  });
  return (
    <div className="App">
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle Hello</button> */}
      {/* {showHello && <Hello />} */}
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
