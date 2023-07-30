import React from "react";
import '../../Pages/Investing/Investing.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import img15 from "../../imgs/bg-11.png";
import img16 from "../../imgs/Untitled-1-03.png"
import img17 from "../../imgs/Untitled-1-04.png"
import { AiFillStar } from 'react-icons/ai'
import Footer from "../../Component/Footer";
const Investing = () => {
    return (
        <div className="investing">
            <div className="Invest-content">
                <div className="invest-first">
                    <img src={img15} />
                    <div className="first-text">
                        <h5>Investing In Stocks The Complete Course!</h5>
                        <p>Master Stock Market Investing & Trading in the Stock Market. Top 1% Instructor & Millionaire Investor. Invest & Trade!</p>
                    </div>
                    <span>Enrolled</span>
                </div>
                <div className="flex-two">
                    <div className="fl fl-one">
                        <img src={img16} />
                        <p>Last updated 6/2023</p>
                    </div>
                    <div className="fl fl-two">
                        <img src={img17} />
                        <p>English</p>
                    </div>
                    <div className="fl fl-three">
                        <AiFillStar className="col" />
                        <AiFillStar className="col" />
                        <AiFillStar className="col" />
                        <AiFillStar className="col" />

                        <p className="m-l">4.0 (250 Student)</p>
                    </div>
                    <div className="fl fl-four">

                        <p>Created by <span>Ash Bash</span></p>
                    </div>
                </div>
                <div className="invest-text">
                    <div className="n-fl">
                        <span className="num-abs1">1 -</span>
                        <h3>Stock Market Investing And Trading Foundation.</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam e</p>
                </div>
                <div className="invest-text2">
                    <div className="n-fl">
                        <span className="num-abs1">2 -</span>
                        <h3>Key Concepts When Investing & Trading In The Stock Market</h3>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                    </p>

                </div>
            </div>
                <div className="invest-footer">
                    <Footer />
                </div>
        </div>
    )
}
export default Investing