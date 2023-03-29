import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../authenticate/firebaseConfig";

const Login = () => {
  //firebase setup
  const app = initializeApp(firebaseConfig);

  const [email, setEmail] = useState("abc1@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [isUserExist, setIsUserExist] = useState(false);
  const [isEmailUsed, setisEmailUsed] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const location = useLocation();
  //console.log(location);
  const page = location.pathname === "/login" ? true : false;
  const navigate = useNavigate();
  const auth = getAuth();
  const validation = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case "password":
        return value.length >= 6;
      default:
        break;
    }
  };

  const ctaClickHandler = (e) => {
    e.preventDefault();
    if (!validation("email", email) || !validation("password", password)) {
      setEmailValid(validation("email", email));
      setPasswordValid(validation("password", password));
      return;
    }

    if (page) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (auth) {
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          setIsUserExist(true);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/login");
          }
        })
        .catch((error) => setisEmailUsed(true));
    }
  };

  const emailOnchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnchangeHandler = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    setIsUserExist(false);
    setisEmailUsed(false);
  }, [location]);
  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ? "login" : "register"}</h1>
        <br />
        <form>
          <input
            className="form-control"
            value={email}
            onChange={emailOnchangeHandler}
            type="email"
            placeholder="Email"
            autoComplete="off"
          />
          {!emailValid && <p className="text-danger"> Email is invalid </p>}
          <input
            className="form-control"
            value={password}
            onChange={passwordOnchangeHandler}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          {!passwordValid && (
            <p className="text-danger"> password is invalid </p>
          )}
          <button
            className="btn btn-danger btn-block"
            onClick={ctaClickHandler}
            style={{ width: "100%" }}
          >
            {page ? "sign in" : "register"}
          </button>
          <br />

          {page && (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-white"
                htmlFor="flexCheckDefault"
              >
                Remember Me
              </label>
            </div>
          )}
        </form>
        <br />
        <br />
        {isUserExist && (
          <p className="text-danger">
            user name does not exist | go for Sign up
          </p>
        )}
        {isEmailUsed && (
          <p className="text-danger">Email already in use | go for Sign in</p>
        )}
        <div className="login-form-other">
          <div className="login-signup-now">
            <span>{page ? "New a netfilx" : "exist user"} &nbsp;</span>
            <Link className="linked" to={page ? "/register" : "/login"}>
              {page ? "Sign up now" : "sign in"}
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
};

export default Login;
