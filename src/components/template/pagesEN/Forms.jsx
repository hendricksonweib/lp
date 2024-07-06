import React from 'react'
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import InputPrimary from '../../controls/InputPrimary'
import PrimaryButton from '../../controls/PrimaryButton'
import HeaderForms from '../text/HeaderForms'

function Forms() {
    return (
        <form action="" className="Conteiner-forms">
            <Flex item={'center'} gaps={'20px'}>
                <HeaderForms item={'center'} Cta={'Deixe o seu melhor contato'} subCta={'Entraremos em contato em breve para explicar mais sobre a assinatura das nossas soluções.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'center'} gaps={'15px'}>
                        <InputPrimary name={'Nome'} type={'text'} placeholder={'Ex: Fulano'} />
                        <InputPrimary name={'Empresa'} type={'text'} placeholder={'Ex.: Sua empresa'} />
                        <InputPrimary name={'Cargo'} type={'text'} placeholder={'Ex.: Meu Cargo'} />
                        <InputPrimary name={'E-mail'} type={'email'} placeholder={'Ex: fulano.silva@corporativo.com'} />
                        <InputPrimary name={'Telefone'} type={'number'} placeholder={'Ex: 5511999999999'} />
                    </Flex>
                    <PrimaryButton Cta={'Inscrever'} />
                </Flex>
            </Flex>
        </form>
    )
}

export default Forms