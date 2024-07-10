import React from 'react'
import Header from '../../components/template/pages/Header'
import ComoFunciona from '../template/pages/ComoFunciona'
import Tutorial from '../template/pages/Tutorial'
import Quem from '../template/pages/Quem'
import Sobre from '../template/pages/Sobre'
import CardContainer from '../Ui/CardSession/CardConteiner'
import Depoimentos from '../template/pages/Depoimentos'
import Forms from '../template/pages/Forms'
import Faq from '../template/pages/Faq'
import BigCase from '../template/pages/BigCase'
import Footer from '../template/pages/Footer'

function LandingPage() {
    return (
        <>
            <Header />
            <ComoFunciona/>
            <Quem/>
            <Sobre />
            <Tutorial/>
            <Depoimentos/>
            <Forms/>
            <CardContainer/>
            <BigCase/>
            <Faq/>
            <Footer/>
        </>
    )
}

export default LandingPage