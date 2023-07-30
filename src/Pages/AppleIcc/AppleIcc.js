import React, { useState } from "react";
import '../AppleIcc/AppleIcc.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import img15 from "../../imgs/Untitled-1-01.png";
import img16 from "../../imgs/Courses Pages-12.png";
import Tabs from '../../Component/Tabs/Tabs'
import Footer from "../../Component/Footer";
import Charts from "../../Component/Charts/Charts";
const AppleIcc = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Summary',
            title: 'My details',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 2,
            tabTitle: 'Chart',
            title: 'My Newsletter',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 3,
            tabTitle: 'Statistics',
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
        <div className="AppleIcc">
            <div className="AppleIcc-content">
                <div className="AppleIcc-reviews">
                    <img className="ffrist" src={img15} />
                    <h5>Apple Inc. (APPL)</h5>
                    <p className="App-p1">NasdaqGS - NasdaqGS Real Time Price. Currency in USD.</p>
                    <p className="App-p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                    </p>
                    <div className="App-num">
                        <div className="num1">
                            <h5>183.31 <span>-0.48</span> <span>(0-.26%)</span></h5>
                            <p>At close: June 13 04:00PM EDT</p>
                        </div>
                        <div className="num2">
                            <h5>183.36 <span>-0.5</span> <span>(0-.03%)</span></h5>
                            <p>Pre-Market: 06:14AM EDT</p>
                        </div>
                    </div>
                    <span className="border"></span>
                </div>
                <div className="tabs-par">
                    <Tabs />
                </div>
            </div>
            <div className="Acc-footer">
                <Footer />
            </div>
            
        </div>
    )
}
export default AppleIcc;