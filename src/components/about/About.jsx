import React from 'react'
import './about.css'
import ME from '../../assets/Isaacisawesome.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="picture of me" />
          </div>
        </div>

        <div className="about__content">
            <p>I'm Isaac Mohammed Nur, a senior at the University of Minnesota - Twin Cities, 
              set to graduate in spring 2024. My career goal is to become a software engineer. 
              As I approach graduation, I look forward to contributing to the software development 
              field and creating innovative digital solutions.
            </p>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About