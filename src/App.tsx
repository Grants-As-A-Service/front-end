import { NavBar, NavigationStack, StackItem } from "./components";
import { Registration, OnBoarding, Home } from "./components/content";
import ProjectOnbaord from "./components/content/ProjectOnbaord";
import { Banner } from "./components/items/banner";
import { Loader } from "./components/items/loader";
import SideBar from "./components/sidebar/sidebar";
import { AuthProvider } from "./providers/AuthProvider";
import "./styles/body.scss";

export default function App() {
    return (
        <AuthProvider>
            <Banner />
            <NavBar />
            <div className="fullBody">
                <SideBar />
                <div className="fitParent" style={{ overflow: "auto", padding: "1%" }}>
                    <Loader />
                    <NavigationStack intialItem="Home">
                        <StackItem name="Home" Component={Home} />
                        <StackItem name="Registration" Component={Registration} />
                        <StackItem name="OnBoarding" Component={OnBoarding} />
                        <StackItem name="ProjectOnbaord" Component={ProjectOnbaord} />
                    </NavigationStack>
                </div>
            </div>
        </AuthProvider>
    );
}
