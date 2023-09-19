import React from 'react'
import './experiences.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const ExpDetails = (props) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="exp-icon"/>
      <div>
        <h4>{props.skill}</h4>
      </div>
    </article>
  )
}

export default ExpDetails
