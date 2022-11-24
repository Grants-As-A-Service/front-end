import { useEffect } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';


export default function NavBar(){

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Navbar>
        </div>
    );
}