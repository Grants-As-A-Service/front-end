import { NavBar } from "./components";
import { Registration, OnBoarding, Home } from "./components/views";
import ProjectOnbaord from "./components/views/ProjectOnbaord";
import { Banner } from "./components/items/banner";
import { Loader } from "./components/items/loader";
import SideBar from "./components/sidebar/sidebar";
import { AuthProvider } from "./providers/AuthProvider";
import "./styles/body.scss";
import createStackNavigator from "./components/content-stack/NavigationStack";
import { MainStackScreens } from "./types";
import ProjectView from "./components/views/ProjectView";

const MainStack = createStackNavigator<MainStackScreens>();

export default function App() {
    return (
        <AuthProvider>
            <Banner />
            <NavBar swapScreen={MainStack.swapScreen} />
            <div className="fullBody">
                <SideBar swapScreen={MainStack.swapScreen} />
                <div className="fitParent" style={{ overflow: "auto", padding: "1%" }}>
                    <Loader />
                    <MainStack.NavigationStack intialItem="Home">
                        <MainStack.StackItem name="Home" Component={Home} />
                        <MainStack.StackItem name="Registration" Component={Registration} />
                        <MainStack.StackItem name="OnBoarding" Component={OnBoarding} />
                        <MainStack.StackItem name="ProjectOnboard" Component={ProjectOnbaord} />
                        <MainStack.StackItem name="ProjectView" Component={ProjectView}/>
                    </MainStack.NavigationStack>
                </div>
            </div>
        </AuthProvider>
    );
}
