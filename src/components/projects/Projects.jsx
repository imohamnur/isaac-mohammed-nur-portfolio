import React from 'react'
import './projects.css'
import ProComp from './ProComp'
import Youtube from '../../assets/youtube.png'
import Bayyan from '../../assets/Bayyan.jpg'
import Website from '../../assets/website.jpg'

const Projects = () => {
  return (
    <section id="projects">
        <h5>Recent Work</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
            <ProComp 
                image={Website}
                title='Isaac Mohammed Nur Portfolio'
                github='https://github.com/imohamnur/isaac-mohammed-nur-portfolio'
                link="http://isaacmohammednur.com"
            />
            <ProComp 
                image={Bayyan}
                title='Bayyan Movie Reviews'
                github='https://github.com/imohamnur'
                link="https://thebayyan.org/"
            />
            <ProComp 
                image={Youtube}
                title='Youtube.com Clone'
                github='https://github.com/imohamnur/Youtube.com-Clone-HTML'
                link="https://timely-macaron-ae0ee0.netlify.app/"
            />
        </div>
    </section>
  )
}

export default Projects