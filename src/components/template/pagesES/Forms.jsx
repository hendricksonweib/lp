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
                <HeaderForms item={'center'} cta={'Deja tu mejor contacto'} subCta={'Nos pondremos en contacto pronto para explicar más sobre la suscripción a nuestras soluciones.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'center'} gaps={'15px'}>
                        <InputPrimary name={'Nombre'} type={'text'} placeholder={'Ej: Juan Pérez'} />
                        <InputPrimary name={'Correo electrónico'} type={'email'} placeholder={'Ej: juan.perez@corporativo.com'} />
                        <InputPrimary name={'Teléfono'} type={'number'} placeholder={'Ej: 5511999999999'} />
                    </Flex>
                    <PrimaryButton Cta={'Suscribirse'} />
                </Flex>
            </Flex>
        </form>
    )
}

export default Forms
