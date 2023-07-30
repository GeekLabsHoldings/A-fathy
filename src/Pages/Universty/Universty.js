import React from "react";
import './Universty.css';
import Footer from "../../Component/Footer";
import img0 from '../../imgs/img2.png'
import img1 from '../../imgs/ad-04.png'

const Universty = () => {
    return (
        <div>
            <div className="universty">
                <div className="uni-first">
                    <img src={img0} />
                    <h4>Penny Stocks Today University</h4>
                    <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for years has arrived: Artificial Intelligence
                        is an everyday reality, accessible by everyone. Decrypt U’s latest free course allows you to earn an on-chain certificate of your AI knowledge while
                        making you conversant on the origins of AI, what terms like “machine learning” and “natural language processing” actually mean, and the implications of the literally
                    </p>
                </div>
                <div className="uni-second">
                    <h4>Explore</h4>
                    <p className="sec-p">Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for years has arrived: Artificial Intelligence
                        is an everyday reality, accessible by everyone. Decrypt U’s latest free course allows you to earn an on-chain certificate of your AI knowledge while
                        making you conversant on the origins of AI, what terms like “machine learning” and “natural language processing” actually mean, and the implications of the literally
                    </p>
                    <div className="uni-card">
                        <h5>Starting With Stock Market Investments.</h5>
                        <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for years has arrived:
                            Artificial Intelligence is an everyday reality, accessible by everyone. Decrypt U’s latest free course allows you to earn
                            an on-chain certificate of your AI knowledge while making you conversant on the origins of AI,
                            what terms like “machine learning” and “natural language processing” actually mean, and the implications of the literally
                        </p>
                        <button><a>Enroll</a></button>
                        <img src={img1} />
                    </div>
                    <div className="uni-card">
                        <h5>Starting With Stock Market Investments.</h5>
                        <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for years has arrived:
                            Artificial Intelligence is an everyday reality, accessible by everyone. Decrypt U’s latest free course allows you to earn
                            an on-chain certificate of your AI knowledge while making you conversant on the origins of AI,
                            what terms like “machine learning” and “natural language processing” actually mean, and the implications of the literally
                        </p>
                        <button><a>Enroll</a></button>
                        <img src={img1} />
                    </div>
                    <div className="uni-card">
                        <h5>Starting With Stock Market Investments.</h5>
                        <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for years has arrived:
                            Artificial Intelligence is an everyday reality, accessible by everyone. Decrypt U’s latest free course allows you to earn
                            an on-chain certificate of your AI knowledge while making you conversant on the origins of AI,
                            what terms like “machine learning” and “natural language processing” actually mean, and the implications of the literally
                        </p>
                        <button><a>Enroll</a></button>
                        <img src={img1} />
                    </div>
                    <div className="uni-card">
                        <h5>Starting With Stock Market Investments.</h5>
                        <p>Getting Started with Artificial Intelligence (AI): The moment that science fiction has been heralding for years has arrived:
                            Artificial Intelligence is an everyday reality, accessible by everyone. Decrypt U’s latest free course allows you to earn
                            an on-chain certificate of your AI knowledge while making you conversant on the origins of AI,
                            what terms like “machine learning” and “natural language processing” actually mean, and the implications of the literally
                        </p>
                        <button><a>Enroll</a></button>
                        <img src={img1} />
                    </div>
                </div>
                
            </div>
            <div className="uni-footer">
                    <Footer />
                </div>
        </div>
    )
}
export default Universty;