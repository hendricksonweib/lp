import React from 'react'
import '../../../style/global.css'
import Nav from '../../Ui/Nav'
import HeaderText from '../text/HeaderText'
import FlexRow from '../../layout/FlexRow'
import Telefones from '../../animation/Telefones'
import Cases from '../../animation/Cases'
import Cicle from '../../animation/Cicle'

function Header() {
    return (
        <>
            <Nav />
            <header className='conteiner-header'>
                <FlexRow item={'start'} gaps={'600px'}>
                    <HeaderText />
                    <Telefones />
                </FlexRow>
            </header>
            <Cases />
            {/* <Cicle/> */}
        </>
    )
}

export default Header