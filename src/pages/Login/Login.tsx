import React , {useState}from 'react'
import "./login.scss";
import logo from "../../assets/images/logo.svg"
import loginImage from "../../assets/images/loginimage.png"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const pwdChange = (e: any) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (

        <div className="container">
            <a href="/">
                <img src = {logo}/>
            </a>

            <div className="login">
                <div className='loginImage'>
                    <img src={loginImage} alt="Login Illustration" className='img'/>
                </div>

                <div className="loginform">
                    <h1>Welcome!</h1>
                    <p>Enter details to login</p>
                    
                    <form className="form">
                        <div className="field">
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="field">
                            <input type={showPassword ? "text" : "password" }placeholder="Password" />
                            <button onClick={pwdChange} className="pwd-btn">
                             { showPassword ? <span>HIDE</span>  : <span>SHOW</span>  }
                            </button>
                           
                        </div>

                        <div className='forget-password'>
                            FORGOT PASSWORD ?
                        </div>

                        <button className="btn">
                            LOG IN
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login