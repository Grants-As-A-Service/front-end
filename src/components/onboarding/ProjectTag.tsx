import { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Label } from "reactstrap";

interface ProjectTagProps {
    label: string
};

export default function(props: ProjectTagProps) {
    const [strength, setStrength] = useState(5);
    const [saved, setSaved] = useState(false);
    return (<>
        <Card className="m-2">
            <CardHeader>
                <h4>{props.label}</h4>
            </CardHeader>
            <CardBody>
                <Label for="quantity">Strength: {strength}</Label>
                <Input type="range"
                    id="strength"
                    name="strength"
                    onChange={e => {
                        setStrength(Math.floor(parseInt(e.target.value) / 10));
                        if (saved) setSaved(false);
                    }}
                />
                <Input type="text"
                    placeholder="Description"
                />
            </CardBody>
            <CardFooter>
                <Button hidden={saved}
                    className="me-2"
                    color="primary"
                    onClick={() => {setSaved(true)}}
                >Save</Button>
                <Button color="secondary" outline>Remove</Button>
            </CardFooter>
        </Card>
    </>)
}