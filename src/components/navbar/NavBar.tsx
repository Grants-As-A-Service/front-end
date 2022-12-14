import { useEffect, useContext } from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarBrand } from "reactstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { MainStackScreens, SwapScreenADT } from "../../types";

export default function NavBar({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) {
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);

    useEffect(() => {}, []);

    return (
        <div>
            <Navbar className="default" color="dark" dark>
                <NavbarBrand href="/">Grants As A Service (GAAS)</NavbarBrand>
                <Nav>
                    <UncontrolledDropdown className="justify-content-end">
                        <DropdownToggle caret>Account</DropdownToggle>
                        <DropdownMenu left>
                            {isLoggedIn ? (
                                <>
                                    <DropdownItem>Account Settings</DropdownItem>
                                    <DropdownItem>Something else</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem
                                        onClick={() => {
                                            setLoggedIn(false);
                                            swapScreen("Home");
                                        }}
                                    >
                                        Log Out
                                    </DropdownItem>
                                </>
                            ) : (
                                <>
                                    <DropdownItem>Sign Up</DropdownItem>
                                    <DropdownItem>Log In</DropdownItem>
                                </>
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}
