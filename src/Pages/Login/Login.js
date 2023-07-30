import React from "react";
import './Login.css';
import Footer from "../../Component/Footer";
import img0 from '../../imgs/img2.png'

const Login = () => {
    return (
        <div>
            <div className="par">
                <div className="Log">
                    <div className="login-left">
                        <img src={img0} />
                        <h5>Penny Stuck?</h5>
                    </div>
                    <div className="login-right">
                        <p>Login Now</p>

                        <label foe="email" >Username Or Email</label>
                        <input type="text" />
                        <label foe="email" >Password</label>
                        <input type="password" />
                        <button><a href="#">Login</a></button>
                        <p className="lo-togl">Don't have an account ? <a href="#">Createaccount</a></p>
                    </div>
                </div>


            </div>
            <div className="log-footer">
                <Footer />
            </div>
        </div>
    )
}
export default Login;