import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import Register from "./views/Register";


export default function App(){
    
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route 
                    path="/register"
                    element={<Register />}
                />
            </Routes>
        </BrowserRouter>
    );
}