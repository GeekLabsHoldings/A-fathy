import React, { useState } from "react";
import { Link } from "react-router-dom";
import './TestComponent.css'
import ImageSlider from './ImageSlider';
import ImageSliderTwo from './ImageSliderTwo';
import Footer from "./Footer";
import { SliderData } from './SliderData';
import img1 from "../imgs/twitter.png";
import img2 from "../imgs/youtube.png";
import img3 from "../imgs/telgram.png";
import img4 from "../imgs/instgram.png";
import img5 from "../imgs/Untitled-1-05.png";
import img6 from "../imgs/triangles-01.png";
import mob from "../imgs/triangles-03.png";
import img7 from "../imgs/ad-04.png";
import img8 from "../imgs/logos-05.png";
import img9 from "../imgs/triangles-02.png"
import img10 from "../imgs/logos-06.png";
import img11 from "../imgs/img3.png";
import img12 from "../imgs/logos-05.png";
import elon from "../imgs/elon.png";
import img13 from "../imgs/logos-07.png";
import img14 from "../imgs/logo.png"
import { FiSearch } from "react-icons/fi";
import Navbar from "../Component/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react'
import TestiMonials from "./Testmonial/Testmonial";
import Slidder from '../Component/HomeSlider/Slidder'
import { Row, col } from "react-bootstrap";

const Test = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tech',
            title: 'Introduction:',
            button: 'More Reviews',
            content: 'When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s .'
        },
        {
            id: 2,
            tabTitle: 'Home',
            title: 'Media: ',
            button: 'More Reviews',
            content: 'If you upload images to the website, you should avoid uploading images with embedded location data.'
        },
        {
            id: 3,
            tabTitle: 'Softwares',
            title: 'Cookies: ',
            button: 'More Reviews',
            content: 'If you leave a comment on our site you may opt-in to saving your name, email address and.'
        }
    ];
    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <div className="">
            <div className="H-page">
                <div className="H-first">
                    <Row>
                        <div className="col-lg-3 col-md-4 H-first-left">
                            <div className="H-left-one">
                                <div class="H-left-imgs">
                                    <img src={img1} />
                                    <img src={img2} />
                                    <img src={img3} />
                                    <img src={img4} />
                                    <img src={img5} />
                                </div>
                                <div class="H-left-text">
                                    <p>Following our Social Media Grants <br />
                                        You Lots Of Rewards To Enjoy Exclusively On Our Website.</p>
                                </div>
                                <div class="H-input-search">
                                    <span><FiSearch /></span>
                                    <input type="text" />

                                </div>
                            </div>
                            <div class="H-left-two">
                                <img src={img6} />
                                <h3>MICRO CAPS <br />UNIVERSE</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad </p>
                                <button><Link to={"/"}>Explore</Link></button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 H-first-right">
                            <div className="H-first-right">
                                <div className="H-slider">
                                    <Slidder />
                                </div>
                                <div class="H-dress-sec">
                                    <div class="">
                                        <div class="H-dr-left">
                                            <img src={img8} />
                                            <h4>Dress To Impress! <br />Dress To Invest!</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                                euismod tincidunt ut </p>
                                        </div>
                                        <div class="H-dr-right">
                                            <img src={img7} />
                                            <button><a href="#">Shop Now</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className="H-Second">
                    <Row>
                        <div className="col-lg-3 col-md-4">
                            <div class="lefttwo">
                                <div className="lefttwo-content">
                                    <div className="seconed-two-1">
                                        <img src={img9} />
                                        <h3>SMALL CAPS<br /> UNIVERSE</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad </p>
                                        <button><Link to={"/caps"}>Explore</Link></button>
                                    </div>
                                    <div className="seconed-two-2">
                                        <div class="left-four">
                                            <img class="img1" src={img10} />
                                            <button class="bttn"><a>Shop Now</a></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="seconedright">
                                <div className="slidertwo">
                                    <h1>Latest.</h1>
                                    <div className="H-slider">
                                        <ImageSliderTwo slides={SliderData} />
                                    </div>
                                </div>
                                <div className="multi-slider">
                                    <h2>Fresh Articles</h2>
                                    <div className="owl-slider">
                                        <TestiMonials />
                                        <TestiMonials />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className="H-third">
                    <Row>
                        <div className="col-lg-3 col-md-4">
                            <div class="left-Third">
                                <img class="img1" src={img11} />
                                <p>GAMIFIED <br /> LEARNING <br /> EXPERIENCE</p>
                                <button class="bttn"><Link to={"/universty"}>Enroll</Link></button>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="three-right">
                                <div class="four-parent">
                                    <div class="flex">
                                        <h1>PST University</h1>
                                        <button><Link to={"/universty"}>Browse Courses</Link></button>
                                    </div>
                                    <div class="row1">
                                        <div class="fl-right">
                                            <p class="p">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                            <p class="wid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                nonummy nibh euismod tincidunt u</p>
                                            <button><Link to={"/course"}>See More</Link></button>
                                        </div>

                                    </div>
                                    <div class="divs flex">
                                        <div class="div1">
                                            <Link to={"/course"}>
                                                <div class="fl-right">
                                                    <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                    <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam nonummy nibh euismod tincidunt u</p>

                                                </div>
                                            </Link>
                                        </div>
                                        <div class="div2">
                                            <Link to={"/course"}>
                                                <div class="fl-right">
                                                    <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                    <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam nonummy nibh euismod tincidunt u</p>

                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="divs flex">

                                        <div class="div1">
                                            <Link to={"/course"}>
                                                <div class="fl-right">
                                                    <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                    <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam nonummy nibh euismod tincidunt u</p>

                                                </div>
                                            </Link>
                                        </div>

                                        <div class="div2">
                                            <Link to={"/course"}>
                                                <div class="fl-right">
                                                    <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                    <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam nonummy nibh euismod tincidunt u</p>

                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className="H-four">
                    <Row>
                        <div className="col-lg-3 col-md-4">
                            <div className="left-last">
                                <div class="cen">
                                    <div class="bot">
                                        <div class="fl-right2">
                                            <p class="p2">Dress To Impress!<br /> Dress To Invest!</p>
                                            <p class="p3">Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed
                                                diam nonummy nibh <br />euismod tincidunt u</p>
                                            <button><a href="#">See More</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 blac">
                            <div className="four-right">
                                <div class="full">
                                    <div class="r-l">

                                        <p class="pp2">Dress To Impress <br />Dress To Invest!</p>
                                        <p class="pp3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                            nonummy nibh euismod tincidunt u</p>
                                        <button><a href="#">See More</a></button>
                                        <img src={img12} />

                                    </div>

                                </div>
                                <div class="full2">
                                    <h1>REVIEWS</h1>
                                    <div class="">
                                        <Link to={"/review"}>
                                            <div class="rev-left">
                                                <div class="rev-btn">
                                                    <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div class="rev-right">
                                            <h5>LATEST</h5>
                                            <Link to={"/review"}>
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </Link>
                                            <Link to={"/review"}>
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </Link>
                                            <Link to={"/review"}>
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </Link>
                                            <Link to={"/review"}>
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </Link>
                                            <Link to={"/review"}>
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </Link>
                                            <Link to={"/review"}>
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </Link>
                                            <button><Link to={"/reviews"}> reviews </Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>


            {/* mpbile design */}
            <div className="mobile-H-page">
                <div className="MH-first">
                    <div class="top-imgs">
                        <div>
                            <img src={img1} />
                            <p>350K followers</p>
                        </div>
                        <div>
                            <img src={img2} />
                            <p>150K followers</p>
                        </div>
                        <div>
                            <img src={img3} />
                            <p>250k followers</p>
                        </div>
                        <div>
                            <img src={img4} />
                            <p>
                                100k followers
                            </p>
                        </div>
                        <div>
                            <img src={img5} />
                            <p>200K followers</p>
                        </div>
                    </div>
                    <div className="top-headline">
                        <div>
                            <img src={elon} />
                            <div className="top-head-content">
                                <span>Headlines</span>
                                <h2>How Elon Mask Plans To Join The AgricultuebSector?</h2>
                                <p>In the latest interview Elon Musk did with bloomberg</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MH-second">
                    <div className="sec-content">
                        <div className="sec-top">
                            <span className="sec-sp1">Small Caps Universe</span>
                            <span className="sec-sp2">+80</span>
                            <span className="sec-sp3">Updated</span>
                        </div>
                        <div className="sec-midle">
                            <h2>SMALL CAPS UNIVERSE</h2>
                            <img src={img9} />
                        </div>
                        <div className="sec-bottom">
                            <Slidder />
                        </div>
                    </div>
                </div>
                <div className="MH-second Mh-third">
                    <div className="sec-content">
                        <div className="sec-top">
                            <span className="sec-sp1">MICRO Caps Universe</span>
                            <span className="sec-sp2">+80</span>
                            <span className="sec-sp3">Updated</span>
                        </div>
                        <div className="sec-midle">
                            <h2>SMALL CAPS UNIVERSE</h2>
                            <img src={img6} />
                        </div>
                        <div className="sec-bottom">
                            <Slidder />
                        </div>
                    </div>
                </div>
                <div className="MH-four">
                    <div className="">
                        <div className="sec-top">
                            <span className="sec-sp1">MICRO Caps Universe</span>
                            <span className="sec-sp2">+80</span>
                            <span className="sec-sp3">Updated</span>
                        </div>
                        <div className="fourth-div">
                            <img src={mob} />
                            <h3>In the latest interview Elon Musk did with bloomberg</h3>
                            <p>In the latest interview Elon Musk did with bloomberg In the latest interview Elon Musk did with bloomberg
                                In the latest interview Elon Musk did with bloombergIn the latest interview Elon Musk did with bloomberg

                            </p>
                            <button><a>Browse Course</a></button>
                        </div>
                    </div>
                </div>
                <div className="MH-fivth">
                    <h2>REVIEWS</h2>
                    <div className="fivth-tabs">
                        {tabs.map((tab, i) =>
                            <button className='tab' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                        )}
                    </div>
                    <div>
                        {tabs.map((tab, i) =>
                            <div key={i}>
                                {currentTab === `${tab.id}` && <div className="p-a"><p className='prg'>{tab.content}</p> <a className='title'>{tab.button}</a></div>}
                            </div>
                        )}
                    </div>
                </div>
                <div className="five-last"><Footer /></div>
            </div>
            <div className="five-last zz"><Footer /></div>

        </div>
    )
}
export default Test