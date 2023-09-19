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
                    <ExpDetails 
                        skill='HTML'
                        skillLevel='Experienced'
                    />
                    <ExpDetails 
                        skill='CSS'
                        skillLevel='Intermediate'
                    />
                    <ExpDetails 
                        skill='JavaScript'
                        skillLevel='Intermediate'
                    />
                    <ExpDetails 
                        skill='ReactJS'
                        skillLevel='Beginner'
                    />

                </div>
            </div>
        </div>
    </section>
  )
}

export default Experiences