import React, { useState } from "react";
import "./entry.style.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { LoginForm } from "../../components/login/login.comp";
import { PasswordReset } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    {
      /* to set values of email and password in variable email and password using function */
    }
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    //console.log(name , value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    {
      /* to stop page refresh */
    }

    if (!email || !password) {
      return alert("Fill up all the form");
    }

    // TODO call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    {
      /* to stop page refresh */
    }

    if (!email) {
      return alert("Fill enter the email");
    }

    // TODO call api to submit the form
    console.log(email);
  };

  {
    /* for switching forms/pages */
  }
  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Container className="py-4 d-flex justify-content-center align-items-center min-vh-100">
        {" "}
        {/* Adds padding around the Container */}
        <Card className="bg-light p-2 w-50 ">
          <Card.Body>
            {/* formLoad === 'login' ===> setting form to load using useState (line 10)*/}
            {formLoad === "login" && (
              <LoginForm
                handleOnChange={handleOnChange}
                email={email}
                password={password}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
              />
            )}{" "}
            {/* passing props, passing parameters */}
            {/* formLoad === 'reset' ===> setting form to load using useState (line 10)*/}
            {formLoad === "reset" && (
              <PasswordReset
                handleOnChange={handleOnChange}
                email={email}
                password={password}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
              />
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
