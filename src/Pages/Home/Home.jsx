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
                React Js - div hide show using usestate hook
              </h1>
              <p className="small">
                <span className="fw-bold">Disclaimer :</span>The information
                contained on this website is for general information purposes
                only and just presentation purpose only. We provided content
                from wikipedia, we make no representations or warranties of any
                kind, express or implied, about the completeness, accuracy,
                reliability, suitability or availability with respect to the
                website or the information, products, services, or related
                graphics contained on the website for any purpose. Any reliance
                you place on such information is therefore strictly at your own
                risk.
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid className="">
          <Row>
            <Col sm={6} className="left">
              <ButtonGroup className="mb-3" aria-label="Basic example">
                <Button
                  className="rounded-pill me-3"
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setPageType("ifs");
                  }}
                >
                  Best IFS Officer
                </Button>
                <Button
                  className="rounded-pill"
                  variant="warning"
                  size="lg"
                  onClick={() => {
                    setPageType("ips");
                  }}
                >
                  Best IPS Officer
                </Button>
                <Button
                  className="rounded-pill ms-3"
                  variant="danger"
                  size="lg"
                  onClick={() => {
                    setPageType("ias");
                  }}
                >
                  Best IAS Officer
                </Button>
              </ButtonGroup>
              {pageType === "ifs" && (
                <>
                  <h1>S. Jaishankar</h1>
                  <p>
                    Subrahmanyam Jaishankar is an Indian diplomat and politician
                    serving as the Minister of External Affairs of the
                    Government of India since 30 May 2019, became the second
                    ever diplomat to be appointed as External Affairs minister,
                    after Natwar Singh.
                  </p>
                  <h5>Diplomatic career</h5>
                  <p>
                    After joining the Indian Foreign Service in 1977, Jaishankar
                    served as third secretary and second secretary in the Indian
                    mission to the Soviet Union in Moscow from 1979 to 1981,
                    where he studied Russian. He returned to New Delhi, where he
                    worked as a special assistant to the diplomat Gopalaswami
                    Parthasarathy and as undersecretary in the Americas division
                    of India's Ministry of External Affairs, dealing with United
                    States. He was part of the team that resolved the dispute
                    over the supply of US nuclear fuel to the Tarapur Power
                    Stations in India.[10] From 1985 to 1988 he was the first
                    secretary at the Indian embassy in Washington, D.C.
                  </p>
                  <p>
                    From 1988 to 1990, he served in Sri Lanka as First Secretary
                    and political adviser to the Indian Peacekeeping Force
                    (IPKF).[20][21] From 1990 to 1993, he was Counsellor
                    (Commercial) at the Indian mission in Budapest. Returning to
                    New Delhi, he served as Director (East Europe) in the
                    Ministry of External Affairs and as press secretary and
                    speechwriter for President of India Shankar Dayal Sharma.
                  </p>
                  <p></p>
                </>
              )}
              {pageType === "ips" && (
                <>
                  <h1>Ajit Doval</h1>
                  <p>
                    Ajit Kumar Doval KC, PPM is the National Security Advisor of
                    India to the Prime minister Narendra Modi. He was
                    Intelligence Bureau chief and Indian Police Service officer
                    from Kerala cadre. He previously served as the director of
                    the IB in 2004–05, after working for a decade as the head of
                    its operation wing
                  </p>
                  <h5>Police and intelligence career</h5>
                  <p>
                    Doval joined the Indian Police Service (IPS) in 1968 in the
                    Kerala cadre as the ASP of Kottayam district.[15][16] He was
                    posted in north-east India.[when?] He was a spy of IB, lived
                    in Pakistan for seven years and did espionage.
                  </p>
                  <p>
                    He was actively involved in anti-insurgency operations in
                    Punjab.
                  </p>
                  <p>
                    Doval worked in Thalassery, Kerala, for a few months in
                    1972, before joining the central service.[20] He has the
                    experience of being involved in the termination of all 15
                    hijackings of Indian Airlines aircraft from 1971 to
                    1999.[21] In the headquarters, he headed IB's operations
                    wing for over a decade and was founder Chairman of the Multi
                    Agency Centre (MAC), as well as of the Joint Task Force on
                    Intelligence (JTFI)
                  </p>
                </>
              )}
              {pageType === "ias" && (
                <>
                  <h1>Smita Sabharwal</h1>
                  <p>
                    Smita Sabharwal is an Indian Administrative Service officer
                    of 2001 batch belonging to Telangana cadre. She is popularly
                    known as The People’s Officer for addressing citizen issues
                    by involving people. She is the first lady IAS Officer to be
                    appointed to the Chief Minister's Office.
                  </p>
                  <p>
                    After completing the administrative training in Lal Bahadur
                    Shastri National Academy of Administration, Mussoorie in
                    2001, Sabharwal was trained in Adilabad district during her
                    probation.
                  </p>
                  <h5>As District Collecto</h5>
                  <p>
                    Smita Sabharwal worked as Joint Collector of Kurnool and
                    Joint collector of Hyderabad.
                  </p>
                  <p>
                    In April 2011, she took charge as District Collector,
                    Karimnagar district where she made significant contribution
                    in the Health and Education sector. The health initiative to
                    improve institutional deliveries in the public sector
                    popularly known as Ammalalana, was started and successfully
                    implemented in the district. It became a role model for many
                    health initiatives of ‘high risk pregnancy management
                    targeting, IMR and MMR’ in NRHM of Government of
                    India.[12][13] This initiative was also nominated as one of
                    the best initiatives for Prime Minister's award for
                    excellence in public administration.
                  </p>
                </>
              )}
            </Col>
            <Col sm={6} className="right">
              {pageType === "ifs" && (
                <>
                  <img
                    src="https://imgnew.outlookindia.com/public/uploads/articles/2019/6/5/Jaishankar_20190617.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </>
              )}
              {pageType === "ips" && (
                <>
                  <img
                    src="https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_15744008/thumb.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </>
              )}
              {pageType === "ias" && (
                <>
                  <img
                    src="https://governancemantra.com/wp-content/uploads/2020/12/IAS-Smita-Sabharwal.jpg"
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
