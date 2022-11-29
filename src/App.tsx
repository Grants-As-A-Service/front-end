import { NavBar } from "./components";
import { NavigationStack, StackItem } from "./components/content-stack/NavigationStack";
import Registration from "./components/content/Registration";
import OnBoarding from "./components/content/OnBoarding";


export default function App() {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "56px" }}>
                <NavigationStack intialItem="Registration">
                    <StackItem name="Registration" Component={Registration}/>
                    <StackItem name="OnBoarding" Component={OnBoarding}/>
                </NavigationStack>
            </div>
        </div>
    );
}
