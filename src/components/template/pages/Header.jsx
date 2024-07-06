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
                <FlexRow item={'center'} gaps={'200px'}>
                    <HeaderText />
                    <Video src={teaserAutoclipper} type='video/mp4' />
                </FlexRow>
            </header>
            <Cases />
            {/* <Cicle/> */}
        </>
    )
}

export default Header