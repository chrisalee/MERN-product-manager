import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    setInterval(updateCurrentTime, 1000);

    const now = new Date().toLocaleTimeString().toUpperCase();

    const [currentTime, setCurrentTime] = useState(now);

    function updateCurrentTime() {
        const newTime = new Date().toLocaleTimeString().toLowerCase();
        setCurrentTime(newTime);
    }

    const color = {
        color: '#1a53ff'
    };

// find new images and style in css

    return(
        <div>
            <footer className="mx-auto"> 
                
                <p>
                    <a href="https://github.com/chrisalee" alt="GitHub"> 
                    <img src="https://octicons.github.com/img/og/mark-github.png" 
                        alt="GitHub"
                        width="100"
                        height="auto">
                    </img>
                    </a> 
                </p>
                <p>
                    <a href="http://www.linkedin.com/in/christopheralee22" alt="LinkedIn"> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/256px-Linkedin_icon.svg.png" 
                        alt="LinkedIn"
                        width="24"
                        height="auto">
                    </img>
                    </a> 
                </p>
                <p >{currentTime} </p>
                <p style={color}> © {currentYear} </p>
                
            </footer>
        </div>
    );
}


export default Footer;