import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Landing = () => {
    return (
        <React.Fragment>
           <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/formik">Fromik</Nav.Link>
                        <Nav.Link href="/withFormik">withFormik</Nav.Link>
                        <Nav.Link href="/customValidation">Fromik Custom Validation</Nav.Link>
                        <Nav.Link href="/yupValidation">Yup Validation</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Landing;