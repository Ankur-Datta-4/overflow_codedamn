import { useEffect } from 'react';
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
import image from './logo.png'
import { FcHome } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { SiMessenger } from "react-icons/si";
import { useState } from 'react';
import { GrLogin } from "react-icons/gr";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
// import { Link } from "react-router-dom";
// import { Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';//plus icon
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';//just in case
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import { selectUserPhotoURL, selectUserSlug } from '../Features/User/userSlice'
import SearchMenu from './Search';
const Navi = () => {

    const photoURL = useSelector(selectUserPhotoURL);
    const userSlug = useSelector(selectUserSlug);
    let [loggedIn, setLoggedIn] = useState(userSlug !== "");
    const navigate = useNavigate()
    useEffect(() => {
        setLoggedIn(userSlug === "");
    }, [userSlug])



    const styles =
    {
        image:
        {
            width: "70px",
            height: "60px",
            borderRadius: "50%",
            marginLeft: "200px",
            display: loggedIn ? "block" : "none"
        }
    }

    return (
        <div className="navbar" style={{ width: "100vw", zIndex: "5", position: "fixed", padding: "0", top: "0" }}>
            {/* <Navbar {...props} /> */}


            <Navbar style={{ width: "100vw", backgroundColor: "#000", color: "white", paddingBottom: "2px" }} expand="md">
                <Container fluid>

                    <Navbar.Brand style={{ margin: "0", padding: "0", color: "white", fontSize: "150%", marginRight: "2rem" }} href="/">
                        <img style={{ maxWidth: "5rem", maxHeight: "4.5rem" }} src={image} alt="" />
                    </Navbar.Brand>
                    <Search />
                    <Navbar.Toggle style={{ backgroundColor: "rgba(255 , 255 , 255 , 0.25)", color: "white" }} aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex" style={{ marginRight: "10%" }}>
                            {/* <FormControl
                                style={{ display: loggedIn ? "block" : "none", width: "300px" }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            /> */}

                            {/* <FcSearch style={{ width: "23%", height: "23%", backgroundColor: "whitesmoke", borderRadius: "10px", marginRight: "10%" }} /> */}
                            {/* <Button style={{ display: loggedIn ? "block" : "none", marginLeft: "1%" }} variant="outline-light"><SearchIcon /></Button> */}
                        </Form>

                        <Nav

                            className="me-auto my-2 my-lg-0"
                            style={{ display: "flex", flexDirection: "row", marginLeft: "20%", maxHeight: '5rem', color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link style={{ verticalAlign: "baseline", display: loggedIn ? "block" : "none", width: "3.5rem", height: "3.1rem", padding: "0px", color: "white", marginRight: "30%" }}

                                onClick={() => navigate('/home')}>
                                <HomeIcon style={{ borderRadius: "30%", backgroundColor: "white", color: "black", width: "3.5rem", height: "3.1rem" }} />
                            </Nav.Link>

                            <Nav.Link style={{ verticalAlign: "baseline", display: loggedIn ? "block" : "none", width: "3.5rem", height: "3.1rem", padding: "0px", color: "white", marginRight: "30%" }} onClick={() => navigate('/create-group')}>
                                <AddBoxIcon style={{ borderRadius: "30%", backgroundColor: "white", color: "black", width: "3.5rem", height: "3.1rem" }} />
                            </Nav.Link>
                            {/* <Nav.Link style={{ display: loggedIn ? "block" : "none", width: "50px", height: "50px", padding: "0", color: "white", marginRight: "23%" }} href="/about">ABOUT<FcAbout style={{ width: "50px", height: "50px" }} /></Nav.Link> */}


                            <Nav.Link style={{ textAlign: "center", verticalAlign: "text-bottom", borderRadius: "30%", backgroundColor: "white", color: "black", verticalAlign: "baseline", display: loggedIn ? "block" : "none", width: "3.2rem", height: "3.2rem", padding: "0", marginRight: "30%" }} onClick={() => navigate('/messenger')}><MessageIcon style={{
                                padding: "0.3rem",
                                width: "3.2rem", height: "3.2rem"
                            }} />
                            </Nav.Link>


                            {/* <Nav.Link style={{ display: loggedIn ? "block" : "none", width: "50px", height: "50px", padding: "0", color: "white" }} href="#action2">

                              

                            </Nav.Link> */}
                            <Avatar style={{ verticalAlign: "baseline", display: loggedIn ? "block" : "none", cursor: "pointer" }} alt="Remy Sharp" src={photoURL} onClick={() => navigate(`/user/${userSlug}`)} />

                            {/* <Nav.Link style={{ display: !loggedIn ? "block" : "none", width: "50px", height: "50px", padding: "0", color: "white", marginRight: "23%" }} href="/about"></Nav.Link> */}
                            <Nav.Link style={{ display: !loggedIn ? "block" : "none", width: "50px", height: "50px", padding: "0", color: "white" }} href="#action2">


                                <a href="/login">
                                    <button style={{ position: "absolute", borderRadius: "16px", fontSize: "25px", fontWeight: "600", paddingBottom: "0.3rem", paddingTop: "0.3rem", right: "20px", paddingLeft: "80px", paddingRight: "80px", background: "linear-gradient(45deg, #00B5B0, blue)", color: "white" }} >
                                        L O G I N

                                    </button>
                                </a>

                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navi;