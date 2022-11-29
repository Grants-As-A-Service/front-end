import { useState } from "react";
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import { swapScreen } from "../content-stack/NavigationStack";

export default function SideBar() {
    const [open, setOpen] = useState("");
    const toggle = (id: string) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };
    return (
        <div className="sideBar">
            {/*@ts-ignore*/}
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <div style={{ marginTop: "5vh", marginBottom: "5vh", textAlign: 'center', fontSize: '20px' }}>
                        <text>Our Services</text>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="1">Apply For a grant</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <strong>This is the first item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting that just about any
                        HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting that just about any
                        HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>This is the third item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting that just about any
                        HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
