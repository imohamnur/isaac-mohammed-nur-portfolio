import React from 'react'
import './projects.css'
import ProComp from './ProComp'
import Youtube from '../../assets/youtube-clone-pic.png'
import Todo from '../../assets/todo-list-pic.png'
import Chat from '../../assets/gpt-clone-pic.png'

const Projects = () => {
  return (
    <section id="projects">
        <h5>Recent Work</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">
            <ProComp 
                image={Chat}
                title='ChatGPT Clone'
                github='https://github.com/imohamnur/chat-gpt-clone'
                link="https://dancing-cucurucho-f963c8.netlify.app/"
            />
            <ProComp 
                image={Youtube}
                title='Youtube Clone'
                github='https://github.com/imohamnur/youtube-clone-react'
                link="https://frabjous-basbousa-ad505d.netlify.app/"
            />
            <ProComp 
                image={Todo}
                title='FullStack Todo List'
                github='https://github.com/imohamnur/full-stack-todo-list-react-express'
                link={null}
            />
        </div>
    </section>
  )
}

export default Projects