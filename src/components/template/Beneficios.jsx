import React from 'react'
import '../../style/global.css'
import FlexRow from '../layout/FlexRow'
import Flex from '../layout/Flex'
import imgBeneficio from '../../assets/imageBeneficio.svg'
import List from '../layout/List'

function Beneficios() {
    return (
        <>
            <section className="conteiner-beneficios">
                <FlexRow item={'center'} gaps={'60px'} >
                    <div className="main-bgBeneficio">
                        <FlexRow item={'start'} gaps={'60px'}>
                            <img className='imgBeneficio' src={imgBeneficio} alt="ilustração beneficio" />
                            <List/>
                        </FlexRow>
                    </div>
                </FlexRow>
            </section>
        </>
    )
}

export default Beneficios