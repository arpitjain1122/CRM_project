import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import PropTypes from "prop-types";
import { shortText } from "../../utils/validation";

const initialFrmData = {
  subject: "",
  issuedate: "",
  details: "",
};
const initialFrmError = {
  subject: false,
  issuedate: false,
  details: false,
};

export const AddTicket = () => {
  // capturing the value using useState
  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmDataError, setfrmDataError] = useState(initialFrmError);

  useEffect(() => {}, [frmData, frmDataError]);

  // every time you enter something we need to receive the data
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
    //console.log(name, value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setfrmDataError(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject);

      setfrmDataError({
        ...initialFrmError,
        subject : !isSubjectValid,
      });

    console.log("form submit request received", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket"></PageBreadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            frmDataError={frmDataError}
          ></AddTicketForm>
        </Col>
      </Row>
    </Container>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
};
