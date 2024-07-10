import React from 'react'
import Flex from '../../layout/Flex'
import PrimaryButton from '../../controls/PrimaryButton'
import DarkButton from '../../controls/DarkButton'
import '../../../style/global.css'

function Tutorial() {
    return (
        <>
            <section className='conteiner-tutorial'>
                <Flex item={"center"} gaps={'1em'}>
                    <h1 className='TituloComo'>Watch out our demo video</h1>
                    <iframe
                        width="760"
                        height="415"
                        src="https://www.youtube.com/embed/RZky_N24dfo?start=49"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <DarkButton cta='Sign up for beta!' className="section-buttom" />
                </Flex>
            </section>
        </>
    )
}

export default Tutorial