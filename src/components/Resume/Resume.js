import React from 'react'
import ResumeItem from '../ResumeItem/ResumeItem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign, } from 'react-icons/fa'
import './indexResume.css'

const Resume = () => {
  return (
    <div className='Resume'>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={'1000'} />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={'1000'} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={'1000'} />
    </div>
  )
}

export default Resume
