import React from "react";
import './App.css';
import './css/project.css';
import Footer from './components/Footer';

export default function About() {
    return(
        <>
            <div className="flex topMargin">
                <img src="https://www.augustinaliu.com/wp-content/uploads/2019/10/Navindor-thumbnail-e1570921617698.png" className="half"/>
                <div  className="half">
                    <p className="mainTitle">Crafting the shopping experience for cross-cultural eCommerce</p>
                    <p>People with visual impairment have a high level of difficulty in the process of indoor navigation. It is hard for them to identify where they are at the building and how to get to the place they want to go. Hence, they hope to have a device to help them complete indoor navigation.NavIndor is a mobile app that assists people with visual impairment navigate indoor independently with both visual cue and audio cue. This application fulfills the desire for independence for people with visual impairment to complete indoor navigation.</p>
                    <p><span className="boldSpan">Role: </span> UX Designer</p>
                    <p><span className="boldSpan">Duration: </span> Apr. - Jun., 2018</p>
                    <p><span className="boldSpan">Tools: </span> Miro, Figma, Principle</p>
                </div>
            </div>
            <div className="designQuestionBox">
                <p className="centerText">
                    DESIGN QUESTION
                </p>
                <p className="questionText">
                "How might we create an experience for both Chinese users and U.S. users to shop online by mobile phones efficiently?"
                </p>
            </div>
            <div className="space"/>
            <Footer/>
        </>
    )
}