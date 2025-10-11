import React from "react";
export const UncontrolledForm = ({}) => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        ref={nameInputRef}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter your age"
        ref={ageInputRef}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
