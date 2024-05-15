import React from 'react'
import Marquee from 'react-fast-marquee'

import FlexRow from '../layout/FlexRow'
import LogoAduelo from '../../assets/Logos/LogoAduelo.svg'
import LogoAWS from '../../assets/Logos/LogoAWS.svg'
import LogoEduCastanho from '../../assets/Logos/LogoEduCastanho.svg'
import LogoExtreme from '../../assets/Logos/LogoExtreme.svg'
import LogoFCJ from '../../assets/Logos/LogoFCJ.svg'
import LogoGrupoMirante from '../../assets/Logos/LogoGrupoMirante.svg'
import LogoLevel from '../../assets/Logos/LogoLevel.svg'
import LogoMirante96 from '../../assets/Logos/LogoMirante96.svg'
import LogoMiranteAm from '../../assets/Logos/LogoMiranteAm.svg'
import LogoOpenIA from '../../assets/Logos/LogoOpenIA.svg'
import LogoRecord from '../../assets/Logos/LogoRecord.svg'
import './globalAnimation.css'

function Cases() {
    return (
        <footer className="cases-conteiner">
            <Marquee>
                <FlexRow item={'center'} gaps={'50px'}>
                    <img src={LogoAduelo} alt="LogoAduelo" style={{ marginLeft: '50px' }}/>
                    <img src={LogoAWS} alt="LogoAWS" />
                    <img src={LogoEduCastanho} alt="LogoEduCastanho" />
                    <img src={LogoEduCastanho} alt="LogoEduCastanho" />
                    <img src={LogoExtreme} alt="LogoExtreme" />
                    <img src={LogoFCJ} alt="LogoFCJ" />
                    <img src={LogoGrupoMirante} alt="LogoGrupoMirante" />
                    <img src={LogoMirante96} alt="LogoMirante96" />
                    <img src={LogoLevel} alt="LogoLevel" />
                    <img src={LogoMiranteAm} alt="LogoMiranteAm" />
                    <img src={LogoOpenIA} alt="LogoOpenIA" />
                    <img src={LogoRecord} alt="LogoRecord" />
                </FlexRow>
            </Marquee>
        </footer>
    )
}

export default Cases