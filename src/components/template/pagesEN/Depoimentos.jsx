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
                    <h1>What Our Clients Say</h1>
                    <Hr text={"Do like the best and implement Artificial Intelligence in your content process!"}></Hr>
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
                    <PrimaryButton Cta={"Sign up for beta!"} />
                </Flex>
                <hr />
            </section >
        </>
    )
}

export default Depoimentos