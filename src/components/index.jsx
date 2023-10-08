import React, { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
const name = user.email.split('@')[0];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
  type="text"
  value={user.username.length === 0 ? (user.email.split('@')[0] || "") : user.username}
  onChange={(e) => {
    setUser({ ...user, username: e.target.value });
  }}
        />
      </label>

      <label>
        Email Address:
        <input
          type="email"
          value={user.email}
          onChange={(e) => {
            const eMail = e.target.value;
            setUser({ ...user, email: eMail });
            console.log(eMail);
          }}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={user.password}
          onChange={(ev) => {
            setUser({ ...user, password: ev.target.value });
          }}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={user.passwordConfirm}
          onChange={(ev) => {
            setUser({ ...user, passwordConfirm: ev.target.value });  
          }}
        />
        
      </label>

      <button type="submit">Register</button>
      <div>{confirmationMessage}</div>
    </form>
  );
};
export default Registration;
