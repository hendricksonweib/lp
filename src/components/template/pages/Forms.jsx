import React, { useState } from 'react';
import '../../../style/global.css';
import Flex from '../../layout/Flex';
import InputPrimary from '../../controls/InputPrimary';
import PrimaryButton from '../../controls/PrimaryButton';
import HeaderForms from '../text/HeaderForms';
import RadialImput from '../../controls/RadialImput';

function FormsPt() {
    const [formData, setFormData] = useState({
        Nome: '',
        Email: '',
        Telefone: '',
        RadialInput: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://blubots.com/webhook/2fb4f596-d966-44d5-a410-82e0b666ac9d/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Erro ao enviar o formulário.');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="Conteiner-forms">
            <Flex item={'center'} gaps={'20px'}>
                <HeaderForms item={'center'} Cta={'Deixe seu melhor contato'} subCta={'Entraremos em contato em breve para explicar mais sobre a assinatura de nossas soluções.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'start'} gaps={'15px'}>
                        <InputPrimary name={'Nome'} type={'text'} placeholder={'Ex: João Silva'} onChange={handleChange} />
                        <InputPrimary name={'Email'} type={'email'} placeholder={'Ex: joao.silva@corporativo.com'} onChange={handleChange} />
                        <InputPrimary name={'Telefone'} type={'number'} placeholder={'Ex: 5511999999999'} onChange={handleChange} />
                        <section className='section-radial'>
                            <RadialImput text={"Possuo canal de cortes"} onChange={handleChange} />
                            <RadialImput text={"Quero criar um canal de cortes"} onChange={handleChange} />
                            <RadialImput text={"Criador de Conteúdo"} onChange={handleChange} />
                            <RadialImput text={"Estúdio de Podcast"} onChange={handleChange} />
                            <RadialImput text={"Agência de Marketing"} onChange={handleChange} />
                            <RadialImput text={"Editor de Vídeo"} onChange={handleChange} />
                            <RadialImput text={"Emissora de Rádio/TV"} onChange={handleChange} />
                            <RadialImput text={"Agência de Marketing"} onChange={handleChange} />
                        </section>
                    </Flex>
                    <PrimaryButton Cta={'Inscrever-se'} />
                </Flex>
            </Flex>
        </form>
        </>
    );
}

export default FormsPt;
