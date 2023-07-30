import React from 'react'
import './News.css'
import img0 from '../../imgs/group2.png'
import img1 from '../../imgs/group1.png'
import img2 from '../../imgs/Untitled-1.png'
import img3 from '../../imgs/logos-06.png'
import img4 from '../../imgs/img10.png'
import img5 from '../../imgs/Untitled-1-15.png'
import img6 from '../../imgs/Untitled-1-18.png'
import img7 from '../../imgs/Untitled-1-16.png'
import img8 from '../../imgs/Untitled-1-17.png'
import Footer from '../../Component/Footer'


const News = () => {
    return (
       <div>
            <div className='news'>
            <div className='news-flex-first'>
                <div className='news-left'>
                    <h4>Financial News by the People & For the People</h4>
                    <p>
                        Penny Stocks Today is the flagship brand of our growing media network focused
                        on the financial markets. Each outlet specializes in specific niches by distributing
                        high-quality research to investing audiences through different channels.
                    </p>
                    <p>
                        Building on our relationships with companies and the investing community, we aim to become a leader among independent equity news organizations.
                    </p>
                    <img src={img0} />
                    <span>Our Sister Companies</span>
                </div>
                <div className='news-right'>
                    <img src={img1} />
                </div>
                <div className='flex-icons'>
                    <div><img className='img1' src={img2} /></div>
                    <div><img className='img2' src={img3} /></div>
                    <div><img className='img3' src={img4} /></div>
                </div>
                <div className='news-last'>
                    <div className='last-left'>
                        <p>Penny Stocks was built by investors for investors. Established in early 2020, we focus on how to create news
                            and info that gives readers a full picture of the micro and small cap markets. We regularly cover the latest
                            stocks and their movements with in-depth analysis of catalysts and market potential through high-quality articles.
                            Our team is a combination of veteran investors and writers who know how important proper research is to making the correct investing decisions.
                            Together, we are working to transform Penny Stock investing into something anybody could easily understand.
                        </p>
                        <p className='ma'>Through our articles and videos, PennyStocks.Today has become a go to source for micro-cap
                            stocks covering the best penny stocks today and top penny stock news each day. We are proud to
                            provide this service and plan to continue growing with our readership.

                        </p>
                    </div>
                    <div className='last-right'>
                        <div className='box1'>
                            <img src={img5} />
                        </div>
                        <div className='box2'>
                            <img src={img6} />
                        </div>
                        <div className='box3'>
                            <img src={img7} />
                        </div>
                        <div className='box4'>
                            <img src={img8} />
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
        <div className='news-footer'>
        <Footer />
    </div>
       </div>
    )
}
export default News