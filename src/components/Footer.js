import React from 'react';
import '../App.css';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
    return(
        <div className="footer">
            <p className="greeting">
            Say Hi here!
            </p>
            <div >
            <a href="mailto:liuao.uw@gmail.com">
                <EmailIcon className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/augustinal">
                <LinkedInIcon className="icon"/>
            </a>
            </div>
            <div className="copynote">
            <p>Designed & Code by Augustina Ao Liu in 2020. All rights reserved.</p>
            </div>
        </div>
    );
}