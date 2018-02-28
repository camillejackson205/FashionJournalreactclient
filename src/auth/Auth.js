import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './auth.css'
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
        <div className="home-background" >
            <h1 className="home">  V A C K E R S J A L </h1>
            
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    
    )
}

export default Auth;








