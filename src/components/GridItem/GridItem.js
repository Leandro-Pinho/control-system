import React from 'react'
import './styleGridItem.css'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa'

const GridItem = ({ item, onDelete }) => {
    return (
        <tr>
            <td>{item.desc}</td>
            <td>{item.amount}</td>
            <td>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color='red' />
                ) : (
                    <FaRegArrowAltCircleUp color='green' />
                )}
            </td>
            <td><FaTrash onClick={() => onDelete(item.id)} /></td>
        </tr>
    )
}

export default GridItem
