import React from 'react'
// import Typewriter from 'typewriter-effect';

const ToolsSection = () => {


    return (

        <div className='tools-grid-container'>
            <div className='tools-body-container'>
                <p className='tools-title'> My Toolkit </p>
                <div className='tools-list-container'>
                    <ul className='list_container'>
                        <li> <img className='list_container__img' src='/images/javascript-100.png' alt="Javascript"></img> <p>Javascript</p> </li>
                        <li> <img className='list_container__img' src='/images/python-64.png' alt="Python"></img> <p>Python</p> </li>
                        <li> <img className='list_container__img' src='/images/django-32.png' alt="Django"></img> <p>Django</p> </li>
                        <li> <img className='list_container__img spin_class' src='/images/react_50.png' alt="React"></img> <p>React</p> </li>
                        <li> <img className='list_container__img' src='/images/html-5-48.png' alt="HTML"></img> <p>Html</p> </li>

                    </ul>
                    <ul className='list_container'>
                        <li> <img className='list_container__img' src='/images/css3-96.png' alt="Css"></img> <p>Css</p> </li>
                        <li> <img className='list_container__img' src='/images/sass-96.png' alt="Sass"></img> <p>Sass</p> </li>
                        <li> <img className='list_container__img' src='/images/github-96.png' alt="Github"></img> <p>Github</p> </li>
                        <li> <img className='list_container__img' src='/images/redux-96.png' alt="Redux"></img> <p>Redux</p> </li>
                        <li> <img className='list_container__img' src='/images/firebase-96.png' alt="Firebase"></img> <p>Firebase</p> </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default ToolsSection;