import React from 'react';


const Projects = () => {


    return (

        <div className='projects-grid-container'>
            <div className='left-blue-container'>
                <p className='projects-title'>Projects</p>
                <div className='projects-main-container'>
                    <div className='steady-building-block-container'>
                        <img className='steady-img' src='/images/steadybuilding-laptop.png' alt="steadybuilding"></img>
                        <div className='steady-txt-container'>
                            <h3 className='steady-title'>Steady Building Service</h3>
                            <h4 className='steady-tech-txt'> Html | Css | Javascript | Bulma</h4>
                            <h4 className='steady-desc-txt'> A fully responsive static website for a commercial cleaning company</h4>
                        </div>
                    </div>
                    <div className='sokly-block-container'>
                        <img className='sokly-img' src='/images/sokly-laptop.png' alt="Sokly"></img>
                        <div className='sokly-txt-container'>
                            <h3 className='sokly-title'>Sokly App</h3>
                            <h3 className='sokly-tech-txt'>Html | Css | Python | Javascript | Django | Django Restframework | Vue | Cloudinary</h3>
                            <h3 className='sokly-desc-txt'>A soccer player management web application. Designed to help coaches keep track of player information and all players in roster.</h3>
                        </div>
                    </div>
                    <div className='taskv-block-container'>
                        <img className='taskv-img' src='/images/task-v-laptop.png' alt="TaskV"></img>
                        <div className='taskv-txt-container'>
                            <h3 className='taskv-title'>TaskV App</h3>
                            <h4 className='taskv-tech-txt'>Html | Css | Python | Javascript | Django | Django Restframework</h4>
                            <h4 className='taskv-desc-txt'>An employee management web application. Designed to help managers and supervisors keep count of personel and worksite details.</h4>
                        </div>    
                    </div>
                    <div className='expensify-block-container'>
                        <img className='expensify-img' src='/images/expensify-laptop.png' alt="expensify"></img>
                        <div className='expensify-txt-container'>
                            <h3 className='expensify-title'>Expensify App</h3>
                            <h3 className='expensify-tech-txt'>Html | Scss | Javascript | React | Redux | Firebase </h3>
                            <h3 className='expensify-desc-txt'>A budget tracking application </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;




