import React from 'react'
import '../App.css'

const SectionTitle = ({sectionTitle, sectionPara}) => {
  return (
    <div className='sectionTitle'>
      <h1>{sectionTitle}</h1>
      <div className='sectionPara'>
        <p>{sectionPara}</p>
      </div>
    </div>
  )
}

export default SectionTitle
