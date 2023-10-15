import { Card, Col, Row } from "react-bootstrap";
import useGetCollection from "../hooks/useGetCollection";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { projectCol } from "../services/firebase";
import { Project } from "../types/projects.types";
import OffCanvas from "./OffCanvas";

const ProjectCard = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>();

  const { data: projectData } = useGetCollection(projectCol);

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
                              <span className="d-block m-1" key={index}>
                                {techItem}
                              </span>
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
          <OffCanvas
            setShow={setShow}
            show={show}
            selectedProject={selectedProject}
          />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
