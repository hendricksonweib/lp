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
            <Nav action1={"Home"} action2={"How It Works"} action3={"Testimonials"} action4={"In the Media"} action5={"FAQ"} buttom1={"Sign up"}/>
            <header className='conteiner-header'>
                <FlexRow item={'center'} gaps={'50px'}>
                <HeaderText 
                    title1={"Increase your engagement and go viral on YouTube Shorts, Instagram Reels and TikTok."}
                    title2={"Create videos in a simplified way with our AI!"}
                    title3={"Generate clips up to 10X faster with our Artificial intelligence!"}
                    cta={"Sign up for beta!"}
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