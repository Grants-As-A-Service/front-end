import { NavBar, NavigationStack, StackItem } from "./components";
import { Registration, OnBoarding } from "./components/content";
import SideBar from "./components/sidebar/sidebar";
import "./styles/body.scss"

export default function App() {
    return (
        <div>
            <NavBar />
            <div className="fullBody">
                <SideBar />
                <NavigationStack intialItem="Registration">
                    <StackItem name="Registration" Component={Registration} />
                    <StackItem name="OnBoarding" Component={OnBoarding} />
                </NavigationStack>
                
            </div>
        </div>
    );
}
