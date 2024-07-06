import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import OqueText from '../text/OqueText'
import ilustracaoVideo from '../../../assets/ilustracao-video.svg'

function Oque() {
    return (
        <section className="conteiner-who">
            <FlexRow item={'center'} gaps={'60px'}>
                <img className='ilustracaoVideo' src={ilustracaoVideo} alt="ilustração Video"/>
                <OqueText/>
            </FlexRow>
        </section>
    )
}

export default Oque