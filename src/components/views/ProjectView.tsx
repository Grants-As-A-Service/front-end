import { Col, Container, Row } from "reactstrap";
import { MainStackScreens, ProjectADT, SwapScreenADT } from "../../types";
import Icon from "../items/icon";

export default function ProjectView({ swapScreen, project }: { swapScreen: SwapScreenADT<MainStackScreens>; project: ProjectADT }) {
    const formatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
    });
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="iconHover" onClick={() => swapScreen("Home")}>
                            <Icon name="arrow_back" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h2>{project.name}</h2>
                </Row>
                <Row>
                    <h4>Project Details</h4>
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Attribute</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{project.name}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{project.description}</td>
                            </tr>
                            <tr>
                                <td>CapEx Required</td>
                                <td>{formatter.format(project.capex)}</td>
                            </tr>
                            <tr>
                                <td>Annaul Operating Expenses</td>
                                <td>{formatter.format(project.annualOpex)}</td>
                            </tr>
                            <tr>
                                <td>Start Date</td>
                                <td>{new Date(project.startDate).toDateString()}</td>
                            </tr>
                            <tr>
                                <td>Start Date</td>
                                <td>{new Date(project.endDate).toDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
                <Row>
                <h4>Impact Tags</h4>
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Strength</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {project.tags.map(tag => {
                                return <tr>
                                    <td>{tag.name}</td>
                                    <td>{tag.strength}</td>
                                    <td>{tag.description}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </>
    );
}
