import React from "react";
import './Signup.css';
import img0 from '../../imgs/img2.png'
import Footer from "../../Component/Footer";

const Signup = () => {
    return (
        <div>
            <div className="par">
                <div className="signup">
                    <div className="signup-left">
                        <img src={img0} />
                        <h5>Penny Stuck?</h5>
                    </div>
                    <div className="signup-right">
                        <p>It's Totally Free</p>

                        <label className="mar" foe="email" >Username:</label>
                        <input type="text" />
                        <label foe="email" >Account Password:</label>
                        <input type="password" />
                        <label foe="email" >Linked Email:</label>
                        <input type="password" />
                        <button><a href="#">Finish</a></button>
                        <p className="togl">Have already an account ? <a href="#">Login</a></p>
                    </div>
                    
                </div>

            </div>
            <div className="log-footer">
                <Footer />
            </div>
        </div>
    )
}
export default Signup;