import React from 'react'
import './MainCard.css'
import Contacts from './contacts'
import Info from './info'
import AboutMe from './about_me'
import Footer from './footer'
import Interest from './interest'
import picOfMe from '/src/assets/picture_of_me.jpg'



export default function MainCard(){
    return (
        <>
            <div className='main-content'>
                <div className='img-container'>
                <img className='my-img' src={picOfMe} alt="Picture of me" />
                </div>
                <div className='info-container'>
                    <Info/>
                    <Contacts/>
                    <AboutMe/>
                    <Interest/>
                </div>
            <Footer/>
            </div>
        </>
    )
}