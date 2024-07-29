import React, { useState } from 'react';
import '../../../style/global.css';
import Flex from '../../layout/Flex';
import InputPrimary from '../../controls/InputPrimary';
import PrimaryButton from '../../controls/PrimaryButton';
import HeaderForms from '../text/HeaderForms';
import RadialImput from '../../controls/RadialImput';

function FormsPt() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        tipo: ''
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
        console.log('Sending form data:', formData); // Log the form data
        try {
            const response = await fetch('https://blubots.com/webhook/2fb4f596-d966-44d5-a410-82e0b666ac9d/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();
            console.log('Response status:', response.status);
            console.log('Response data:', responseData); 
            if (response.ok) {
                alert('Formulário enviado com sucesso!');
            } else {
                alert('Erro ao enviar o formulário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar o formulário.');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="Conteiner-forms">
            <Flex item={'center'} gaps={'20px'}>
                <HeaderForms item={'center'} Cta={'Leave your best contact'} subCta={'We will get in touch soon to explain more about our solutions.'} />
                <Flex item={'center'} gaps={'50px'}>
                    <Flex item={'start'} gaps={'15px'}>
                        <InputPrimary name={'Name'} type={'text'} placeholder={'Eg: João Silva'} onChange={handleChange} />
                        <InputPrimary name={'Email'} type={'email'} placeholder={'Eg: joao.silva@corporativo.com'} onChange={handleChange} />
                        <InputPrimary name={'Phone'} type={'number'} placeholder={'Eg: 5511999999999'} onChange={handleChange} />
                        <section className='section-radial'>
                            <RadialImput text={"I have a dark channel"} name="tipo" onChange={handleChange} />
                            <RadialImput text={"I want to create a dark channel"} name="tipo" onChange={handleChange} />
                            <RadialImput text={"Content Creator"} name="tipo" onChange={handleChange} />
                            <RadialImput text={"Podcast Studio"} name="tipo" onChange={handleChange} />
                            <RadialImput text={"Marketing Agency"} name="tipo" onChange={handleChange} />
                            <RadialImput text={"Video Editor"} name="tipo" onChange={handleChange} />
                            <RadialImput text={"Radio/TV Broadcaster"} name="tipo" onChange={handleChange} />
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
