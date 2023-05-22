import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icons'/>
              <h4>Experience</h4>
              <small>TechBairn</small>
              <small>certificate of completion</small>
              <small>Central Tool Room And Training Centre </small>
            </article>

            <article className='about__card'>
            <BsBook className='about__icons'/>
              <h4>Education</h4>
              <small>Matriculation:</small>
              <small >Dav Public School : 2018</small>
              <small>Senior Secondary : 2020</small>
              <small>Btech:</small>
              <small>Kalinga Institute Of Industrial Technology</small>
              <li>2020 - 2024</li>
          
            </article>

            <article className='about__card'>
            <AiOutlineSafetyCertificate className='about__icons'/>
              <h4>certifications</h4>
              <small>Full Stack Web development</small>
              <small>certificate of Completion</small>
              <small>AWS</small>
              <small>Certificate of Completion</small>
              <small>HackerRank(DSA)</small>
    
              
            </article>
          </div>

          <p>
          Hi ,I am Dhriti Das . Presently I am pursuing my bachelor's of technology in computer science at KIIT University.Pursuing a Bachelor of Technology in Computer Science at KIIT University was a natural choice for me, as I believe this institution offers the best opportunities to achieve my academic and professional goals. Over the past three years, I have been commited to my studies, university, and community involvement programmes. As I approach the final year of my college career, I am eager to enter the workforce and start applying the skills and knowledge I have gained. I am confident that my education and dedication have prepared me for success in my field, and I look forward to securing a full-time position upon graduation.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
          </div>
      </div>
       
     
    </section>
  )
}

export default about
