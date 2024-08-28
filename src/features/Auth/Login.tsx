import styles from "./style.module.scss";
import { ButtonProps, EnumTypeInput, GameModel } from "../../services/models";
import Cat from "../../assets/images/cute-cat-studio.png";
import { Button, TextField } from "../../components";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = () => {
    if (username !== "ary" || password !== "ary") alert("Bad credentials");
    else navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className="w-9 w-sm-full row just-around wrap">
        <div
          className={
            "column w-5 w-sm-5 just-center items-center pt-2  " + styles.coldiffcolor
          }
        >
          <img height={"100%"} width={"100%"} src={Cat} />
        </div>
        <div className="column w-4 w-sm-full just-center items-center pt-2">
          <div className="column w-9 gap-3">
            <div className="column just-center">
              <h3 className="color-title text-center">
                Welcome, enter with your credentials
              </h3>
            </div>
            <div className="column just-center gap-1">
              <TextField
                label={"Username"}
                onChange={(data) => {
                  setUsername(data);
                }}
                color={"secondary"}
                type={EnumTypeInput.TEXT}
                errorMsg={""}
              />
              <TextField
                label={"Password"}
                onChange={(data) => {
                  setPassword(data);
                }}
                color={"secondary"}
                type={EnumTypeInput.PASS}
                errorMsg={""}
              />
            </div>
            <div className="column just-center gap-1">
              <Button
                label={"Enter"}
                onClick={() => onLogin()}
                color={"secondary"}
              />
               <a href="/" className="color-secondary-title2  text-center">Back to Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
