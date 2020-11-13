import { navigate } from "@reach/router";
import React, { useState } from "react";
function AuthorForm(props) {
  //keep track of what is being typed via useState hook
  const { initialName, onSubmitProp, errors } = props;
  const [name, setName] = useState(initialName);

  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
    //navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AuthorForm;
