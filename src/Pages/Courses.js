import React from "react";
import './Courses.css'
import img0 from '../imgs/img10.png'

const Courses = () => {
    return (
        <div className="Courses">
            <div className="courses-first">
                <div className="first-text">
                    <h4>Starting With Stock Market Investments.</h4>
                    <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been
                        heralding for years has arrived: Artificial Intelligence is an everyday reality, accessible
                        by everyone. Decrypt U’s latest free course allows you to earn an on-chain certificate of
                        your AI knowledge while making you conversant on the origins of AI, what terms like “machine learning”
                        and “natural language processing” actually mean, and the implications of the literally
                    </p>
                </div>
                <div className="first-img">
                    <img src={img0} />
                </div>
            </div>
            <div className="courses-btn">
                <div className="ss">
                    <h2 className="pp">Brief</h2>
                    <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for
                         years has arrived: Artificial Intelligence is an everyday reality, accessible by everyone. Decrypt U’s
                          latest free course allows you to earn an on-chain certificate of your AI knowledge while making you conversant
                           on the origins of AI, what terms like “machine learning” and
                            “natural language processing” actually mean, and the implications of the literally 
                    </p>
                    
                </div>
                <div className="si"><span className="fi-sp"></span><span className="fi-sp2"></span></div>
            </div>
        </div>
    )
}
export default Courses;               