import { Container } from "react-bootstrap";
import useGetCollection from "../hooks/useGetCollection";
import { projectCol } from "../services/firebase";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    const { data: projectData } = useGetCollection(projectCol);

    return (
        <>
            {projectData && (
                <>
                    <h1>Projects</h1>
                    <Container>
                        <ProjectCard />
                    </Container>
                </>
            )}
        </>
    );
};

export default ProjectsPage;
