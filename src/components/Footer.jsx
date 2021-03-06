// import react from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <Container className=" py-4">
          {/* <Row className=" footerbox ">
            <Col xs={4} className="footercolumns">
              <ul className="footerText">
                <li className="footerlist">FAQ</li>
                <li className="footerlist">Guidelines</li>
                <li className="footerlist">Privacy & Terms </li>
                <li className="footerlist">Safety Center</li>
              </ul>
            </Col>
            <Col xs={4} className="footercolumns">
              <ul className="footerText">
                <li className="footerlist">Accessibility</li>
                <li className="footerlist">Careers</li>
                <li className="footerlist">Ad Choices</li>
                <li className="footerlist">Mobile</li>
              </ul>
            </Col>

            <Col xs={4} className="footercolumns">
              <ul className="footerText">
                <li className="footerlist footer-flex">
                  <i className="bi bi-gear-fill fs-5 mr-3"></i>{" "}
                  <span>
                    <a href="http://google.com">Manage your account</a>
                    <p className="text-muted">Go to your Settings</p>
                  </span>
                </li>
                <li className="selectlanguage">
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Select Language</Form.Label>
                    <Form.Control as="select">
                      <option>English</option>
                      <option>Deutsch</option>
                      <option>French</option>
                      <option>Arabic</option>
                      <option>Italian</option>
                    </Form.Control>
                  </Form.Group>
                </li>
              </ul>
            </Col>
          </Row> */}
          <Row className="footerText mt-2">
            <p className="d-flex justify-content-center copyright">?? 2021-2022 BusolaDev | All Rights reserved</p>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
