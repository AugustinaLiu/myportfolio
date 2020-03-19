import React from "react";
import './css/Other.css';
import Footer from './components/Footer';
import Fade from '@material-ui/core/Fade';

export default function About() {
    return(
        <>
            {/* <Fade in={true}> */}
                <div className="title">UI Design</div>
                <div className="container">
                    <div className="box">
                        <img src="https://www.augustinaliu.com/wp-content/uploads/2019/12/Daily-UI-06.png" className="img width1"/>
                        <p className="text">User Profile</p>
                    </div>
                    <div className="box">
                        <img src="https://www.augustinaliu.com/wp-content/uploads/2019/09/DAILY-UI-002-1.png" className="img width1"/>
                        <p className="text">Credit Card Check out Page</p>
                    </div>
                    <div className="box">
                        <img src="https://www.augustinaliu.com/wp-content/uploads/2019/09/Frame-2.png" className="img width1"/>
                        <p className="text">Branding for Cheelcha</p>
                    </div>
                    <div className="box">
                        <img src="https://www.augustinaliu.com/wp-content/uploads/2019/09/DAILY-UI-002.1-1.png" className="img width1"/>
                        <p className="text">Calculator</p>
                    </div>
                    <div className="box">
                        <img src="https://www.augustinaliu.com/wp-content/uploads/2019/09/DAILY-UI-002.2.png" className="img width1"/>
                        <p className="text">Starbucks Landing Page</p>
                    </div>
                    <div className="box">
                        <img src="https://www.augustinaliu.com/wp-content/uploads/2019/12/PAYMENG-APP-2.png" className="img width1"/>
                        <p className="text">Payment Process</p>
                    </div>
                </div>
                <div className="space"></div>
                <Footer />
            {/* </Fade> */}
        </>
    )
}