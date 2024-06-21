import React from 'react'
import Header from '../../components/template/pages/Header'
import Sobre from '../template/pages/Sobre'
import CardContainer from '../Ui/CardSession/CardConteiner'
import Forms from '../template/pages/Forms'
import Faq from '../template/pages/Faq'
import BigCase from '../template/pages/BigCase'
import Footer from '../template/pages/Footer'

function LandingPage() {
    return (
        <>
            <Header />
            <Sobre />
            <Forms/>
            <CardContainer/>
            <BigCase/>
            <Faq/>
            <Footer/>
        </>
    )
}

export default LandingPage