import React from 'react'
import '../../../style/global.css'
import Nav from '../../Ui/Nav'
import HeaderText from '../text/HeaderText'
import FlexRow from '../../layout/FlexRow'
import Cases from '../../animation/Cases'
import Cicle from '../../animation/Cicle'
import Video from '../../Ui/Video'
import teaserAutoclipper from '../../../assets/videos/teaserAutoclipper.mp4'

function Header() {
    return (
        <>
            <Nav action1={"Home "} action2={"Como Funciona"} action3={"Depoimentos"} action4={"Na Mídia"} action5={"FAQ"} buttom1={"Inscreva-se"}/>
            <header className='conteiner-header'>
                <FlexRow item={'center'} gaps={'50px'}>
                    <HeaderText 
                    title1={"Aumente seu engajamento e viralize no YouTube Shorts, Instagram Reels e TikTok."}
                    title2={"Crie vídeos de forma simplificada com nossa IA!"}
                    title3={"Gere cortes até 10X mais rápido com a nossa inteligência Artificial!"}
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