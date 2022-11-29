import { SwapScreen } from "../content-stack/NavigationStack";

export default function Registration({ swapScreen }: { swapScreen: SwapScreen }) {
    return (
        <div>
            Registration
            <button onClick={() => swapScreen("OnBoarding")}> switch to onboarding</button>
        </div>
    );
}
