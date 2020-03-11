import React from "react";
import './App.css';
import './css/project.css';
import Footer from './components/Footer';

export default function About() {
    return(
        <>
            <div className="flex topMargin">
                <img src={'cozone.png'} className="half"/>
                <div  className="half">
                    <p className="title">Best coworking space for freelancers and remote workers</p>
                    <p>CoZone is an online platform that allows restaurants, bars, or cafe owners to rent out their place during the business downtime for Work from Home employees and freelancers to work. This service solves the problem of working from home by providing accessible professional locations to work, flexible working hours, and comparably low prices.</p>
                    <p><span className="boldSpan">Role: </span> I did the entire design works</p>
                    <p><span className="boldSpan">Duration: </span> Mar. - Jun., 2019</p>
                    <p><span className="boldSpan">Tools: </span> Miro, Figma, Principle</p>
                </div>
            </div>
            <div className="designQuestionBox">
                <p className="title centerText">
                    DESIGN QUESTION
                </p>
                <p className="questionText">
                "How might we create bring positive experiences of work from home employees and freelancers to work remotely in suburb?"
                </p>
            </div>
            <div className="space"/>
            <Footer />
        </>
    )
}