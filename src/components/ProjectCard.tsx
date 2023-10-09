import { Card, Col, Row } from "react-bootstrap";
import useGetCollection from "../hooks/useGetCollection";
import { useState } from "react";
import { Offcanvas, Image } from "react-bootstrap"
import { projectCol } from "../services/firebase"
import { Project } from "../types/projects.types";
import { Link } from "react-router-dom";
import useThemeContext from "../hooks/useThemeContext";

const ProjectCard = () => {
    const [show, setShow] = useState(false)
    const [selectedProject, setSelectedProject] = useState<Project>()

    const { data: projectData } = useGetCollection(projectCol);
    const { isDarkMode } = useThemeContext();

    const offCanvasClass = isDarkMode ? 'dark-offcanvas' : 'light-offcanvas';

    const handleClose = () => setShow(false)

    const handleShow = (project: Project) => {
        setSelectedProject(project);
        setShow(true);
    };

    return (
        <div className="project-card">
            {projectData && (
                <>
                    <Row xs={1} md={2}>
                        {projectData?.map((project) => (
                            <Col key={project.title} className="p-2">
                                <Card onClick={() => handleShow(project)}>
                                    <Card.Body>
                                        {project.projectImages?.map((image) => (
                                            <Image key={image.url} src={image.url} />
                                        ))}
                                        <div className="overlay">
                                            <div className="text px-5">
                                                <Card.Title>{project.title}</Card.Title>
                                                <p>{project.shortAbout}</p>
                                                <div className="tech">
                                                    <p className="d-flex flex-wrap">
                                                        {project.tech.slice(0, 3).map((techItem, index) => (
                                                            <span className="d-block m-1" key={index}>{techItem}</span>
                                                        ))}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Offcanvas className={`offcanvas ${offCanvasClass}`} placement={'end'} show={show} onHide={handleClose}>
                        {selectedProject && (
                            <>
                                <Offcanvas.Header>
                                    <button className="none-button" type="button" onClick={handleClose}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M14.0055 7.835L10.1255 11.715L14.0055 15.595C14.098 15.6876 14.1715 15.7975 14.2216 15.9185C14.2717 16.0394 14.2975 16.1691 14.2975 16.3C14.2975 16.4309 14.2717 16.5606 14.2216 16.6815C14.1715 16.8025 14.098 16.9124 14.0055 17.005C13.9129 17.0976 13.803 17.171 13.682 17.2211C13.561 17.2712 13.4314 17.297 13.3005 17.297C13.1695 17.297 13.0399 17.2712 12.9189 17.2211C12.798 17.171 12.688 17.0976 12.5955 17.005L8.00546 12.415C7.91276 12.3225 7.83921 12.2126 7.78903 12.0916C7.73885 11.9707 7.71302 11.841 7.71302 11.71C7.71302 11.579 7.73885 11.4494 7.78903 11.3284C7.83921 11.2074 7.91276 11.0975 8.00546 11.005L12.5955 6.415C12.688 6.3223 12.7979 6.24875 12.9188 6.19857C13.0398 6.14839 13.1695 6.12256 13.3005 6.12256C13.4314 6.12256 13.5611 6.14839 13.6821 6.19857C13.8031 6.24875 13.913 6.3223 14.0055 6.415C14.3855 6.805 14.3955 7.445 14.0055 7.835Z"></path>
                                        </svg>
                                    </button>
                                    <Offcanvas.Title onClick={handleClose}>Back to projects</Offcanvas.Title>
                                </Offcanvas.Header>
                                {/* <hr className="mx-4 my-0" /> */}
                                <Offcanvas.Body>
                                    <h3>{selectedProject.title}</h3>
                                    <p>{selectedProject.about}</p>

                                    <div className="offcanvas-image">
                                        {selectedProject.projectImages?.map((image) => (
                                            <Image key={image.url} src={image.url} />
                                        ))}
                                    </div>

                                    <h4 className="pt-4">About</h4>
                                    <p>{selectedProject.shortAbout}</p>

                                    <h4 className="pt-4">Technologies</h4>
                                    <div className="tech">
                                        <p className="d-flex flex-wrap m-0">
                                            {selectedProject.tech.map((techItem, index) => (
                                                <span className="d-block m-1" key={index}>{techItem}</span>
                                            ))}
                                        </p>
                                    </div>

                                    <h4 className="pt-4">Website</h4>
                                    <Link to={selectedProject.website} target="_blank">
                                        <p>{selectedProject.website}</p>
                                    </Link>

                                    <h4 className="pt-4">Github</h4>
                                    <Link to={selectedProject.github} target="_blank">
                                        <p>{selectedProject.github}</p>
                                    </Link>
                                </Offcanvas.Body>

                                <Offcanvas.Header className="project-footer">
                                    <Link to={selectedProject.website} target="_blank">
                                        <p>Check out result</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                                        </svg>
                                    </Link>
                                </Offcanvas.Header>
                            </>
                        )}
                    </Offcanvas>

                </>
            )}
        </div>
    )
}

export default ProjectCard
