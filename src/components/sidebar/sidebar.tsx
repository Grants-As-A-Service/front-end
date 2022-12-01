import { useContext, useState, useEffect } from "react";
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "reactstrap";
import { getProjects } from "../../network/Querys";
import { Account, AuthContext } from "../../providers/AuthProvider";
import { ProjectADT } from "../../types";

const LoggedInBar = () => {
    const [projects, setProjects] = useState<Array<ProjectADT>>([]);

    useEffect(() => {
        (async () => {
            setProjects(await getProjects());
        })();
    }, []);

    return (
        <>
            <AccordionItem>
                <AccordionHeader targetId="1">Projects</AccordionHeader>
                <AccordionBody accordionId="1">
                    {projects.map((project) => (
                        <p className="fs-7 p">{project.title}</p>
                    ))}
                    
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
        </>
    );
};

export default function SideBar() {
    const { isLoggedIn, accountData } = useContext(AuthContext);

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
                    <div style={{ marginTop: "5vh", marginBottom: "5vh", textAlign: "center", fontSize: "15px" }}>
                        {isLoggedIn ? <text>Welcome {(accountData as Account).name}</text> : <text>login or register to view our services</text>}
                    </div>
                </AccordionItem>
                {isLoggedIn ? <LoggedInBar /> : <></>}
            </Accordion>
        </div>
    );
}
