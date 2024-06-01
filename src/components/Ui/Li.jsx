import React from 'react'
import FlexRow from '../layout/FlexRow'
import '../../style/global.css'

function Li({ img, text }) {
    return (
        <li className='li-list'>
            <FlexRow gaps={'15px'} item={'start'}>
                <img src={img} />
                <p className="p-list">{text}</p>
            </FlexRow>
        </li>
    )
}

export default Li