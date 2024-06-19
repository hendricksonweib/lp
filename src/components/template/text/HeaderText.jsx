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
                <H1 Title='Otimize os custos da sua operação e gere mais receita com o Autoclipper!' color='white' />
                <H3 Subtitle='Automatize a pós-produção de vídeo da sua Agência com Inteligência Artificial!' fontWeight="400" />
                <PrimaryButton Cta='Quero saber mais!' />
            </Flex>
        </div>
    )
}

export default HeaderText