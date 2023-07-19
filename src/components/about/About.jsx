import React, { useEffect } from 'react';
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import AOS from 'aos';
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS inside the About component
  }, []);
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
          <div className="about__cards" >
            <article className='about__card'>
            <FaAward className='about__icons'/>
              <h4>Experience</h4>
              <small>Internship:</small>
              <small><li>Salesforce Developer at Deloitte</li></small>
              <small><li>User Experience Researcher at TCS</li></small>
             
            </article>

            <article className='about__card'>
            <BsBook className='about__icons'/>
              <h4>Education</h4>
              <small><li>Matriculation:</li></small>
              <small><li>Dav Public School : 2018</li></small>
              <small><li>Senior Secondary : 2020</li></small>
              <small><li>Btech:</li></small>
              <small><li>Kalinga Institute Of Industrial Technology</li></small>
              <small><li>2020 - 2024</li></small>
          
            </article>

            <article className='about__card'>
            <AiOutlineSafetyCertificate className='about__icons'/>
              <h4>certifications</h4>
              <small><li><b>1.Full Stack Web development</b></li></small>
              <small><li>certificate of Completion:</li></small>
              <small><li><b>2. AWS</b></li></small>
              <small><li>Certificate of Completion</li></small>
              <small><b>3. HackerRank(DSA)</b></small>
    
              
            </article>
          </div>

          <p>
          Hello, I am Dhriti Das, a dedicated and confident student pursuing a Bachelor of Technology in Computer Science at KIIT University. Throughout my three years, I have immersed myself in studies and community involvement, preparing myself for success in my field. As I approach graduation, I am eager to apply my skills and knowledge to a full-time position and contribute to the success of a dynamic company. I am excited about the possibilities and committed to making a meaningful impact in my career journey. Thank you for considering me; I look forward to the opportunity.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
          </div>
      </div>
       
     
    </section>
  )
}

export default About
