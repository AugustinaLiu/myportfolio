import React from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './components/Footer';

export default function About() {
    return(
        <>
            <div className="flex topMargin">
                <img src={'about.jpg'} className="half"/>
                <div  className="half">
                    <p>Hi! My name is Augustina Ao Liu, a product and UX Designer based in Seattle, WA. I am a senior at the University of Washington, Seattle, majoring in Human-Centered Design & Engineering (HCI track). I also have rich experience in accessibility and inclusive design.</p>
                    <p>To me, design shouldn't be a way to make people limited but to empower people and make everyone achieve more. I hope to design inclusive products with great accessibility that the general public could use, so people with all different abilities could use the designs without any limit.</p>
                    <p>Why HCDE?</p>
                    <p>I've been volunteering in the No.1 Social Welfare House in Changsha, Hunan for six years. In my volunteer experiences, I helped many seniors who have degraded performances in their visual,  hearing, and mobility abilities. </p>
                    <p>Three years ago, I have to stop my volunteering because I was going to study in the U.S. I couldn't come to the Social Welfare House occasionally to help those seniors anymore. At that time, I started thinking about if there is a solution that seniors, who have degraded performances in their multiple abilities, were able to live without any helps from others.</p>
                    <p>Studying HCDE helped me got the answer: accessibility and inclusive design. Hence, I realized the importance of accessibility and inclusivity for a product. I'm dedicated to creating accessible and inclusive designs.</p>
                </div>
            </div>
            <div className="centerButton">
                <Button className="centerTextButton">
                    <a href="https://drive.google.com/file/d/1VVGCQNA5j_H5n4gdiloaI3rRbBeMTojQ/view"
                    className="buttonText">Resume</a>
                </Button>
            </div>
            <p className="centerText1">If you'd like to chat, feel free to email me or message me on Linkedin. </p>
            <p className="centerText1">Eat watermelon🍉!</p>
            <Footer />
        </>
    )
}