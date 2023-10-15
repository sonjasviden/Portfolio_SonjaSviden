import { useEffect } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactPage = () => {
  useEffect(() => {
    // Lägg till LightWidget-scriptet till din DOM
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Ta bort scriptet när komponenten avmonteras
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Container className="py-4 contact-page">
        <h1 className="py-4">Contact</h1>

        <Col>
          <Card>
            <Card.Body>
              <p>
                Get in touch or shoot me an email directly on{" "}
                <b>sonja.sviden@live.com</b>
              </p>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>

                <Button type="submit">Send</Button>
              </Form>
            </Card.Body>
          </Card>

          <Link to="/">
            <span className="mx-2">&#8592;</span>Go back home
          </Link>
        </Col>
        {/* <iframe
          src="//lightwidget.com/widgets/903a37a5bd965517b075d011de10ab32.html"
          allowTransparency
          className="lightwidget-widget"
        /> */}
      </Container>
    </div>
  );
};

export default ContactPage;
