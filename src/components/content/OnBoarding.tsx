import { SwapScreen } from "../content-stack/NavigationStack";

export default function OnBoarding({ swapScreen }: { swapScreen: SwapScreen }) {
    return (
        <div>
            OnBoarding
            <button onClick={() => swapScreen("Registration")}>Switch to reg</button>
        </div>
    );
}
