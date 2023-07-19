import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services'>
      <h5>My Preferences</h5>
      <h2>Services</h2>
      <div className="container services__container">

        
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
            </div>
            <ul className='service-list'>
              <li><BsCheck className='service__list-icon'/> Created a TravelScape project using Figma.</li>
              <li><BsCheck className='service__list-icon'/> Created campusKonnect project to life,using Figma</li>
              <li><BsCheck className='service__list-icon'/> Created Customer Care project,usingFigma.</li>
              </ul>
          
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
              </div>
            <ul className='service-list'>
              <li><BsCheck className='service__list-icon'/> Created Portfolio using reactjs</li>
              <li><BsCheck className='service__list-icon'/> Created Netflix Clone using reactjs</li>
              <li><BsCheck className='service__list-icon'/> Created React weather App</li>
            </ul>
        
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Flutter Development</h3>
             </div>
            <ul className='service-list'>
              <li><BsCheck className='service__list-icon'/> Created CamusKonnect Mobile App using flutter and dart</li>
            </ul>
         
        </article>
      </div>
    </section>
  )
}

export default services
