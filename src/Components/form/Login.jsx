import React from "react";

export default function Login() {
  //State (Data)

  //Comportement

  //Affichage
  return (
    <>
      <h1>Login Form</h1>
      <br />
      <br />

      <form>
        <div>
          <label htmlFor="pseudo">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="pseudo" />
        </div>
        <br />

        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="email" placeholder="Enter Email" name="email" />
        </div>
        <br />

        <div>
          <label htmlFor="mdp">
            <b>Password</b> <br />
          </label>
          <input type="password" placeholder="Enter Password" name="mdp" />
        </div>
        <br />

        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}
