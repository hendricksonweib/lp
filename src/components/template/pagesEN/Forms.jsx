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
                <HeaderForms item={'center'} cta={'Leave your best contact'} subCta={'We will get in touch soon to explain more about the subscription to our solutions.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'center'} gaps={'15px'}>
                        <InputPrimary name={'Name'} type={'text'} placeholder={'Ex: John Doe'} />
                        <InputPrimary name={'Email'} type={'email'} placeholder={'Ex: john.doe@corporate.com'} />
                        <InputPrimary name={'Phone'} type={'number'} placeholder={'Ex: 5511999999999'} />
                    </Flex>
                    <PrimaryButton Cta={'Subscribe'} />
                </Flex>
            </Flex>
        </form>
    )
}

export default Forms
