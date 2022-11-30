import { useContext } from "react";
import { Button } from "reactstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { SwapScreenADT } from "../content-stack/NavigationStack";

const LandingPage = ({ swapScreen }: { swapScreen: SwapScreenADT }) => {
    return (
        <div style={{ padding: "1%", height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            <p className="fs-1">Welcome to GAAS</p>
            <div style={{ padding: "1%", height: "100%" }}>
                <div className="shadow-lg p-3 mb-5 bg-white rounded fitParent">
                    <Button color="primary" onClick={() => swapScreen("Registration")}>
                        Registration
                    </Button>
                    <Button color="primary" onClick={() => swapScreen("ProjectOnbaord")}>
                        Project Onboarding
                    </Button>
                </div>
            </div>
        </div>
    );
};

const HomeLoggedIn = ({ swapScreen }: { swapScreen: SwapScreenADT }) => {
    const profileData = {}; //some redux fetch or just a provider

    return <div></div>;
};

export default function Home({ swapScreen }: { swapScreen: SwapScreenADT }) {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <HomeLoggedIn swapScreen={swapScreen} /> : <LandingPage swapScreen={swapScreen} />;
}
