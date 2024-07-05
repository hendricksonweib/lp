import React from 'react'
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import H1 from '../../layout/H1-title'
import H3 from '../../layout/H3-subtitle'
import PrimaryButton from '../../controls/PrimaryButton'


function HeaderText() {
    return (
        <div className="text-header">
            <Flex item={'start'} gaps={'12px'}>
            <H3 Subtitle='Aumente seu engajamento e viralize no YouTube Shorts, Instagram Reels e TikTok.' fontWeight="400" />
                <H1 Title='Crie vídeos de forma simplificadacom nossa IA!'/>
                <H3 Subtitle='Gere cortes até 10X mais rápido com a nossa inteligência Artificial!' fontWeight="400" />
                <PrimaryButton Cta='Quero saber mais!' />
            </Flex>
        </div>
    )
}

export default HeaderText