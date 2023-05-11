import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

function Home() {
  const [pageType, setPageType] = useState("ifs");
  return (
    <>
      <section className="Home p-md-5 bg-light">
        <Container fluid className="">
          <Row>
            <Col sm={12} className="text-center mb-5">
              <h1 style={{ textTransform: "uppercase" }}>
                React Js - using usestate hook
              </h1>
              <p className="small">
                <span className="fw-bold">Note :</span> Here is the small demo
                page
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="">
          <Row>
            <Col sm={5} className="left">
              <ButtonGroup className="mb-5" aria-label="Basic example">
                <Button
                  className="rounded-pill me-3"
                  variant="primary"
                  onClick={() => {
                    setPageType("ifs");
                  }}
                >
                  Business Analysis
                </Button>
                <Button
                  className="rounded-pill"
                  variant="warning"
                  onClick={() => {
                    setPageType("ips");
                  }}
                >
                  Customers
                </Button>
                <Button
                  className="rounded-pill ms-3"
                  variant="danger"
                  onClick={() => {
                    setPageType("ias");
                  }}
                >
                  Business Targets
                </Button>
              </ButtonGroup>
              {pageType === "ifs" && (
                <>
                  <h1>Business Analysis for Growth</h1>
                  <p>
                    Business growth analysis is a type of analysis that aims to
                    identify the growth pattern of a business. It examines
                    various units of the business, such as the product the
                    company offers, marketing techniques, environmental studies,
                    human resources, customer service practices, consumer
                    studies, and the study of the competition. The analysis will
                    reveal any existing needs within the company that will
                    require work for stronger growth, and these needs will be
                    addressed through the application of targeted business
                    solutions to the areas of concentration to help stimulate
                    better growth.
                  </p>
                </>
              )}
              {pageType === "ips" && (
                <>
                  <h1>Customer Retention Rate</h1>
                  <p>
                    Customer retention is a crucial metric that businesses use
                    to measure customer loyalty over time and gauge overall
                    success. To boost customer retention, companies can
                    implement various tactics to reduce the number of customers
                    lost in a period and improve their experiences to ensure
                    that customers remain loyal to the business.2 In an ideal
                    world, a 100% retention rate is the goal.0 Customer
                    retention refers to customers who deliberately pay for
                    products or services more than once over a period of time. A
                    single loyal customer making several purchases over a year
                    is ultimately more influential than several shoppers that
                    buy once and never again.
                  </p>
                </>
              )}
              {pageType === "ias" && (
                <>
                  <h1>Business Targets</h1>
                  <p>
                    Every business needs to set targets for success, but how do
                    you set the right targets for your business? It starts with
                    you setting the overall direction, determining where you
                    want your company to go and documenting it in an
                    easy-to-understand strategy summary.
                  </p>
                </>
              )}
            </Col>
            <Col sm={4} className="right mx-auto">
              {pageType === "ifs" && (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8572/8572077.png"
                    className="img-fluid"
                    alt=""
                  />
                </>
              )}
              {pageType === "ips" && (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10570/10570114.png"
                    className="img-fluid"
                    alt=""
                  />
                </>
              )}
              {pageType === "ias" && (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/10485/10485165.png"
                    className="img-fluid"
                    alt=""
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
