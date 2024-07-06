import React from 'react'
import Header from '../../components/template/pagesES/Header'
import Sobre from '../template/pagesES/Sobre'
import CardContainer from '../Ui/CardSession/CardConteiner'
import Forms from '../template/pagesES/Forms'
import Faq from '../template/pagesES/Faq'
import BigCase from '../template/pagesES/BigCase'
import Footer from '../template/pagesES/Footer'

function EsLandingPage() {
    return (
        <>
            <Header />
            <Sobre />
            <Forms />
            <CardContainer />
            <BigCase />
            <Faq />
            <Footer />
        </>
    )
}

export default EsLandingPage