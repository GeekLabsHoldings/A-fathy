import React from "react";
import "./Homepage.css";
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
import img7 from "../imgs/ad-04.png";
import img8 from "../imgs/logos-05.png";
import img9 from "../imgs/triangles-02.png"
import img10 from "../imgs/logos-06.png";
import img11 from "../imgs/img3.png";
import img12 from "../imgs/logos-05.png";
import img13 from "../imgs/logos-07.png";
import img14 from "../imgs/logo.png"
import { FiSearch } from "react-icons/fi";
import Navbar from "../Component/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react'
import TestiMonials from "./Testmonial/Testmonial";
import Slidder from '../Component/HomeSlider/Slidder'
// import 'swiper/css' 
// import 'swiper/css/effect/coverflow'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation' 
//  import {EffectCoverflow,Pagination,Navigation} from 'swiper'

import slide_img1 from '../imgs/img1.jpeg'
import slide_img2 from '../imgs/img10.png'
import slide_img3 from '../imgs/img1.jpeg'
import slide_img4 from '../imgs/img1.jpeg'
import slide_img5 from '../imgs/img1.jpeg'
import slide_img6 from '../imgs/img1.jpeg'
import slide_img7 from '../imgs/img1.jpeg'


const Homepage = () => {
    return (
        <div className="">
            <div className="Home-page">
                <div className="home-first">
                    <div className="h-p">
                        
                        <div className="Left">
                            <div className="first-left">
                                <div class="left-imgs">
                                    <img src={img1} />
                                    <img src={img2} />
                                    <img src={img3} />
                                    <img src={img4} />
                                    <img src={img5} />
                                </div>
                                <div class="left-text">
                                    <p>Following our Social Media Grants <br />
                                        You Lots Of Rewards To Enjoy Exclusively On Our Website.</p>
                                </div>
                                <div class="input-search">
                                    <span><FiSearch /></span>
                                    <input type="text" />

                                </div>
                                <div class="left-two">
                                    <img src={img6} />
                                    <h3>MICRO CAPS <br />UNIVERSE</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad </p>
                                    <button><a href="#">Explore</a></button>
                                </div>
                                <div className="left-three">
                                    <div class="left-five">
                                        <img class="img1" src={img11} />
                                        <p>GAMIFIED <br /> LEARNING <br /> EXPERIENCE</p>
                                        <button class="bttn"><a>Enroll</a></button>

                                    </div>
                                </div>
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
                            <div className="second-left">
                                <div class="seconed-two">
                                    <img src={img9} />
                                    <h3>SMALL CAPS<br /> UNIVERSE</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad </p>
                                    <button><a href="#">Explore</a></button>
                                </div>
                                <div class="left-four">
                                    <img class="img1" src={img10} />
                                    <button class="bttn"><a>Shop Now</a></button>

                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="first-right">
                                <div className="abs-home"></div>
                                <Slidder />
                                <div class="dress-sec">
                                    <div class="">
                                        <div class="dr-left">
                                            <img src={img8} />
                                            <h4>Dress To Impress! <br />Dress To Invest!</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                                euismod tincidunt ut </p>
                                        </div>
                                        <div class="dr-right">
                                            <img src={img7} />
                                            <button><a href="#">Shop Now</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="seconed-right">
                                <div className="slider-two">
                                    <h1>Latest.</h1>
                                    <ImageSliderTwo slides={SliderData} />
                                </div>
                                <div className="multi-slider">
                                    <h2>Fresh Articles</h2>
                                    <div className="owl-slider">
                                        <TestiMonials />
                                        <TestiMonials />
                                    </div>
                                </div>
                            </div>
                            <div className="three-right">
                                <div class="four-parent">
                                    <div class="flex">
                                        <h1>PST University</h1>
                                        <button><a>Browse Courses</a></button>
                                    </div>
                                    <div class="row1">
                                        <div class="fl-right">
                                            <p class="p">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                            <p class="wid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                nonummy nibh euismod tincidunt u</p>
                                            <button><a href="#">See More</a></button>
                                        </div>

                                    </div>
                                    <div class="divs flex">
                                        <div class="div1">
                                            <div class="fl-right">
                                                <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                    diam nonummy nibh euismod tincidunt u</p>

                                            </div>
                                        </div>
                                        <div class="div2">
                                            <div class="fl-right">
                                                <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                    diam nonummy nibh euismod tincidunt u</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="divs flex">
                                        <div class="div1">
                                            <div class="fl-right">
                                                <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                    diam nonummy nibh euismod tincidunt u</p>

                                            </div>
                                        </div>
                                        <div class="div2">
                                            <div class="fl-right">
                                                <p class="fo">Top 10 Loadouts in warzone 2023 - How to setup your loadout?!</p>
                                                <p class="fo2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                    diam nonummy nibh euismod tincidunt u</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        <div class="rev-left">
                                            <div class="rev-btn">
                                                <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            </div>
                                        </div>
                                        <div class="rev-right">
                                            <h5>LATEST</h5>
                                            <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            <p>Lorem ipsum dolor sit amet,<br /> consectetuer amet, consectetuer </p>
                                            <button><a>more reviews</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
            <div className="five-last"><Footer /></div>
        </div>
    )
}
export default Homepage;  