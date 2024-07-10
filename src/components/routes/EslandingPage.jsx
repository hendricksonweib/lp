import React from 'react'
import Header from '../../components/template/pagesES/Header'
import ComoFunciona from '../template/pagesES/ComoFunciona'
import Quem from '../template/pagesES/Quem'
import Sobre from '../template/pagesES/Sobre'
import CardContainer from '../Ui/CardSession/CardConteiner'
import Tutorial from '../template/pagesES/Tutorial'
import Forms from '../template/pagesES/Forms'
import Faq from '../template/pagesES/Faq'
import BigCase from '../template/pagesES/BigCase'
import Footer from '../template/pagesES/Footer'

function EsLandingPage() {
    return (
        <>
            <Header />
            <ComoFunciona/>
            <Quem/>
            <Sobre />
            <Tutorial/>
            <Forms />
            <CardContainer />
            <BigCase />
            <Faq />
            <Footer />
        </>
    )
}

export default EsLandingPage