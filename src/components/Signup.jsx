import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignupForm from "./SignupForm.jsx"

export default function Signup() {

    return(
        <Container>
            <Row>
            <Col className=" mx-4 my-3 rounded-5 p-4 login-container">
                <h1>Sign Up</h1>
                <SignupForm/>
                </Col>
            </Row>
        </Container>
    )
}