import React from 'react'
import CV from '../../assets/IsaacMohammedNurResume.docx.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default CTA