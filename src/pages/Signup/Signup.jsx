import React, { useState } from 'react'
import './Signup.css'


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [signupAction, setSignupAction] = useState('signup');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange = (event) => {
        setFormData((currVal) => {
            return {...currVal, [event.target.name] : event.target.value}
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    return (
    <div className='signup'>

            {
                signupAction === 'signup' ? 
                <h2>Sign Up</h2> : <h2>Login</h2>
            }

            {
                signupAction === 'signup' ? 
                <p className='tagline'>Sign up to join india's largest crypto community.</p> : <p className='tagline'>Welcome back to CryptoAdda!</p>
            }
        
        

        <form onSubmit={handleFormSubmit}> 
            {
                signupAction === 'signup' ? 
                <div className='input-div'>
                <input type="text"  placeholder='Enter your name' name='name' value={formData.name} onChange={handleInputChange} required/>
                </div> : null
            }
            

            <div className='input-div'>
                <input type="email" name='email' onChange={handleInputChange} value={formData.email}  placeholder='Enter your email id' required/>
            </div>
            
            <div className='input-div'>
                <input type={
                    showPassword ? "text" : "password"
                }  placeholder='Enter your password' value={formData.password} onChange={handleInputChange} name='password' required/>

                <i className={`bi ${showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"}`} onClick={() => setShowPassword(!showPassword)}></i>
            </div>


            {
                signupAction === 'signup' ?
                <div className='input-div'>
                <input type={
                    showConfirmPassword ? "text" : "password"
                }  placeholder='Confirm your password' onChange={handleInputChange} value={formData.confirmPassword} name='confirmPassword' required/>

                <i className={`bi ${showConfirmPassword ? "bi-eye-fill" : "bi-eye-slash-fill"}`} onClick={() => setShowConfirmPassword(!showConfirmPassword)}></i>
            </div> : null
            }
            
            {
                signupAction === 'signup' ? 
                <div>
                <input type="checkbox" id="agree" name="t&c"  value="t&c" required/>
                <label for="agree"> I accept the Terms of use & Privacy Policy</label>
            </div> : <div>
                <p>Forgot password?</p>
            </div>
            }

            {
                signupAction === 'signup' ? 
                <button>Sign Up</button> : <button>Log in</button>
            }
            
            
        </form>

            {
                signupAction === 'signup' ? 
                <p>Already have an account? <span onClick={() => setSignupAction("login")} className='login-text'>Login</span></p> : <p>I have no Account? <span onClick={() => setSignupAction("signup")} className='sign-up-text'>Sign Up</span></p>
            }
        
    </div>
  )
}

export default Signup