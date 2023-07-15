import React from 'react'
import ResumeItem from '../ResumeItem/ResumeItem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign, } from 'react-icons/fa'
import './indexResume.css'

const Resume = ({ income, expense, total }) => {
  return (
    <div className='Resume'>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </div>
  )
}

export default Resume
