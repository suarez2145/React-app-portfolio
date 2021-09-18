import React from 'react';


const NavBar = () => {


    return (
        <div className='nav-bar-body'>
            <div className='nav-bar-body__container'>
                <a href="mailto:suarez.exxon@gmail.com"><img className='nav-bar-body__main-images' src='/images/envelope-50.png' alt="mail" /></a>
                <a href='https://github.com/suarez2145'><img className='nav-bar-body__main-images' src='/images/github-50.png' alt="github"/></a>
                <a href='https://www.linkedin.com/in/exxonsuarez/'><img className='nav-bar-body__main-images' src='/images/linkedin-50.png' alt="linkedin"/></a>
            </div>
        </div>
    )
}


export default NavBar;