import {
    Button,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Row,
} from "reactstrap";
import ProjectTag from "../onboarding/ProjectTag";
import data from "../../static/FormData.json";
import { useState } from "react";
import Icon from "../items/icon";
import { SwapScreenADT, MainStackScreens, ProjectADT, ImpactTag } from "../../types";
import { onBoardProject } from "../../network/Querys";

export default function ProjectOnbaord({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) {
    const tags = data.tags;
    const [open, setOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const updateTags = function (newTag: string) {
        setSelectedTags([...selectedTags, newTag]);
    };

    const [projectFeilds, setProjectFeilds] = useState<ProjectADT>(
        () =>
            ({
                tags: new Array<ImpactTag>(),
            } as ProjectADT)
    );

    const toggleProjectFeild = (data: any, key: keyof ProjectADT, remove?: string) => {
        setProjectFeilds((oldProjectFeild) => {
            if (remove) {
                let newTags = oldProjectFeild.tags.filter((impactTag: ImpactTag) => {
                    return impactTag.name !== data;
                });
                setSelectedTags((oldSelectedTags) => {
                    return oldSelectedTags.filter(tag => tag !== data)
                })

                oldProjectFeild.impactTags = newTags;
            } else {
                if (key === "tags") {
                    oldProjectFeild[key].push(data);
                } else {
                    oldProjectFeild[key] = data;
                }
            }
            console.log(oldProjectFeild);
            return oldProjectFeild;
        });
    };

    const [descriptionWC, setDescriptionWC] = useState(0);

    const submit = async () => {
        onBoardProject(projectFeilds).then(() => {
            swapScreen('Home')
        })
    };

    return (
        <>
            <div style={{ position: "absolute" }}>
                <div className="iconHover" style={{ position: "relative", top: "20px", left: "20px" }} onClick={() => swapScreen("Home")}>
                    <Icon name="arrow_back" />
                </div>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <div className="d-flex w-75 flex-column mt-5">
                        <h3>Add New Project</h3>
                        <Form>
                            <FormGroup>
                                <Label for="name">Project Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="New Project"
                                    onChange={(e) => toggleProjectFeild(e.target.value, "name")}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Project Description</Label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    placeholder="This project is..."
                                    value={projectFeilds.description}
                                    onChange={(e) => {
                                        toggleProjectFeild(e.target.value.length > 3000 ? projectFeilds.description : e.target.value, "description");
                                        setDescriptionWC(e.target.value.length);
                                    }}
                                ></textarea>
                                <p>{descriptionWC}/3000</p>
                            </FormGroup>
                            <FormGroup>
                                <Label for="capex">Capital Investment Required</Label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="capex"
                                        className="form-control"
                                        placeholder="Capital Investment Required"
                                        value={projectFeilds.capex}
                                        onChange={(e) => toggleProjectFeild(e.target.value, "capex")}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="annualOpex">Annual Operating Expenses</Label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="annualOpex"
                                        className="form-control"
                                        placeholder="Annual Operating Expenses"
                                        value={projectFeilds.annualOpex}
                                        onChange={(e) => toggleProjectFeild(e.target.value, "annualOpex")}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Label for="startDate">Start Date</Label>
                                        <Input type="date" id="startDate" onChange={(e) => toggleProjectFeild(e.target.value, "startDate")} />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Label for="endDate">Start Date</Label>
                                        <Input type="date" id="endDate" onChange={(e) => toggleProjectFeild(e.target.value, "endDate")} />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                        <hr></hr>
                        <h3 className="mt-2">Impact Tags</h3>
                        <p>Add impact tags to demonstrate how your project aligns with social objectives.</p>
                        <Dropdown
                            isOpen={open}
                            toggle={() => {
                                setOpen(!open);
                            }}
                        >
                            <DropdownToggle color="success" outline caret>
                                Add Impact Tag
                            </DropdownToggle>
                            <DropdownMenu left>
                                {tags.map((tag) => (
                                    <DropdownItem
                                        onClick={() => {
                                            updateTags(tag);
                                        }}
                                    >
                                        {tag}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Row className="p-5">
                            {selectedTags.map((tag) => (
                                <Col xs={12} lg={4} md={6}>
                                    <ProjectTag label={tag} update={toggleProjectFeild} />
                                </Col>
                            ))}
                        </Row>
                        <Button style={{ width: "150px" }} color="success" onClick={() => submit()}>
                            Save Project
                        </Button>
                    </div>
                </Row>
            </Container>
        </>
    );
}
