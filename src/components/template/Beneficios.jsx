import React from 'react'
import '../../style/global.css'
import FlexRow from '../layout/FlexRow'
import Flex from '../layout/Flex'
import imgBeneficio from '../../assets/imageBeneficio.svg'

function Beneficios() {
    return (
        <>
            <section className="conteiner-beneficios">
                <FlexRow item={'center'} gaps={'60px'} >
                    <div className="main-bgBeneficio">
                        <Flex item={'start'} gaps={'60px'}>
                            <img className='imgBeneficio' src={imgBeneficio} alt="ilustração beneficio" />
                        </Flex>
                    </div>
                </FlexRow>
            </section>
        </>
    )
}

export default Beneficios