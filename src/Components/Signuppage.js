import React from "react";
import google from "./images/google.png";
import apple from "./images/apple.png";
import "./Signuppage.css";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <div className="left">
        <h1>Board.</h1>
      </div>
      <div className="right">
        <div className="right-center">
          <h3>Sign In</h3>
          <h6 className="formh3">Sign in to your account</h6>

          <a className="anchor" href=""><img src={google}/> Sign in with Google</a>
          <a className="anchor" href=""><img src={apple}/>Sign in with Apple</a>

          <div className="form">
            <form className="formtag" action="">
              <label htmlFor="">Email address</label>
              <br />
              <input className="forminput" type="email" name="email" placeholder="abc@gmail.com" required/>
              <br />
              <label htmlFor="">Enter Password</label>
              <br />
              <input className="forminput" type="email" name="email" required/>
              <br />
              <a className="formanchor" href="">Forget password?</a>
              <br />
              <button className="formbutton" type="submit" onClick={() => {
                navigate("/dashboard")
              }}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signuppage;
