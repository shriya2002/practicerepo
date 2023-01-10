import React, { useState } from "react";
const errorMessage = "age must be greater than 18";
const Agecom = () => {
  const [age, setAge] = useState();
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setErr(false);
    setAge(e.target.value);
    if (e.target.value < 18) {
      setErr(true);
    }
  };

  return (
    <div>
      <input type="text" value={age} onChange={handleChange} />
      {err ? errorMessage : null}
    </div>
  );
};

export default Agecom;
