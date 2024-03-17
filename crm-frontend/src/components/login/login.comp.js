import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.style.css";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export const LoginForm = ({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,f
}) => {
  {
    /* object destruction */
  }

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={5}>
            <h1 className="text-info">Client Login</h1>
            <hr></hr>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleOnChange}
                  required
                />

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="password"
                    required
                  />
                </Form.Group>
              </Form.Group>
              <br></br>
              <Button type="submit">Login</Button>
              <hr></hr>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={10} className="text-center">
            <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
