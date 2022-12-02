import { useContext, useState, useEffect } from "react";
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Button } from "reactstrap";
import { getProjects } from "../../network/Querys";
import { Account, AuthContext } from "../../providers/AuthProvider";
import { MainStackScreens, ProjectADT, SwapScreenADT } from "../../types";

const LoggedInBar = ({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) => {
    const [projects, setProjects] = useState<Array<ProjectADT>>([]);
    const { accountData } = useContext(AuthContext);

    const [open, setOpen] = useState("");

    const toggle = (id: string) => {
        if (open === id) {
            setOpen("");
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {
        (async () => {
            setProjects(await getProjects());
        })();
    }, []);

    return (
        <>
            {/*@ts-ignore*/}
            <UncontrolledAccordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <div style={{ marginTop: "5vh", marginBottom: "5vh", textAlign: "center", fontSize: "15px" }}>
                        <text>Welcome {(accountData as Account).name}</text>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="1">Projects</AccordionHeader>
                        <AccordionBody accordionId="1">
                            {projects.length === 0 ? (
                                <p className="fs-7" style={{ textAlign: "center" }}>
                                    no current projects
                                </p>
                            ) : (
                                <>
                                    {projects.map((project) => (
                                        <p className="fs-7 p">{project.title}</p>
                                    ))}
                                </>
                            )}
                            <Button
                                color="primary"
                                onClick={() => {
                                    swapScreen("ProjectOnbaord");
                                }}
                            >
                                new
                            </Button>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                        <AccordionBody accordionId="2">
                            <strong>This is the second item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting that just about
                            any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                        <AccordionBody accordionId="3">
                            <strong>This is the third item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default variables. It&#39;s also worth noting that just about
                            any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                </AccordionItem>
            </UncontrolledAccordion>
        </>
    );
};

export default function SideBar({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div className="sideBar">
            <div style={{ marginTop: "5vh", marginBottom: "5vh", textAlign: "center", fontSize: "15px" }}>
                {isLoggedIn ? <LoggedInBar swapScreen={swapScreen} /> : <text>login or register to view our services</text>}
            </div>
        </div>
    );
}
