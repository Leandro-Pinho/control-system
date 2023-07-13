import React from 'react'
import './indexResumeItem.css'

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <div className='resumeitem'>
      <div className='headerItem'>
        <h1>{title}</h1>
        <Icon />
      </div>
      <div className='total'>{value}</div>
    </div>
  )
}

export default ResumeItem
