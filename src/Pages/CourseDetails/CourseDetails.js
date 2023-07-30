import React,{useState,useRef} from "react";
import '../../Pages/CourseDetails/CourseDetails.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import img15 from "../../imgs/bg-11.png";
import img16 from "../../imgs/Untitled-1-03.png"
import img17 from "../../imgs/Untitled-1-04.png"
import img18 from "../../imgs/Courses Pages-09.png"
import img19 from "../../imgs/Courses Pages-10.png"
import { AiFillStar } from 'react-icons/ai'
import {GrBottomCorner} from 'react-icons/gr'
import Footer from "../../Component/Footer";
const faqs = [
    {
        id: 1,
        header: "Stock Market Investing And Trading Foundation",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 2,
        header: "Key Concepts When Investing & Trading In The Stock Market",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 3,
        header: "Types Of Stock (Growth Stocks, Dividend Stocks, & Value Stocks) + (Market Cap)",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 4,
        header: "What To Buy: Individual Stocks, Stock Mutual Funds, & ETF: Exchange Traded Funds",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 5,
        header: "Strategies: Investing And Trading Strategies In The Stock Market",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 6,
        header: "Picking Stocks: Qualitative Company Evaluation (Competitive Advatages And More)",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 7,
        header: "Fundamental Analysis: Picking Stocks Using Ratios",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 9,
        header: "Picking Stock: Technical Analysis (Charting) Using Charts, Patterns, And Trends",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        text2:`3 Articles - 15 minutes`
    },
    {
        id: 10,
        header: "Risk And Risk Measures In The Stock Market",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        text2:`3 Articles - 15 minutes`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text,text2 } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <p className="ppp">{text2}</p>
                    <img src={img19} className="arrow" />
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                    
                </div>
            </div>
        </div>
    )
}
const Investing = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    return (
        <div className="course-details">
            <div className="course-content">
                <div className="course-first">
                    <img src={img15} />
                    <div className="first-text">
                        <h5>Investing In Stocks The Complete Course!</h5>
                        <p>Master Stock Market Investing & Trading in the Stock Market. Top 1% Instructor & Millionaire Investor. Invest & Trade!</p>
                    </div>
                    <span className="co-de">Course Details</span>
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

                        <p className="m-l">4.0 <span>(250 Student)</span></p>
                    </div>
                    <div className="fl fl-four">

                        <p>Created by <span>Ash Bash</span></p>
                    </div>
                </div>
                <div className="course-sec">

                    <div className="sec-items">
                        <h5>What you'll learn</h5>
                        <div className="it-flex">
                            <div className="it it1">
                                <img className="correct-img" src={img18} />
                                <p>Have complete understanding and confidence when investing in the Stock Market.</p>
                            </div>
                            <div className="it it1">
                                <img className="correct-img" src={img18} />
                                <p>Use Basic & Advanced Stock Screeners so you can narrow the choices to the best stocks for you.</p>
                            </div>
                            <div className="it it1">
                                <img className="correct-img" src={img18} />
                                <p>Apply best practices and techniques to make better stock choices.</p>
                            </div>
                        </div>

                        <div className="it-flex ttt">
                            <div className="it it1">
                                <img className="correct-img" src={img18} />
                                <p>Have complete understanding and confidence when investing in the Stock Market.</p>
                            </div>
                            <div className="it it1">
                                <img className="correct-img" src={img18} />
                                <p>Use Basic & Advanced Stock Screeners so you can narrow the choices to the best stocks for you.</p>
                            </div>
                            <div className="it it1">
                                <img className="correct-img" src={img18} />
                                <p>Apply best practices and techniques to make better stock choices.</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="accordion">
                    <>
                        <div className="container-fluid mt-5 mb-5">
                            <div className="row justify-content-center">
                                <div className="mt-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="">Course content</h4>
                                            {faqs.map((faq, index) => {
                                                return (
                                                    
                                                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div className="requ">
                    <h5>Requirements</h5>
                    <p>There are no prerequisites although would be good to consider your long-term financial goals.</p>
                    <button><a>Enroll Now</a></button>
                </div>

            </div>
            <div className="course-footer">
                <Footer />
            </div>




            
        </div>
    )
}
export default Investing