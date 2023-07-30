import React, { useState } from 'react';
import '../Review/Review.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import img15 from "../../imgs/Untitled-1 [Recovered]-06.png";
import img16 from "../../imgs/Untitled-1 [Recovered]-07.png";
import Footer from '../../Component/Footer';
const Review = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Why you should trust us',
            title: 'My details',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 2,
            tabTitle: 'How we tested',
            title: 'My Newsletter',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 3,
            tabTitle: 'How we tested',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 4,
            tabTitle: 'Who this is for',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 5,
            tabTitle: 'Who this is for',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 6,
            tabTitle: 'Who this is for',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div>
            <div className='review'>
                <div className='account-content'>
                    <div className='account-left'>
                        <h5>In This Review</h5>

                        <div className='Tabs'>
                            <div className='tabs'>
                                {tabs.map((tab, i) =>
                                    <button className='tab' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>

                                )}

                            </div>

                        </div>
                    </div>
                    <div className='account-right'>
                        <div className='content'>

                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div className='rev-r'>
                                            <span className='sp'>Updated 2023</span>
                                            <div className='review-content'>
                                                <img src={img15} />
                                                <div className='text-con'>
                                                    <h4>Best Computer Screens For Trading</h4>
                                                    <p>New robotic lawn mowers have eliminated the nuisances that
                                                        kept older models from delivering what most folks are hoping for: a big lawn mowed constantly, with zero oversight and minimal maintenance.
                                                    </p>
                                                    <p>Several such mowers are emerging in 2023, and they’re quite pricey.
                                                        But they’re already looking good enough to shift the conversation on what’s possible in lawn care.
                                                    </p>
                                                    <p>We’ve tested one model so far (with plans for testing more as soon as they’re available).
                                                        It’s the Husqvarna Automower 450XH EPOS, and we’ve been more than impressed with its capabilities.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='text-con2'>
                                                <img src={img16} />
                                                <p>
                                                    Consider a robot lawn mower if the following features and capabilities particularly appeal to you.
                                                </p>
                                                <p>Robotic mowers are tireless workers. Instead of mowing an area once a week, they can cut it once
                                                    a day or every other day. This consistent maintenance not only keeps a lawn looking pristine but
                                                    also improves turf health, because the mower is cutting only the very tip of each blade of grass,
                                                    and the small cutoffs quickly feed back into the soil. In addition, most robotic mowers cut with
                                                    small razor blades, so the cut is smooth, not the jagged tear you get from traditional mower blades
                                                    once they’ve dulled a little. With that cleaner cut, grass is less likely to develop brown tips.
                                                </p>
                                                <p>
                                                    The new generation of robotic mowers can do more. Like a robot vacuum, a robot mower needs a clearly
                                                    defined work area. Until now, defining that area has required the use of a boundary wire—either buried
                                                    a few inches deep or pinned down with clips—around the perimeter of the lawn. Installing the wire is a
                                                    fiddly process, and if it is ever damaged by an animal, a snowplow, or an errant shovel, finding and fixing
                                                    the break can be difficult. To reshape the work area, you install additional boundary wires. The new
                                                    mowers eliminate the need for the wire, using satellite positioning or onboard sensors instead, and their
                                                    app-based controls allow for scheduled cutting, multiple work areas, cutting-height adjustments,
                                                    mowing patterns, and even weather monitoring.
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>

                            )}
                        </div>
                    </div>
                </div>

            </div>
            <div className='rev-footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Review;