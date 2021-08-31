import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { googleProvider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to UniChat!</h2>
        <button
          className="login-button google"
          onClick={() => signInWithPopup(auth, googleProvider)}
        >
          <GoogleOutlined /> Sign In with Google
        </button>
        <br />
        <br />
        <button
          className="login-button facebook"
          onClick={() =>
            // auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            console.log("click")
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
