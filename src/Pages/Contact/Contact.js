import React from "react";
import './Contact.css';
import img0 from '../../imgs/iconz-02.png';
import img1 from '../../imgs/iconz-03.png';
import img2 from '../../imgs/iconz-04.png';
import img3 from '../../imgs/iconz-05.png';
import img4 from '../../imgs/iconz-06.png';
import img5 from '../../imgs/iconz-07.png';
import Footer from "../../Component/Footer";



const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="contact-flex">
                    <div className="contact-left">
                        <div className="con-text">


                            <h4>Connecting with us<br /> is easy and secure</h4>
                            <p>Feel free to send us your ideas, feedback,<br /> and more. We'd love to hear from you!</p>
                        </div>
                        <div className="con-divz">
                            <div className="phone">
                                <p className="ph">Phone</p>
                                <p className="bo">United Kingdom: +44 7824 707 589</p>
                            </div>
                            <div className="follow">
                                <p className="fo">Email</p>
                                <p className="bo">hello@pennystocks.today</p>
                            </div>
                            <div className="email">
                                <p className="em">Follow Us On</p>
                                <p className="bo">Our Social Media</p>
                            </div>

                            <div className="iconz">
                                <img src={img0} />
                                <img src={img1} />
                                <img src={img2} />
                                <img src={img3} />
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">

                        <img src={img5} />
                    </div>
                </div>

            </div>
            <div className="contact-footer">
                <Footer />
            </div>
        </div>
    )
}
export default Contact