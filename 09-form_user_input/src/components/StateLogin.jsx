import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength} from "../util/validation.js"

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


    const emailIsValid =
    didBlur.email &&
    !isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);
    
    

  // const emailIsValid =
  //   enteredValues.email !== "" &&
  //   didBlur.email &&
  //   !enteredValues.email.includes("@");

  // const passwordIsValid =
  //   enteredValues.password !== "" &&
  //   didBlur.password &&
  //   !enteredValues.password.trim().length < 6;

    const passwordIsValid =
    enteredValues.password !== "" &&
    didBlur.password &&
    !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidBlur((prevBlur) => ({
      ...prevBlur,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidBlur((prevBlur) => ({
      ...prevBlur,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsValid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
          error={passwordIsValid && "Please enter a valid password!"}
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsValid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
