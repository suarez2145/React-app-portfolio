import React from 'react';
import { useState } from 'react';



const Projects = () => {


    // ***** expensify project cover *****

    const [expensifyProjectCoverOpen, setExpensifyProjectCoverOpen] = useState(false);


    // this function is to stop the touchEvent on the "View Live" button on each project from triggering the toggle onClick event which 
    // would open and close the project details
    const linkHandler = (event) => {
        event.stopPropagation()
    }


    let handleExpensifyClick = () => {
        if ('ontouchstart' in window) {
            console.log('cancelled the click');   
        } else {
            setExpensifyProjectCoverOpen(!expensifyProjectCoverOpen)

        }
    }



    let handleExpensifyTouch = () => {
        
        setExpensifyProjectCoverOpen(!expensifyProjectCoverOpen)
        
        
    }

    // ***** steady building project cover *****

    const [steadyProjectCoverOpen, setSteadyProjectCoverOpen] = useState(false);

    let handleSteadyTouch = () => {

        setSteadyProjectCoverOpen(!steadyProjectCoverOpen)
        
    }


    //  had to implement this to cancel the Click-Event on mobile view BUT keep the Touch-Event active 
    let handleSteadyClick = () => {
        if ('ontouchstart' in window) {
            console.log('cancelled the click');   
        } else {
            setSteadyProjectCoverOpen(!steadyProjectCoverOpen)
        }
    }


        // ***** sokly building project cover *****

        const [soklyProjectCoverOpen, setSoklyProjectCoverOpen] = useState(false);


            //  had to implement this to cancel the Click-Event on mobile view BUT keep the Touch-Event active 
        let handleSoklyClick = () => {
            if ('ontouchstart' in window) {
                console.log('cancelled the click');   
            } else {
                setSoklyProjectCoverOpen(!soklyProjectCoverOpen)
            }
        }

        let handleSoklyTouch = () => {
            setSoklyProjectCoverOpen(!soklyProjectCoverOpen)
            
        }



        // ***** taskv building project cover *****

        const [taskvProjectCoverOpen, setTaskvProjectCoverOpen] = useState(false);


        let handleTaskvClick = () => {
            if ('ontouchstart' in window) {
                console.log('cancelled the click');   
            } else {
                setTaskvProjectCoverOpen(!taskvProjectCoverOpen)
            }
        }

        let handleTaskvTouch = () => {
            setTaskvProjectCoverOpen(!taskvProjectCoverOpen)
            
        }



    const [burgerbarOpen, setBurgerbarOpen] = useState(false);



    const handleToggle =() => {
        setBurgerbarOpen(!burgerbarOpen)
    }


    return (

        <div className='projects-grid-container'>
            <div className='left-blue-container'>
                <p className='projects-title'>Projects</p>
                <div className='projects-main-container'>
                    <div className='expensify-block-container'>
                        <div className={`hamburger ${expensifyProjectCoverOpen ? "open-cover-burger" : ""}`} onTouchStart={handleExpensifyTouch} onClick={handleExpensifyClick}>
                            {/* {burgerbarOpen ? "Open" : "Close"} */}
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                        </div>
                            <div className={`card-cover ${expensifyProjectCoverOpen ? "open-project-cover" : ""}`} onTouchStart={handleExpensifyTouch} onClick={handleExpensifyClick}>
                                <div className='cover-filter-img'><h3 className='expensify-filter-title'>Expensify </h3></div>
                                    <div className='card-cover-text'>
                                                    <div className='expensify-txt-container'>
                                                        <h3 className='expensify-desc-txt'>A budget tracking app </h3>
                                                            <div className='icon-typewriter-cont'>
                                                                <img className='list_container__img' src='/images/javascript-yellow-48.png' alt="Javascript"></img>
                                                                <img className='list_container__img' src='/images/sass-96.png' alt="Sass"></img>
                                                                <img className='list_container__img spin_class' src='/images/react-30.png' alt="React"></img>
                                                                <img className='list_container__img' src='/images/firebase-96.png' alt="Firebase"></img>
                                                            </div>
                                                        
                                                        <h3 className='expensify-tech-txt'>Scss | Javascript | React | Firebase </h3>
                                                        <a onTouchStart={linkHandler} className='link-container' href='https://react-expens-21.herokuapp.com'><button className='live-btn'>View Live</button></a>
                                                    </div>
                                    </div>
                                    <div className='cover-filter'>
                                    </div>
                                    <div className='card-content'>
                                        <img className='expensify-img' onClick={handleToggle} src='/images/Expensify.png' alt="expensify"></img>
                                    </div>
                            </div>
                    </div>
                    <div className='steady-building-block-container'>
                        <div className={`hamburger ${steadyProjectCoverOpen ? "open-cover-burger" : ""}`} onTouchStart={handleSteadyTouch} onClick={handleSteadyClick}>
                            {/* {burgerbarOpen ? "Open" : "Close"} */}
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                        </div>
                        <div className={`card-cover ${steadyProjectCoverOpen ? "open-project-cover" : ""}`} onTouchStart={handleSteadyTouch} onClick={handleSteadyClick}>
                            <div className='cover-filter-img'><h3 className='steady-filter-title'>Steady Building </h3></div>
                                
                                    <div className='card-cover-text'>
                                        <div className='steady-txt-container'>
                                            <h4 className='steady-desc-txt'> A responsive website for a commercial cleaning company</h4>
                                                <div className='icon-typewriter-cont'>
                                                    <img className='list_container__img' src='/images/javascript-yellow-48.png' alt="Javascript"></img>
                                                    <img className='list_container__img' src='/images/html-5-48.png' alt="Html"></img>
                                                    <img className='list_container__img spin_class' src='/images/css3-96.png' alt="Css"></img>
                                                    
                                                </div>
                                            <h4 className='steady-tech-txt'> Html | Css | Javascript </h4>
                                            <a onTouchStart={linkHandler} href='http://steadybuildingservices.com/'><button className='live-btn'>View Live</button></a>
                                        </div>
                                    </div>
                                <div className='cover-filter'>
                                </div>
                                <div className='card-content'>
                                    <a href='http://steadybuildingservices.com/'><img className='steady-img' onClick={handleToggle} src='/images/steadybuildingservices-com.png' alt="steadybuilding"></img></a>
                                </div>
                        </div>
                    </div>
                    <div className='sokly-block-container'>
                        <div className={`hamburger ${soklyProjectCoverOpen ? "open-cover-burger" : ""}`} onTouchStart={handleSoklyTouch} onClick={handleSoklyClick}>
                            {/* {burgerbarOpen ? "Open" : "Close"} */}
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                        </div>
                        <div className={`card-cover ${soklyProjectCoverOpen ? "open-project-cover" : ""}`} onTouchStart={handleSoklyTouch} onClick={handleSoklyClick}>
                            <div className='cover-filter-img'><h3 className='sokly-filter-title'>Sokly</h3></div>
                                
                                <div className='card-cover-text'>
                                        <div className='sokly-txt-container'>
                                        <h3 className='sokly-desc-txt'>A soccer player management app</h3>
                                                <div className='icon-typewriter-cont'>
                                                    <img className='list_container__img' src='/images/javascript-yellow-48.png' alt="Javascript"></img>
                                                    <img className='list_container__img' src='/images/django-blue-50.png' alt="Django"></img>
                                                    <img className='list_container__img spin_class' src='/images/css3-96.png' alt="Css"></img>
                                                    <img className='list_container__img spin_class' src='/images/python-color-48.png' alt="python"></img>
                                                    <img className='list_container__img spin_class' src='/images/vue-48.png' alt="Vue"></img>
                                                </div>
                                            <h3 className='sokly-tech-txt'> Css | Python | Javascript | Django | Vue </h3>
                                            <a onTouchStart={linkHandler} href='https://www.sokly.xyz'><button className='live-btn'>View Live</button></a>
                                            
                                        </div>
                                </div>
                                <div className='cover-filter'>
                                </div>
                                <div className='card-content'>
                                    <a href='https://www.sokly.xyz'><img className='sokly-img' onClick={handleToggle} src='/images/SOKLY_BKGRND.png' alt="Sokly"></img></a>
                                </div>
                        </div>

                        
                    </div>
                    <div className='taskv-block-container'>
                        <div className={`hamburger ${taskvProjectCoverOpen ? "open-cover-burger" : ""}`} onTouchStart={handleTaskvTouch} onClick={handleTaskvClick}>
                            {/* {burgerbarOpen ? "Open" : "Close"} */}
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                        </div>
                        <div className={`card-cover ${taskvProjectCoverOpen ? "open-project-cover" : ""}`} onTouchStart={handleTaskvTouch} onClick={handleTaskvClick}>
                            <div className='cover-filter-img'><h3 className='taskv-filter-title'>TaskV</h3></div>
                                    <div className='card-cover-text'>
                                            <div className='taskv-txt-container'>
                                                    <h4 className='taskv-desc-txt'>An employee management app</h4>
                                                <div className='icon-typewriter-cont'>
                                                        <img className='list_container__img' src='/images/javascript-yellow-48.png' alt="Javascript"></img>
                                                        <img className='list_container__img' src='/images/django-blue-50.png' alt="Django"></img>
                                                        <img className='list_container__img spin_class' src='/images/css3-96.png' alt="Css"></img>
                                                        <img className='list_container__img spin_class' src='/images/python-color-48.png' alt="python"></img>
                                                        <img className='list_container__img spin_class' src='/images/html-5-48.png' alt="Vue"></img>
                                                </div>
                                                    
                                                    <h4 className='taskv-tech-txt'>Html | Css | Python | Javascript | Django </h4>
                                                    <a onTouchStart={linkHandler} href='https://suarez21.pythonanywhere.com/'><button className='live-btn'>View Live</button></a>
                                            </div> 
                                    </div>  
                            
                            <div className='cover-filter'>
                            </div>
                            <div className='card-content'>
                                <a href='https://suarez21.pythonanywhere.com/'><img className='taskv-img' src='/images/TaskV.png' alt="TaskV"></img></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;




