import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>TravelScape</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Dhriti069" className='btn'>Github</a>
          <a href="https://www.figma.com/file/QfCLAghsNrTY62rp5e6IO2/TravelScape?type=design&node-id=0%3A1&mode=design&t=DhIQNKITM4TiLmu4-1" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Weather Detection</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Dhriti069" className='btn'>Github</a>
          <a href="https://dhriti069.github.io/weather/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>CampusKonnect</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Dhriti069" className='btn'>Github</a>
          <a href="" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default portfolio
