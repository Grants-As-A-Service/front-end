import { NavBar, NavigationStack, StackItem} from "./components";
import { Registration, OnBoarding } from './components/content'


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
