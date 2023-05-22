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
            <ul className='service-list'>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created a UI/UX design using Figma.</p>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created campusKonnect project to life,using Figma</p>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created Customer Care project,usingFigma.</p>
            </ul>
          </div>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
            <ul className='service-list'>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created Portfolio using html,css,js</p>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created Netflix Clone using reactjs </p>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created React weather App</p>
            </ul>
          </div>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Flutter Development</h3>
            <ul className='service-list'>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created CamusKonnect Mobile App using dart</p>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created CamusKonnect Mobile App using dart</p>
              <li><BsCheck className='service__list-icon'/></li>
              <p>Created CamusKonnect Mobile App using dart</p>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default services
