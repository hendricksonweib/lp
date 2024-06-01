import React from 'react'
import Flex from '../layout/Flex'
import '../../style/global.css'

function InputPrimary({ name, type, placeholder }) {
    return (
        <Flex item={'start'} gaps={'0px'}>
            <label className='label-primary' htmlFor={name}>{name}</label>
            <input className='input-primary' type={type} placeholder={placeholder} name={name} />
        </Flex>
    )
}

export default InputPrimary