import React from 'react'
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import InputPrimary from '../../controls/InputPrimary'
import PrimaryButton from '../../controls/PrimaryButton'
import HeaderForms from '../text/HeaderForms'
import RadialImput from '../../controls/RadialImput'

function FormsEn() {
    return (
        <form action="" className="Conteiner-forms">
            <Flex item={'center'} gaps={'20px'}>
                <HeaderForms item={'center'} Cta={'Leave your best contact'} subCta={'We will get in touch soon to explain more about our solutions.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'start'} gaps={'15px'}>
                        <InputPrimary name={'Name'} type={'text'} placeholder={'E.g.: John Doe'} />
                        <InputPrimary name={'Email'} type={'email'} placeholder={'E.g.: john.doe@corporate.com'} />
                        <InputPrimary name={'Phone'} type={'number'} placeholder={'E.g.: 5511999999999'} />
                        <section className='section-radial'>
                            <RadialImput text={"I have a dark channel"} />
                            <RadialImput text={"I want to create a dark channel"} />
                            <RadialImput text={"Content Creator"} />
                            <RadialImput text={"Podcast Studio"} />
                            <RadialImput text={"Marketing Agency"} />
                            <RadialImput text={"Video Editor"} />
                            <RadialImput text={"Radio/TV Broadcaster"} />
                            <RadialImput text={"Marketing Agency"} />
                        </section>
                    </Flex>
                    <PrimaryButton Cta={'Subscribe'} />
                </Flex>
            </Flex>
        </form>
    )
}

export default FormsEn
