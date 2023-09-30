import { Card, Col, Row } from "react-bootstrap";
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
        <div>
            {projectData && (
                <>
                    <Row xs={1} md={3}>
                        {projectData?.map((project) => (
                            <Col>
                                <Card onClick={handleShow}>
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

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
                                    {project.projectImages?.map((image) => (
                                        <Image src={image.url} />
                                    ))}
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
