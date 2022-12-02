import { MainStackScreens, ProjectADT, SwapScreenADT } from "../../types";
import Icon from "../items/icon";

export default function ProjectView({ swapScreen, project }: { swapScreen: SwapScreenADT<MainStackScreens>; project: ProjectADT }) {
    return (
        <>
            <div style={{ position: "absolute" }}>
                <div className="iconHover" style={{ position: "relative", top: "20px", left: "20px" }} onClick={() => swapScreen("Home")}>
                    <Icon name="arrow_back" />
                </div>
            </div>
            <div>{project.owner}</div>
        </>
    );
}
