import React, { useState } from "react";
import '../Updated/Updated.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import img15 from "../../imgs/Courses Pages-11.png";
import img16 from "../../imgs/Courses Pages-12.png";
import Footer from "../../Component/Footer";
const Apdating = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'All',
            title: 'My details',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 2,
            tabTitle: 'Tech',
            title: 'My Newsletter',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 3,
            tabTitle: 'Vehicles',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 4,
            tabTitle: 'Trading',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 5,
            tabTitle: 'Chairs',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 6,
            tabTitle: 'Desks',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 7,
            tabTitle: 'Screens',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <div className="apdating">
            <div className="apdating-content">
                <div className="apdating-reviews">
                    <img className="ffrist" src={img15} />
                    <img className="ttwo" src={img16} />
                    <h5>Updated Reviews For Everything</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </p>
                </div>
                <div>

                    <div className='Tabs'>
                        <div className='tabs'>
                            {tabs.map((tab, i) =>
                                <button className='tab' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>

                            )}

                        </div>

                    </div>
                </div>
                <div className="updating-content">
                    <div className="apdating-left">

                        <div className='content'>

                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <div className="div-one">
                                                <img src={img15} className="pict-one" />
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                            </div>

                                            <div className="div-one">
                                                <img src={img15} className="pict-one" />
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                            </div>
                                        </div>

                                    }
                                </div>

                            )}
                        </div>

                    </div>
                    <div className="apdating-middle">
                        <div className='content-middle'>

                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <div className="middle-pic">
                                                <img src={img15} className="pc-one" />
                                                <p className="middle-p1">Best Computer Screens For Trading</p>
                                                <p className="middle-p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                                    vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril </p>
                                            </div>

                                            <div className="middle-pic2">
                                                <img src={img15} className="pc-one" />
                                                <p className="middle-p1">Best Computer Screens For Trading</p>
                                                <p className="middle-p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                                    vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril </p>
                                            </div>
                                            <div className="middle-pic3">
                                                <img src={img15} className="pc-one" />
                                                <p className="middle-p1">Best Computer Screens For Trading</p>
                                                <p className="middle-p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                                    vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                                    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril </p>
                                            </div>
                                        </div>

                                    }
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="apdating-right">

                        <div className='content'>

                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <div className="div-one">
                                                <img src={img15} className="pict-one" />
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                            </div>

                                            <div className="div-one">
                                                <img src={img15} className="pict-one" />
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                            </div>
                                        </div>

                                    }
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
           <div className="update-footer">
             <Footer />
           </div>
        </div>
    )
}
export default Apdating;