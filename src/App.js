import React from "react";
import "./style.css";
import React, { useState } from "react";

export default props => {
  const [count, setCont] = useState(0);
  const [user, Setuser] = useState({ name: " ", age: " " });

  const increment = () => {
    setCount(count + 1);
  };

  const inputChanged = (event, field) => {
    if (field == "name") {
      setUser({ ...user, name: event.target.value });
    } else {
      setUser({ ...user, age: event.target.value });
    }
  };

  return (
    <div>
      <h1>Reaact Component using Hook</h1>
      <p>Hook's Magic</p>
      Count: {count};
      <br />
      <button onClick={increment} Increment />
      <br />
      <input
        value={user.name}
        onChange={event => inputChanged(event, "name")}
      />
      <input value={user.age} onChange={event => inputChanged(event, "age")} />
      <br />
      {JSON.stringify(user)}
    </div>
  );
};
