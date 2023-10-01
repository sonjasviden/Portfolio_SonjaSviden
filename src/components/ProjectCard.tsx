import { Card, Col, Container, Row } from "react-bootstrap";
import useGetCollection from "../hooks/useGetCollection";
import { useState } from "react";
import { Offcanvas, Image } from "react-bootstrap"
import { projectCol } from "../services/firebase"

const ProjectCard = () => {
    const { data: projectData } = useGetCollection(projectCol);
    const [show, setShow] = useState(false)


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="project-card">
            {projectData && (
                <>
                    <Container className="px-5">
                        <Row xs={1} md={2}>
                            {projectData?.map((project) => (
                                <Col className="p-2">
                                    <Card onClick={handleShow}>
                                        <Card.Body>
                                            {project.projectImages?.map((image) => (
                                                <Image src={image.url} />
                                            ))}
                                            <div className="overlay">
                                                <div className="text px-5">
                                                    <Card.Title>{project.title}</Card.Title>
                                                    <p>{project.about}</p>
                                                    <div className="tech d-flex">
                                                        <span className="d-block m-1">{project.tech[0]}</span>
                                                        <span className="d-block m-1">{project.tech[1]}</span>
                                                        <span className="d-block m-1">{project.tech[2]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <Offcanvas show={show} onHide={handleClose} backdrop={false}>
                        {projectData?.map((project) => (
                            <>
                                <Offcanvas.Header closeButton className="py-0 px-4">
                                    <Offcanvas.Title>
                                        {project.title}
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <h2>{project.about}</h2>
                                </Offcanvas.Body>
                            </>
                        ))}
                    </Offcanvas>
                </>
            )}
        </div>
    )
}

export default ProjectCard
