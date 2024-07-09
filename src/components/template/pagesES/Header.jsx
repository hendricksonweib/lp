import React from 'react'
import '../../../style/global.css'
import Nav from '../../Ui/Nav'
import HeaderText from '../text/HeaderText'
import FlexRow from '../../layout/FlexRow'
import Cases from '../../animation/Cases'
import Cicle from '../../animation/Cicle'
import Video from '../../Ui/Video'
import teaserAutoclipper from '../../../assets/videos/teaserAutoclipperEN.mp4'

function Header() {
    return (
        <>
            <Nav action1={"Inicio"} action2={"Cómo funciona"} action3={"Testimonios"} action4={"En los medios"} action5={"Preguntas frecuentes"} buttom1={"Suscribirse"}/>
            <header className='conteiner-header'>
                <FlexRow item={'center'} gaps={'50px'}>
                <HeaderText 
                    title1={"Aumente su participación y vuélvase viral en YouTube Shorts, Instagram Reels y TikTok."}
                    title2={"¡Crea vídeos de forma simplificadacon nuestra IA!"}
                    title3={"¡Genera cortes hasta 10 veces más rápido con nuestra Inteligencia Artificial!"}
                    cta={"Quero saber mais!"}
                    />
                    <Video src={teaserAutoclipper} type='video/mp4' />
                </FlexRow>
            </header>
            <Cases />
            {/* <Cicle/> */}
        </>
    )
}

export default Header