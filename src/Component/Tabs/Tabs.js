
import React, { useState } from "react";
import { ReactDOM } from "react";
import '../Tabs/Tabs.css'
import Charts from '../Charts/Charts'

const Tab = () => {
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : "";

    return (
        <div className="container">
            <ul className="tab-list">
                <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}
                >
                    Summary
                </li>
                <li
                    className={`tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}
                >
                    Chart
                </li>
                <li
                    className={`tabs ${getActiveClass(3, "active-tabs")}`}
                    onClick={() => toggleTab(3)}
                >
                    Statistics
                </li>
                <li
                    className={`tabs ${getActiveClass(4, "active-tabs")}`}
                    onClick={() => toggleTab(4)}
                >
                    Trading
                </li>
                <li
                    className={`tabs ${getActiveClass(5, "active-tabs")}`}
                    onClick={() => toggleTab(5)}
                >
                    Chairs
                </li>
                <li
                    className={`tabs ${getActiveClass(6, "active-tabs")}`}
                    onClick={() => toggleTab(6)}
                >
                    Desks
                </li>
                <li
                    className={`tabs ${getActiveClass(7, "active-tabs")}`}
                    onClick={() => toggleTab(7)}
                >
                    Screens
                </li>
            </ul>
            <div className="content-container">
                <div className={`content ${getActiveClass(1, "active-content")}`}>

                    <div className="sum-content">
                        <div className="sum-left">
                            <div className="sum-left-one">
                                <div className="left1">
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sum-left-two">
                                <div className="left2">
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sum-left-three">
                                <div className="left3">
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                    <div className="div1">
                                        <p className="ppp1">Previous Close</p>
                                        <p className="ppp2">183.31</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sum-right">
                            <p className="right1">1y Target Est</p>
                            <p className="right2">186.14</p>
                        </div>
                        <div className="top-chart">
                            <Charts />
                        </div>
                    </div>

                </div>
                <div className={`content ${getActiveClass(2, "active-content")}`}>
                    <div className="chartjs">
                        <Charts />
                    </div>
                </div>
                <div className={`content ${getActiveClass(3, "active-content")}`}>
                      
                </div>
                <div className={`content ${getActiveClass(4, "active-content")}`}>
                    <h2>Lorem</h2>
                </div>
                <div className={`content ${getActiveClass(5, "active-content")}`}>
                    <h2>Ipsum</h2>
                </div>
                <div className={`content ${getActiveClass(6, "active-content")}`}>
                    <h2>Dolor</h2>
                </div>
                <div className={`content ${getActiveClass(7, "active-content")}`}>
                    <h2>Dolor</h2>
                </div>

            </div>
        </div>
    );
};

export default Tab;