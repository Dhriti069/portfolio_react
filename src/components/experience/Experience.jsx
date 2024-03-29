import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>JAVA-SCRIPT</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>FIGMA</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>REACTJS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Flutter</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>MYSQL</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
