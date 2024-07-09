import React from 'react'
import SessionScreen from '../../Ui/SessionScreen/SessionScreen'
import SessionScreenLeft from '../../Ui/SessionScreen/SessionScreenLeft'
import screen1 from '../../../assets/screen1.png'
import screen2 from '../../../assets/screen2.png'
import screen3 from '../../../assets/screen3.png'
import screen4 from '../../../assets/screen4.png'
import PrimaryButton from '../../controls/PrimaryButton'
import Flex from '../../layout/Flex'
import '../../../style/global.css'

function Sobre() {
    return (
        <>
            <div className="conteiner-sessionsobre">
                <section className="section-sobre">
                    <SessionScreen img={screen1} text={'Recomendações Personalizadas'} subtitle={'Receba recomendações dos melhores trechos, de forma personalizada, com a nossa Inteligência Artificial.'} />
                    <SessionScreenLeft img={screen3} text={'Transforme em Shorts'} subtitle={'Transforme clipes para o formato mais em alta nas redes sociais e viralize!'} />
                    <SessionScreen img={screen2} text={'Legendas Estilizadas'} subtitle={'Tenha total autonomia para estilizar fontes, animações, caixas de destaque e salvar as suas configurações favoritas de legendas!'} />
                    <SessionScreenLeft img={screen4} text={'Inspirações de títulos e Copies'} subtitle={'Receba inspirações de títulos e copies da nossa Inteligência Artificial para otimizar tempo na descrição dos criativos'} />
                </section>
            </div>
        </>
    )
}

export default Sobre