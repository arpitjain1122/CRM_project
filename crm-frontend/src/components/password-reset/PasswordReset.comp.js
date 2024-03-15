import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.style.css";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export const PasswordReset = ({
  handleOnChange,
  email,
  formSwitcher,
  handleOnResetSubmit,
}) => {
  {
    /* object destruction */
  }

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={7}>
            <h1 className="text-info">Reset Password</h1>
            <hr></hr>
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
              </Form.Group>
              <br></br>
              <Button type="submit">Reset Password</Button>
              <hr></hr>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={10} className="text-center">
            <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
