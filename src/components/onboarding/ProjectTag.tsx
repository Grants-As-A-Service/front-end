import { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Label } from "reactstrap";

interface ProjectTagProps {
    label: string;
    update: (...args: any) => void;
}

export default function ProjectTag(props: ProjectTagProps) {
    const [strength, setStrength] = useState(5);
    const [saved, setSaved] = useState(false);
    const [description, setDescription] = useState("");

    return (
        <>
            <Card className="m-2">
                <CardHeader>
                    <h4>{props.label}</h4>
                </CardHeader>
                <CardBody>
                    <Label for="quantity">Strength: {strength}</Label>
                    <Input
                        type="range"
                        id="strength"
                        name="strength"
                        onChange={(e) => {
                            setStrength(Math.floor(parseInt(e.target.value) / 10));
                            if (saved) setSaved(false);
                        }}
                    />
                    <Input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </CardBody>
                <CardFooter>
                    <Button
                        hidden={saved}
                        className="me-2"
                        color="primary"
                        onClick={() => {
                            props.update({ name: props.label, strength, description }, "impactTags");
                            setSaved(true);
                        }}
                    >
                        Save
                    </Button>
                    <Button color="secondary" outline onClick={() => {
                        props.update(props.label, "impactTags", 'remove');
                    }}>
                        Remove
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
