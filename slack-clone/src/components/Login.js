import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="data:image/png;base64,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"
          alt="logos"
        />
        <h1>Login to Slakc/Amartya_Singh</h1>
        <p>amartya.slakc.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
        <footer>
          Built by{" "}
          <a href="https://www.linkedin.com/in/amartyasingh07/">
            Amartya Singh
          </a>
        </footer>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 150px;
    width: 400px;
    margin-bottom: 40px;
  }
  > footer > a {
  }
  > h1 {
    padding-bottom: 4px;
  }
  > p {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  > footer {
    padding-top: 4px;
  }
  > button {
    margin-top: 4px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
