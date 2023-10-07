import { Button, Card, Col, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const ContactPage = () => {

    return (
        <div>
            <Container className="py-4 contact-page">
                <h1 className="py-4">Contact</h1>

                <Col>
                    <Card>
                        <Card.Body>
                            <p>Get in touch or shoot me an email directly on <b>sonja.sviden@live.com</b></p>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={5} placeholder="Message" />
                                </Form.Group>

                                <Button type="submit">Send</Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Link to="/"><span className="mx-2">&#8592;</span>Go back home</Link>
                </Col>

            </Container>
        </div>
    )
}

export default ContactPage
