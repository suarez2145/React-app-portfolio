import React from 'react';



const AboutMe = () => {


    return (


        <div className='about-me-grid-container'>
            <div className='about-me-container'>
                
                <div className='about-me__body__container' id='about_me_cont'>
                    <div className='gif_filter'>
                        <div className='img_cover'>
                        </div>
                        {/* src='/images/me_gali.gif' */}
                        <img className='main_gif' alt='family'/>

                    </div>
                        
                    <div className='about-me_txt_container'>
                    <p className='about-me__title'> About Me</p>
                        <p className='about-me__txt'> 
                            Hello thanks for visiting, I am a fairly new web developer and am always looking for new

                            things to learn. I am a United States Marine Corps veteran and after 

                            many years of trial and error have finally set my sights on the career 

                            path i truly enjoy. I am a graduate of PDX Code Guild and am fascinated 

                            by the tech industry and all the opportunities in this field. I am a 

                            proud father of 2 young kids and am currently open to employement 

                            oppurtunities please feel free to reach out and connect with me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )


}

export default AboutMe;
