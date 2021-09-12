import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const MainNav = ({ account }) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React Truffle - Starter Kit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Nav className="mx-auto">
                    <Nav.Link href="#home">{account}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNav;