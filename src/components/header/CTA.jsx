import React from 'react'
import CV from '../../assets/IsaacMohammedNurResume.docx.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn btn-primary">Resume</a>
        <a href="https://www.linkedin.com/in/isaac-mohammed-nur-ba9146283/" target='_blank' className="btn btn-primary">LinkedIn</a>
        <a href="https://github.com/imohamnur" target='_blank' className="btn btn-primary">Github</a>
    </div>
  )
}

export default CTA