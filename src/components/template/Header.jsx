import React from 'react'
import '../../style/global.css'
import Nav from './Nav'
import HeaderText from './text/HeaderText'
import FlexRow from '../layout/FlexRow'
import Telefones from '../animation/Telefones'
import Cases from '../animation/Cases'

function Header() {
    return (
        <>
            <Nav />
            <header className='conteiner-header'>
                <FlexRow item={'center'} gaps={'600px'}>
                    <HeaderText />
                    <Telefones />
                </FlexRow>
            </header>
            <Cases />
        </>
    )
}

export default Header