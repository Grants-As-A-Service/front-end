import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { getProjects } from "../../network/Querys";
import { MainStackScreens, ProjectADT, SwapScreenADT } from "../../types";


export default ({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) => {
    const [projects, setProjects] = useState<Array<ProjectADT>>([]);

    useEffect(() => {
        (async () => {
            setProjects(await getProjects());       
        })();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3>My Projects</h3>
                    </Col>
                </Row>
                <Row>
                    {projects.map((project, i) => {
                        return <Col key={i} xs={12} md={6} lg={3}>
                            <Card key={i} className="mt-4">
                                <CardHeader>
                                    <CardTitle tag="h5">{project.name}</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardText>{project.description}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <Button color="primary" onClick={() => swapScreen("ProjectView", { project })}>
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    })}
                    <Col xs={12} md={6} lg={3} className="pt-4">
                        <Button color="success" outline onClick={() => swapScreen("ProjectOnboard")}>
                            + Add Project
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};