import React from 'react'
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import InputPrimary from '../../controls/InputPrimary'
import PrimaryButton from '../../controls/PrimaryButton'
import HeaderForms from '../text/HeaderForms'
import RadialImput from '../../controls/RadialImput'

function FormsPt() {
    return (
        <form action="" className="Conteiner-forms">
            <Flex item={'center'} gaps={'20px'}>
                <HeaderForms item={'center'} Cta={'Deixe seu melhor contato'} subCta={'Entraremos em contato em breve para explicar mais sobre a assinatura de nossas soluções.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'start'} gaps={'15px'}>
                        <InputPrimary name={'Nome'} type={'text'} placeholder={'Ex: João Silva'} />
                        <InputPrimary name={'Email'} type={'email'} placeholder={'Ex: joao.silva@corporativo.com'} />
                        <InputPrimary name={'Telefone'} type={'number'} placeholder={'Ex: 5511999999999'} />
                        <section className='section-radial'>
                            <RadialImput text={"Possuo canal de cortes"} />
                            <RadialImput text={"Quero criar um canal de cortes"} />
                            <RadialImput text={"Criador de Conteúdo"} />
                            <RadialImput text={"Estúdio de Podcast"} />
                            <RadialImput text={"Agência de Marketing"} />
                            <RadialImput text={"Editor de Vídeo"} />
                            <RadialImput text={"Emissora de Rádio/TV"} />
                            <RadialImput text={"Agência de Marketing"} />
                        </section>
                    </Flex>
                    <PrimaryButton Cta={'Inscrever-se'} />
                </Flex>
            </Flex>
        </form>
    )
}

export default FormsPt
