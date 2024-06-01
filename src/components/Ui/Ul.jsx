import React from 'react'
import '../../style/global.css'
import Flex from '../layout/Flex'

function Ul({ img, text }) {
    return (
        <Flex item={'center'} gaps={'25px'}>
            <img src={img} className='ul-quem'/>
            <p className="p-icon">{text}</p>
        </Flex>
    )
}

export default Ul