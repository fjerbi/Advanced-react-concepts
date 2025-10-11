import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 3) {
      setError("Name should be at least 3 characters");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
