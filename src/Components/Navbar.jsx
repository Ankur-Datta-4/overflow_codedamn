import 'responsive-navbar-react/dist/index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FcSearch } from 'react-icons/fc';
const Navi = () => {
    return (
        <div className="navbar" style={{ width: "100%", zIndex: "5", position: "sticky", padding: "0", top: "0" }}>
            {/* <Navbar {...props} /> */}
            <Navbar style={{ width: "100%", backgroundColor: "#000", color: "white" }} expand="md">
                <Container fluid>
                    <Navbar.Brand style={{ color: "white", fontSize: "150%", marginRight: "30px" }} href="/">PESUOVER_TEST</Navbar.Brand>

                    <Navbar.Toggle style={{ backgroundColor: "rgba(255 , 255 , 255 , 0.25)", color: "white" }} aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <FormControl
                                style={{}}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />

                            {/* <FcSearch style={{ width: "23%", height: "23%", backgroundColor: "whitesmoke", borderRadius: "10px", marginRight: "10%" }} /> */}
                            <Button style={{ marginLeft: "1%", marginRight: "10%" }} variant="outline-light"><FcSearch /></Button>
                        </Form>
                        <Nav

                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link style={{ color: "white", fontSize: "120%", marginRight: "13%" }} href="#action1">Home</Nav.Link>
                            <Nav.Link style={{ color: "white", fontSize: "120%", marginRight: "13%" }} href="#action2">About</Nav.Link>
                            <Nav.Link style={{ color: "white", fontSize: "120%", marginRight: "13%" }} href="#action2">Contact</Nav.Link>
                            <Nav.Link style={{ color: "white", fontSize: "120%", marginRight: "13%" }} href="#action2">Link</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navi;