import React from 'react';
import { useState } from 'react';




const NavBar = () => {

    const [burgerbarOpen, setBurgerbarOpen] = useState(false);


    const handleToggle =() => {
        setBurgerbarOpen(!burgerbarOpen)
    }


    return (
        <div className={`nav-bar-body ${burgerbarOpen ? "topMarg" : ""}`}>
            <ul className={`burgerMenuNav ${burgerbarOpen ? "showMenu" : ""}`}>
                <li className="burgerItem"><img className='nav-bar-body__main-images' src='/images/email_plain2.png' alt="mail" /><a href="mailto:suarez.exxon@gmail.com">Email Me</a></li>
                <li className="burgerItem"><img className='nav-bar-body__main-images' src='/images/github_plain2.png' alt="github"/><a href='https://github.com/suarez2145'>Github</a></li>
                <li className="burgerItem"><img className='nav-bar-body__main-images' src='/images/linkedin_plain2.png' alt="linkedin"/><a href='https://www.linkedin.com/in/exxonsuarez/'>Linkedin</a></li>
            </ul>
            <div className='nav-bar-body__container'>
                <ul className="nav-menu">
                    <li>
                        <a className='iconMarg' href="mailto:suarez.exxon@gmail.com"><img className='nav-bar-body__main-images' src='/images/email-send-24.png' alt="mail" /></a>
                    </li>
                    <li>
                        <a href='https://github.com/suarez2145'><img className='nav-bar-body__main-images' src='/images/github-32.png' alt="github"/></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/exxonsuarez/'><img className='nav-bar-body__main-images' src='/images/linkedin-30.png' alt="linkedin"/></a>
                    </li>
                </ul>
            </div>

            <div className={`hamburger ${burgerbarOpen ? "openBurger" : ""}`} onClick={handleToggle}>
                {/* {burgerbarOpen ? "Open" : "Close"} */}
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

        </div>
    )
}        


export default NavBar;