import { SwapScreenADT } from "../content-stack/NavigationStack";

export default function Registration({ swapScreen }: { swapScreen: SwapScreenADT }) {
    return (
        <div>
            Registration
            <button onClick={() => swapScreen("OnBoarding")}> switch to onboarding</button>
        </div>
    );
}
