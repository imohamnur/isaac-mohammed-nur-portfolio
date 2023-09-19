import React from 'react'
import './projects.css'

const ProComp = (props) => {
  return (
    <article className="portfolio__items">
        <div className="portfolio_item-image">
            <img src={props.image} alt="portfolio image" />
        </div>
        <h3>{props.title}</h3>
        <div className="portfolio__item-cta">
            <a href={props.github} className="btn" target='_blank'>GitHub</a>
            <a href={props.link} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
    </article>
  )
}

export default ProComp