import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { SwapScreenADT } from "../content-stack/NavigationStack";



const LandingPage = () => {
    return (
        <div>
            <p className="fs-1">Welcome to GAAS</p>
        </div>
    )
}


const HomeLoggedIn = () => {
    const profileData = {} //some redux fetch or just a provider
    
    return (
        <div></div>
    )
}


export default function Home({ swapScreen }: { swapScreen: SwapScreenADT }) {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        isLoggedIn ? <HomeLoggedIn/> :  <LandingPage/> 
    )

}