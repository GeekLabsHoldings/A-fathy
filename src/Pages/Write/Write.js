import React from "react";
import './Write.css'
import img0 from '../../imgs/img2.png';
import img1 from '../../imgs/iconz-02.png'
import img2 from '../../imgs/iconz-03.png'
import img3 from '../../imgs/iconz-04.png'
import img4 from '../../imgs/iconz-05.png'
import img5 from '../../imgs/iconz-06.png'
import img13 from "../../imgs/logos-07.png";
import img14 from "../../imgs/logo.png"
import Footer from "../../Component/Footer";
const Write = () => {
    return (
        <div>
            <div className="write">
                <div className="wrie-for-us">
                    <img src={img0} />
                    <h2>Write For<br /> Us Now!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis  Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
                </div>
                <div className="insights">
                    <div className="wr-cards">
                        <div className="ca ca-one"><span>insights</span></div>
                        <div className="ca ca-two">
                            <div className="two-top">
                                <p className="p1">Monthly</p>
                                <h5>+350 Followers</h5>
                                <p className="p2">Our Grouth</p>
                            </div>
                            <div className="two-bottom">
                                <p className="p1">Monthly</p>
                                <h5>+350 Followers</h5>
                                <p className="p2">Our Grouth</p>
                            </div>
                        </div>
                        <div className="ca ca-three">
                            <div className="two-top">
                                <p className="p1">All The Time</p>
                                <h5>228k Visitor</h5>
                                <p className="p2">Our Unique Visitors</p>
                            </div>
                            <div className="plus two-bottom">
                                <p className="p1">All The Time</p>
                                <h5 className="col">228k Visitor</h5>
                                <p className="p2">Our Unique Visitors</p>
                            </div>
                        </div>
                        <div className="ca ca-four">
                            <div className="two-top">
                                <p className="p1">All The Time</p>
                                <h5>168k Follower</h5>
                                <p className="p2">Our Followers Base</p>
                            </div>
                            <div className="two-bottom">
                                <p className="p1">All The Time</p>
                                <h5>168k Follower</h5>
                                <p className="p2">Our Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wr-social">
                    <h4>Our Social Media</h4>
                    <div className="media-left">
                        <div className="le">
                            <div className="le-one">
                                <img src={img1} />
                                <span>200k Followers</span>
                            </div>
                            <div className="le-one">
                                <img src={img2} />
                                <span>200k Followers</span>
                            </div>
                            <div className="le-one">
                                <img src={img3} />
                                <span>200k Followers</span>
                            </div>
                            <div className="le-one">
                                <img src={img4} />
                                <span>200k Followers</span>
                            </div>
                            <div className="le-one">
                                <img src={img5} />
                                <span>200k Followers</span>
                            </div>
                        </div>
                        <div className="ri">
                            <div className="ri-one">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                </p>
                            </div>
                            <div className="ri-one">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                </p>
                            </div>
                            <div className="ri-one">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="wr-bt">Write For Us</button>
                </div>

            </div>
            <div className="wr-footer">
                <Footer />
            </div>
        </div>
    )
}
export default Write