import React, { useState } from 'react';
import logo from '/react/learning/src/images/logo/amozonblacklogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import axios from 'axios';

export default function Login() {
    const [Email, SetEmail] = useState('');
    const [Errors, SetErrors] = useState({});
    const [Collapse, setCollapse] = useState(false);
    const [HideCount, SetHideCount] = useState(true);
    const [isdisabled,SetisDisiable]=useState(false);
    const [Otp, SetOtp] = useState('')

    const navigate = useNavigate();

    const validateForm = () => {
        const ValidationError = {}; // Make sure it's an object

        if (!Email.trim()) {
            ValidationError.email = 'Email or Mobile Number is Required';
        } else if (!/^(?:\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)$/.test(Email)) {
            ValidationError.email = "Enter a Valid Mobile Number or Email";
        }

        SetErrors(ValidationError);
        return Object.keys(ValidationError).length === 0;
    };

    const handleCreate = () => {
        navigate('/Register');
    };

    console.log(isdisabled, 'isdisabled')
     const handleEdit=()=>{
        SetisDisiable(false)
        SetHideCount(true)
        setCollapse(false)
     }

    const handleContinue = () => {

        if (validateForm()) {
            setCollapse(true)
            SetHideCount(false)
            SetisDisiable(true)
            const d = {
                MobileNumber: Email
            }
            const h = {
                'Content-Type': 'application/json'
            }
            // axios.post('http://localhost:5037/api/Login', d, h).then((response) => {
            //     console.log(response)
            //     if (response.data = 'Login Successful') {
            //         navigate('/');
            //     }
            //     else if (response.data = 'Mobile number is not registered') {
            //         alert('Mobile Number is Not Registered..!Kindly Regisiter')
            //     }

            // })


        }
        else {
            console.log('Login Failed')
        }

    };

    return (
        <div>
            <Row>
                <Col>
                    <div className='SignInContainer'>
                        <div className='logo'>
                            <img src={logo} className='Signpageheaderlogo' alt='logo' />
                        </div>
                        <div className='signincontent'>
                            <h6>Sign In</h6>
                            <h6>Email or Mobile Number</h6>
                            <div className='d-flex flex-column'>
                                <input
                                    type='text'
                                    name='email'
                                    value={Email}
                                    onChange={(e) => SetEmail(e.target.value)}
                                    disabled={isdisabled}
                                />
                                {Errors.email && <span style={{ color: 'red' }}>{Errors.email}</span>}
                                {
                                    Collapse && (
                                        <a href='#'>
                                        <span onClick={handleEdit}>Edit Mobile Number </span>

                                        </a>

                                    )
                                }

                                <br />
                                {HideCount && (
                                    <button type="button" className="btn btn-warning" onClick={handleContinue} >
                                        Continue
                                    </button>
                                )}

                                <br />
                                <div>
                                    {Collapse && (
                                        <div>
                                            <h6>Enter OTP</h6>
                                            <OtpInput
                                                value={Otp}
                                                onChange={SetOtp}
                                                type='text'
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                numInputs={4}
                                                renderSeparator={<span>-</span>}
                                                renderInput={(props) => <input className='otpinputbox' {...props} />}
                                                containerStyle="otp-container"
                                            />
                                            <br />
                                            <div className='d-flex justify-content-center align-center w-100'>
                                                <Button className="btn btn-warning" style={{width:'90%'}}>Login</Button>
                                            </div>

                                        </div>


                                    )}
                                </div>

                                <a href="#">Forget Password</a>
                            </div>
                            <hr />
                            <p>New to Amazon?</p>
                            <Button onClick={handleCreate}>Create Your Amazon Account</Button>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
