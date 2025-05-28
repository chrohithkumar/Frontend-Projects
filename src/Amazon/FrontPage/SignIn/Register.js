import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import logo from '/react/learning/src/images/logo/amozonblacklogo.png';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export default function Register() {
    const [Errors, SetErrors] = useState({});
    const [formData, SetFormData] = useState({
        Name: '',
        MobileNumber: '',
        Password: ''
    });
    const [Submitted, SetSubmitted] = useState(false);
    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target;
        SetFormData((Prev) => ({
            ...Prev,
            [name]: value
        }));

        validate(name, value);
    };

    const validate = (name, value) => {
        let errormsg = "";

        switch (name) {
            case "Name":
                if (!value.trim()) {
                    errormsg = "Name is required.";
                }
                else if (!/^[A-Za-z\s]+$/.test(value)) {
                    errormsg = "Name should contain only letters.";
                }
                break;

            case "MobileNumber":
                if (!value.trim()) {
                    errormsg = "Mobile number is required.";
                }
                else if (!/^\d{10}$/.test(value)) {
                    errormsg = "Mobile number must be exactly 10 digits.";
                }
                break;

            case "Password":
                if (!value.trim()) {
                    errormsg = "Password is required.";
                }
                else if (value.length < 6) {
                    errormsg = "Password must be at least 6 characters.";
                }
                break;

            default:
                break;
        }

        return errormsg;
    };

    const validateForm = () => {
        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            const errorMessage = validate(key, formData[key]);
            if (errorMessage) newErrors[key] = errorMessage;
        });

        SetErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCreate = (e) => {
        SetSubmitted(true);
        e.preventDefault();
    
        if (validateForm()) {
            const d = {
                UserName: formData.Name,
                MobileNumber: formData.MobileNumber,
                Password: formData.Password
            };
    
            axios.post('http://localhost:5037/api/Register', d, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true 
            })
            .then((response) => {

                console.log(response.data);
                if (response.data="Member Registered Sucessfully"){
                    navigate('/Login');  
                }
                
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Registration Failed. Please try again.");
            });
        } else {
            console.log('Validation Failed');
        }
    };
    
    return (
        <div className='Center'>
            <div className='logo'>
                <img src={logo} className='Signpageheaderlogo' alt='logo' />
            </div>
            <Row className='RegisterContainer'>
                <Col sm={10} md={12}>
                    <div>
                        <h6>Create Account</h6>

                        <div className='RegisterInput'>
                            <label className='lbl'>Your Name</label>
                            <input className='RegsiterInput' name='Name' type='text' value={formData.Name} onChange={handleInput} placeholder='First and Last Name' />
                        </div>
                        {Submitted && Errors.Name && <span className='error' style={{ color: "red" }}>{Errors.Name}</span>}
                        <br />
                        <div className='RegisterInput'>
                            <label className='lbl'>Mobile Number</label>
                            <input className='RegsiterInput' name="MobileNumber" type='text' value={formData.MobileNumber} onChange={handleInput} placeholder='Mobile Number' />
                        </div>
                        {Submitted && Errors.MobileNumber && <span className='error' style={{ color: "red" }}>{Errors.MobileNumber}</span>}
                        <br />

                        <div className='RegisterInput'>
                            <label className='lbl'>Password</label>
                            <input className='RegsiterInput' name="Password" type='password' value={formData.Password} onChange={handleInput} placeholder='Password' />
                        </div>
                        {Submitted && Errors.Password && <span className='error' style={{ color: "red" }}>{Errors.Password}</span>}
                        <br />
                        <div className='RegisterButton d-flex justify-content-center'>
                            <Button onClick={handleCreate}>Create Your Amazon Account</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
