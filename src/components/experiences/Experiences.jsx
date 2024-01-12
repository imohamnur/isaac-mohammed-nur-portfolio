import React from 'react'
import "./experiences.css"
import ExpDetails from './ExpDetails'


const Experiences = () => {
  return (
    <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience">
                <h3>Skills</h3>
                <div className="experience__content">
                    <ExpDetails skill='HTML/CSS/Javascript'/>
                    <ExpDetails skill='ReactJS'/>
                    <ExpDetails skill="SQL" />
                    <ExpDetails skill="Node.js" />
                    <ExpDetails skill="Express.js" />
                    <ExpDetails skill='Python'/>
                    <ExpDetails skill='Java'/>
                    <ExpDetails skill='C'/>
                    <ExpDetails skill='Git'/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Experiences