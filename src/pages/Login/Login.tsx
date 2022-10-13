import {useState}from 'react'
import "./login.scss";


const Login = () => {    
    const [showPassword, setShowPassword] = useState(false);
   // const [loading, setLoading] = useState(false)

    
    const pwdChange = (e: any) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }
    
   
    return (
        // { loading }
        <div className="container">
            <a href="/">
                <img src = "https://res.cloudinary.com/dutcp8qkx/image/upload/v1665389154/Lendsqr/images/logo_n6nigj.svg" alt="logo"/>
            </a>

            <div className="login">
                <div className='loginImage'>
                    <img src="https://res.cloudinary.com/dutcp8qkx/image/upload/v1665389097/Lendsqr/images/loginimage_bmpfvh.png" alt="Login Illustration" className='img'/>
                </div>

                <div className="loginform">
                    <h1>Welcome!</h1>
                    <p>Enter details to login</p>
                    
                    <form className="form">
                        <div className="field">
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="field">
                            <input type={showPassword ? "text" : "password" } placeholder="Password" />
                            <button onClick={pwdChange} className="pwd-btn">
                            { showPassword ? <span>HIDE</span>  : <span>SHOW</span>  }
                            </button>
                        
                        </div>

                        <div className='forget-password'>
                            FORGOT PASSWORD ?
                        </div>

                        
                        <button className="btn" >
                            <a href="/users">LOG IN</a>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login