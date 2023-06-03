
import React, {useState} from "react";
import { Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../styles/login.css';
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {
    const [credentials, setCredentials] = useState ({
        userName:undefined,
        email: undefined,
        password:undefined,
    
        // userId: "01",
        // userEmail: "priaynak@gmail.com",
        // fullName: "",
        // phone: "",
        // bookAt:"",
    });
    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
    };
    const handleClick = e => {
        e.preventDefault()
    }
     {
        return ( 
            <section>
                <Container>
                    <Row>
                        <Col lg="8" className="m-auto">
                            <div className="login__container d-flex justify-content-between">
                                <div className="login__img">
                                    <img src={registerImg} alt=""></img>
                                </div>
                                <div className="login__form">
                                    <div className="user">
                                        <img src={userIcon} alt=""></img>
                                    </div>
                                    <h2>Register</h2>
                                    <Form onSubmit={handleClick}>
                                        <FormGroup>
                                            <input type="text" placeholder="Username" required id="username" onChange={handleChange}></input>
                                        </FormGroup>
                                        <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange}></input>
                                    </FormGroup>
                                        <FormGroup>
                                            <input type="password" placeholder="Password" required id="password" onChange={handleChange}></input>
    
                                            <Button className="btn secondary__btn auth__btn" type="submit">Create Account</Button>
                                        </FormGroup>
    
                                    </Form>
                                    <p>Already have an account? <Link to='/login'>Create Account</Link></p>
                                </div>
    
    
                            </div>
                        </Col>
                    </Row>
    
                </Container>
            </section>
        )
    }};
    
    export default Login;
    
    

