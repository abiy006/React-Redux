import { useState } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  // const [enteredValues, setEnteredValues] = useState({
  //   email: {
  //     value: '',
  //     didBlur: false,
  //   },
  //   password: "",
  // });


  const [didBlur, setDidBlur] = useState({
    email: false,
    password: false,
  });


  const emailIsValid = enteredValues.email !== '' && didBlur.email && !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);

    setEnteredValues({
      email: "",
      password: ""
    });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidBlur(prevBlur => ({
      ...prevBlur,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier, ) {
    setDidBlur(prevBlur => ({
      ...prevBlur,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsValid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
