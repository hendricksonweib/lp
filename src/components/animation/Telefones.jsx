import React from 'react'
import PhoneLeft from '../../assets/PhoneLeft.svg'
import PhoneRight from '../../assets/PhoneRight.svg'
import './globalAnimation.css'

function Telefones() {
    return (
        <div className='Conteiner-Telefone'>
            <img className='phoneRight' src={PhoneRight} alt="Tela direita celular" />
            <img className='phoneLeft' src={PhoneLeft} alt="Tela esquerda celular" />
        </div>
    )
}

export default Telefones