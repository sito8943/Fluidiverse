import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { base64encode } from "nodejs-base64";

import Loading from "../../components/loading/Loading";

import { useContext } from "../../context/ContextProvider";
import { login } from "../../services/post";
import User from "../../models/User";

const Login = (props) => {
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const { contextState, setContextState } = useContext();

  const init = () => {};

  const signIn = async (d) => {
    setLoading(true);
    const user = {
      n: d.name,
      p: d.password,
    };
    const data = await login(user);
    if (data !== "good") {
      if (data !== 200 && data[0] !== "E")
        setError(props.texts.Errors.WrongUser);
      else setError(props.texts.Errors.NotConnected);
    } else {
      const nUser = new User(base64encode(user.n), user.n);
      setContextState({
        type: "log-in",
        user: nUser,
      });
      if (d.remember === "false") localStorage.setItem("username", user.n);
      else sessionStorage.setItem("username", user.n);
    }
    setLoading(false);
  };

  useEffect(() => {
    init();
    setLoading(false);
  }, []);

  return (
    <div>
    </div>
  );
};

export default Login;
