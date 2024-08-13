import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sign_in() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSignIn(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,  // Send email
                    password: password,  // Send password
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Sign-in successful:', data);
            navigate('/');
            // Handle successful sign-in (e.g., redirect to another page)
        } catch (error) {
            console.error('Error during sign-in:', error);
            setError('Sign-in failed. Please check your email and password.');
        }
    }
    
    

    const handleSignUp = (event) => {
        event.preventDefault(); // Prevent form submission
        navigate('/sign_up'); // Navigate to the /sign_up page
    };

    return (
        <div id="contact" className="text-center">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Sign In Page</h3>
                </div>
                <div className="col-md-6 col-md-offset-3 ">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button
                            type="submit"
                            className="btn btn-custom btn-lg"
                            onClick={handleSignIn}
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            className="btn btn-custom btn-lg"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_in;
