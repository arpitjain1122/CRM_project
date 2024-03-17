import React from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard"></PageBreadcrumb>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new Ticket
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center  mb-2">
          <div>Total Tickets : 50</div>
          <div>Pending Tickets : 50</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets}></TicketTable>
        </Col>
      </Row>
    </Container>
  );
};
