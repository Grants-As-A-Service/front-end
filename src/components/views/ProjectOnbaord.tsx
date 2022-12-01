import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import ProjectTag from "../onboarding/ProjectTag";
import data from "../../static/FormData.json";
import { useState } from "react";
import Icon from "../items/icon";
import { SwapScreenADT } from "../content-stack/NavigationStack";

export default function ProjectOnbaord({ swapScreen }: { swapScreen: SwapScreenADT }) {
    const tags = data.tags;
    const [open, setOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const updateTags = function (newTag: string) {
        setSelectedTags([...selectedTags, newTag]);
    };
    return (
        <>
            <div style={{ position: "absolute" }}>
                <div className="iconHover" style={{ position: "relative", top: "20px", left: "20px" }} onClick={() => swapScreen("Home")}>
                    <Icon name="arrow_back" />
                </div>
            </div>
            <Container>
                <Row className="mt-5">
                    <Col xs={12}>
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
                    </Col>
                </Row>
                <Row className="p-5">
                    {selectedTags.map((tag) => (
                        <Col xs={3}>
                            <ProjectTag label={tag} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
