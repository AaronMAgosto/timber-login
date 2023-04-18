import  Row  from "react-bootstrap/Row";
import  Container  from "react-bootstrap/Container";
import  Col  from "react-bootstrap/Col";
import LoginForm from "./LoginForm.jsx";


export default function Login () {

    return(
       <Container>
            <Row>
                <Col className=" mx-4 my-3 rounded-5 p-4 login-container">
                <LoginForm/>
                </Col>
            </Row>
        </Container>
    )
}