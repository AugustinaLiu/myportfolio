import React from "react";
import './App.css';
import './css/project.css';

export default function About() {
    return(
        <>
            <div className="flex topMargin">
                <img src={'iselective.png'} className="half"/>
                <div  className="half">
                    <p className="title">Crafting the shopping experience for cross-cultural eCommerce</p>
                    <p>iSelevtive.com is a Chinese eCommerce company focusing on coupon sharing and nearby purchasing. The company currently aims to enter the U.S. market and now targets both the U.S. and Chinese users in the U.S. I worked as a product designer there. In this project, I designed the whole shopping process for its mobile website to create an effective shopping experience.</p>
                    <p><span className="boldSpan">Role: </span> I did the entire design works</p>
                    <p><span className="boldSpan">Duration: </span> Aug. - Oct., 2019</p>
                    <p><span className="boldSpan">Tools: </span> Miro, Figma, Principle</p>
                </div>
            </div>
            <div className="designQuestionBox">
                <p className="title centerText">
                    DESIGN QUESTION
                </p>
                <p className="questionText">
                "How might we create an experience for both Chinese users and U.S. users to shop online by mobile phones efficiently?"
                </p>
            </div>
        </>
    )
}