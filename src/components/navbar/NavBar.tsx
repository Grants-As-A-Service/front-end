import { useEffect } from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";

export default function NavBar() {
    useEffect(() => {}, []);

    return (
        <div>
            <Navbar className="fixed-top" color="dark" dark style={{ marginTop: 0}}>
                <Nav>
                    <NavbarText>Components</NavbarText>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle caret>Account</DropdownToggle>
                        <DropdownMenu left>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Login</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}
