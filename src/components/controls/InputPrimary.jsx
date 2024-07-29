import React from 'react';
import Flex from '../layout/Flex';
import '../../style/global.css';

function InputPrimary({ name, type, placeholder, onChange }) {
    return (
        <Flex item={'start'} gaps={'0px'}>
            <label className='label-primary' htmlFor={name}>{name}</label>
            <input className='input-primary' type={type} placeholder={placeholder} name={name} onChange={onChange} />
        </Flex>
    );
}

export default InputPrimary;
