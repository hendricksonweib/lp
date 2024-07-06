import React from 'react'
import Header from '../../components/template/pagesEN/Header'
import Sobre from '../template/pagesEN/Sobre'
import CardContainer from '../Ui/CardSession/CardConteiner'
import Forms from '../template/pagesEN/Forms'
import Faq from '../template/pagesEN/Faq'
import BigCase from '../template/pagesEN/BigCase'
import Footer from '../template/pagesEN/Footer'

function EnLandingPage() {
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

export default EnLandingPage