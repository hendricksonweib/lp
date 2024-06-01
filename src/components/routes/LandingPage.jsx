import React from 'react'
import Header from '../../components/template/pages/Header'
import Oque from '../../components/template/pages/Oque'
import Beneficios from '../../components/template/pages/Beneficios'
import Quem from '../../components/template/pages/Quem'
import Forms from '../template/pages/Forms'

function LandingPage() {
    return (
        <>
            <Header />
            <Oque />
            <Beneficios />
            <Quem />
            <Forms/>
        </>
    )
}

export default LandingPage