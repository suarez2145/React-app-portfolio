import React from 'react'

const ToolsSection = () => {


    return (

        <div className='tools-grid-container'>
            <div className='tools-body-container'>
                <p className='tools-title'> Development <br/> Tools <br />&<br /> Skills </p>
                <div className='tools-list-container'>
                    <ul className='list_container'>
                        <li className='list_container__txt'>Javascript <img className='list_container__img' src='/images/javascript-100.png' alt="Javascript"></img></li>
                        <li className='list_container__txt'>Python <img className='list_container__img' src='/images/python-64.png' alt="Python"></img></li>
                        <li className='list_container__txt'>Django <img className='list_container__img' src='/images/django-32.png' alt="Django"></img></li>
                        <li className='list_container__txt'>React <img className='list_container__img' src='/images/react-30.png' alt="React"></img></li>
                        <li className='list_container__txt'>Html <img className='list_container__img' src='/images/html-5-48.png' alt="HTML"></img></li>
                        <li className='list_container__txt'>Css <img className='list_container__img' src='/images/css3-96.png' alt="Css"></img></li>
                        <li className='list_container__txt'>Sass <img className='list_container__img' src='/images/sass-96.png' alt="Sass"></img></li>
                        <li className='list_container__txt'>Github <img className='list_container__img' src='/images/github-96.png' alt="Github"></img></li>
                        <li className='list_container__txt'>Redux <img className='list_container__img' src='/images/redux-96.png' alt="Redux"></img></li>
                        <li className='list_container__txt'>Firebase <img className='list_container__img' src='/images/firebase-96.png' alt="Firebase"></img></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ToolsSection;