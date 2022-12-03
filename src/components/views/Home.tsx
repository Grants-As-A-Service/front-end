import { useContext } from "react";
import { Button } from "reactstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { MainStackScreens, SwapScreenADT } from "../../types";
import Projects from "../home/Projects";

const HomeLoggedIn = ({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) => {
    const { accountData } = useContext(AuthContext);

    return (
        <div>
            <p className="fs-1 p">Dashboard</p>
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
}