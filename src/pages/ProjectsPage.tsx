import { Container } from "react-bootstrap";
import useGetCollection from "../hooks/useGetCollection";
import { projectCol } from "../services/firebase";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    const { data: projectData } = useGetCollection(projectCol);

    return (
        <div className="projects-page">
            {projectData && (
                <>
                    <Container className="py-4">
                        <h1 className="py-4">Projects</h1>
                        <ProjectCard />
                    </Container>
                </>
            )}
        </div>
    );
};

export default ProjectsPage;
