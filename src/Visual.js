import React from "react";
import './css/Other.css';
import Footer from './components/Footer';

export default function About() {
    return(
        <>
            <div className="title">Visual Design</div>
            <div className="container">
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/06/Work.png" className="img width3"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/05/Seattle-.png" className="img width2"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/05/bubble.png" className="img width4"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/05/Artboard-1.png" className="img width4"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2018/12/iMac-Flat-Mockup.png" className="img width4"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2018/11/logo.png" className="img width4"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/03/note-1.png" className="img width4"/>
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/03/note-5.png" className="img width4"/>
            </div>
            <div className="space"/>
            <Footer />
        </>
    )
}