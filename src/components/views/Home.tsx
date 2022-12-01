import { useContext } from "react";
import { Button } from "reactstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { SwapScreenADT } from "../content-stack/NavigationStack";

const LandingPage = ({ swapScreen }: { swapScreen: SwapScreenADT }) => {
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

const HomeLoggedIn = ({ swapScreen }: { swapScreen: SwapScreenADT }) => {
    const profileData = {}; //some redux fetch or just a provider

    return <div>Some dashboard view</div>;
};

export default function Home({ swapScreen }: { swapScreen: SwapScreenADT }) {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <HomeLoggedIn swapScreen={swapScreen} /> : <LandingPage swapScreen={swapScreen} />;
}
