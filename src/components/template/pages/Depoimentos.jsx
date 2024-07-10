import React from 'react'
import CardDepoiments from '../../Ui/CardDepoiments'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import depoimento1 from '../../../assets/videos/MatheusBraga.mp4'
import depoimento2 from '../../../assets/videos/FabioMascarenhas.mp4'
import PrimaryButton from '../../controls/PrimaryButton'
import Hr from '../../Ui/Hr'


import Carousel from 'react-bootstrap/Carousel';
import "../../../style/global.css"

function Depoimentos() {
    return (
        <>

            <section className='depoimentos-conteiner'>
                <Flex item={"center"}>
                    <h1>O que os nossos Clientes Dizem</h1>
                    <Hr text={"Faça como os melhores e implemente Inteligência Artificial no seu processo de conteúdo!"}></Hr>
                </Flex>
                <Carousel>
                    <Carousel.Item>
                        <FlexRow item={"center"} gaps={"2rem"}>
                            <CardDepoiments link={depoimento1} Name={"Matheus Braga"} Empresa={"Level Up Podcast"} />
                        </FlexRow>
                    </Carousel.Item>
                    <Carousel.Item>
                        <FlexRow item={"center"} gaps={"2rem"}>
                            <CardDepoiments link={depoimento2} Name={"Fábio Mascarenhas"} Empresa={"Podcast Agrociência"} />
                        </FlexRow>
                    </Carousel.Item>
                </Carousel>
                <Flex item={"center"}>
                    <PrimaryButton Cta={"Quero Saber Mais!"} />
                </Flex>
                <hr />
            </section >
        </>
    )
}

export default Depoimentos