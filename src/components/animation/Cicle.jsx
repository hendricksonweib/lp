import React from 'react'
import CicleBackground from '../../assets/Cicle/CicleBackground.svg'
import CicleName from '../../assets/Cicle/CicleName.svg'

function Cicle() {
    return (
        <div>
            <div className="conteiner-clice">
                <img className='empresasimg position-absolute top-50 start-50 translate-middle' src={CicleBackground} alt="CicleBackground" />
                <img className='empresasNameimg rotate-animation' src={CicleName} alt="CicleName" />
            </div>
        </div>
    )
}

export default Cicle