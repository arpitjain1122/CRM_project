import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./add-ticket-form.style.css";
import { shortText } from "../../utils/validation";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmData,
  frmDataError,
}) => {
  console.log(frmData);
  return (
    <div className="d-flex justify-content-center align-items-center add-new-ticket">
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={10}>
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr></hr>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Subject
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    name="subject"
                    placeholder="subject"
                    value={frmData.subject}
                    onChange={handleOnChange}
                    required
                  />

                  <Form.Text className="text-danger">
                    {frmDataError.subject && "Subject is required!"}
                  </Form.Text>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Issue Date
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="date"
                    name="issuedate"
                    value={frmData.issuedate}
                    onChange={handleOnChange}
                    required
                  />
                </Col>
                <br></br>
                <br></br>
              </Form.Group>

              <Form.Group>
                <Form.Label>Issue Found</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="details"
                  value={frmData.details}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>

              <br></br>

              <Button
                type="submit"
                className="d-grid col-12 mx-auto"
                variant="info"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
