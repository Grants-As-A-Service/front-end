import { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { getProjects } from "../../network/Querys";
import { AuthContext } from "../../providers/AuthProvider";
import { MainStackScreens, ProjectADT, SwapScreenADT } from "../../types";

const Projects = ({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) => {
    const [projects, setProjects] = useState<Array<ProjectADT>>([]);

    useEffect(() => {
        (async () => {
            setProjects(await getProjects());
        })();
    }, []);

    return (
        <>
            <p className="fs-5">Current Projects</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {projects.map((project, i) => (
                    <Card
                        key={i}
                        style={{
                            width: "18rem",
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">{project.title}</CardTitle>
                            <CardText>{project.description}</CardText>
                            <Button color="primary" onClick={() => swapScreen("ProjectView", { project })}>
                                View
                            </Button>
                        </CardBody>
                    </Card>
                ))}
                <Card
                    style={{
                        width: "18rem",
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">Create New</CardTitle>
                        <Button color="primary" onClick={() => swapScreen("ProjectOnbaord")}>
                            New
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

const HomeLoggedIn = ({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) => {
    
    return (
        <div>
            <p className="fs-1 p">DashBoard</p>
            <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px" }}>
                <Projects swapScreen={swapScreen} />
            </div>
        </div>
    );
};

const LandingPage = ({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) => {
    return (
        <div className="fitParent" style={{ display: "flex", justifyContent: "center", marginTop: "5vh" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "center",
                    width: "80%",
                    gap: "10px",
                }}
            >
                <p className="fs-1 p">Welcome to GAAS</p>
                <p className="fs-4 p">Getting Started</p>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "fit-content" }}>
                    <p className="fs-7" style={{ marginBottom: "0" }}>
                        Start by registering with us here
                    </p>
                    <Button color="primary" onClick={() => swapScreen("Registration")}>
                        Registration
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function Home({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <HomeLoggedIn swapScreen={swapScreen} /> : <LandingPage swapScreen={swapScreen} />;
};