import React, { useState } from 'react';
import '../MyAccount/MyAccount.css'
import img14 from "../../imgs/logo.png"
import img13 from "../../imgs/logos-07.png";
import Footer from '../../Component/Footer';
const MyAccount = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'My details',
            title: 'My details',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 2,
            tabTitle: 'My Newsletter',
            title: 'My Newsletter',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        },
        {
            id: 3,
            tabTitle: 'My Orders',
            title: 'My Orders',
            title2: 'Account Info:',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='my-account'>
            <div className='account-content'>
                <div className='account-left'>
                    <h5>My Account</h5>

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
                                    <div>
                                        <p className='title2'>{tab.title}</p>
                                        <p className='title'>{tab.title2}</p>
                                        <p className='prg'>{tab.content}</p>
                                        <div className='acc-form'>
                                            <div className='inputs-flex'>
                                                <div>
                                                <label>First Name</label>
                                                <input type='text' />
                                                </div>
                                                <div className='lee'>
                                                <label>Last Name</label>
                                                <input type='text' />
                                                </div>
                                            </div>
                                            <label>Birth Date</label>
                                            <input type='text' />
                                            <label>E-MAIL ADDRESS</label>
                                            <input type='text' />
                                            <button><a href='#'>Done</a></button>
                                        </div>
                                    </div>
                                }
                            </div>

                        )}
                    </div>
                </div>
            </div>
            <div className='account-footer'>
                <Footer />
            </div>
        </div>
    );
}

export default MyAccount;