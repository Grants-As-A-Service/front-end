import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import ProjectTag from "../onboarding/ProjectTag";
import data from "../../static/FormData.json";
import { useState } from "react";

export default function ProjectOnbaord() {
    const tags = data.tags;
    const [open, setOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const updateTags = function (newTag: string) {
        setSelectedTags([...selectedTags, newTag]);
    };
    return (
        <>
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
