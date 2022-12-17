import React from 'react'
import './MainCard.css'
import picOfMe from '/src/assets/picture_of_me.jpg'
import instagram from '/src/assets/instagram.svg'
import linkedin from '/src/assets/linkedin.svg'
import github from '/src/assets/github.svg'
import mail from '/src/assets/mail.svg'
import twitter from '/src/assets/twitter.svg'

export default function MainCard(){
    return (
        <>
            <div className='main-content'>
                <div className='img-container'>
                <img className='my-img' src={picOfMe} alt="Picture of me" />
                </div>
                <div className='info-container'>
                    <h2 className='fullname'>Chinedu Ejiogu</h2>
                    <h4 className='occupation'>Full-Stack Developer</h4>
                    <h5 className="know-more">
                        <a href="https://chineduejiogu1.github.io/portfolio_website_tkh/" target="_" rel="noopener noreferrer">
                            Know more
                        </a> 
                    </h5>
                    <div className='contact-me'>
                        <a className='email' href="mailto:chineduejiogu@gmail.com"><img src={mail} alt="mail" /> Email</a>
                        <a className='linkedin' href="https://www.linkedin.com/in/chinedu-ejiogu/" target='_blank'><img src={linkedin} alt="" />LinkedIn</a>
                    </div>
                    <div className='about-me'>
                        <h3>About</h3>
                        <p>I am an aspiring full-stack web developer. My joy for Computer Science and Web Development comes from my joy of playing legos as a kid, also I'm infatuated with creating, making things, and problem-solving. </p>
                    </div>
                    <div className='my-interest'>
                        <h3>Interests</h3>
                        <p>What I do with my spare time is reading, play video games, writing, cooking, and going for long walks.</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href="https://github.com/ChineduEjiogu1"><img className='github' src={github} alt="github" /></a>
                    <a href="https://www.instagram.com/chinedu_eric/"><img className='instagram' src={instagram} alt="instagram" /></a>
                    <a href="https://twitter.com/Chinedu_Ejiogu"><img className='twitter' src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </>
    )
}