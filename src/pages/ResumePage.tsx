import { Col, Container, Image, Row } from "react-bootstrap";
import documentPdf from "../assets/CV.pdf";

const Resume = () => {
  return (
    <div>
      <Container className="py-4 resume-page">
        <h1 className="py-4">Resumé</h1>

        <Row>
          <Col>
            <a target="_blank" rel="noreferrer" href={documentPdf}>
              <p>
                Go to pdf download
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </p>
            </a>

            <div className="resume">
              <Image src="src/assets/CV.jpeg"></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
