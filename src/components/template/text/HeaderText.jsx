import React from 'react'
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import H1 from '../../layout/H1-title'
import H3 from '../../layout/H3-subtitle'
import PrimaryButton from '../../controls/PrimaryButton'


function HeaderText({title1 , title2 , title3 , cta}) {
    return (
        <div className="text-header">
            <Flex item={'start'} gaps={'12px'}>
            <H3 Subtitle={title1} fontWeight="600" />
                <H1 Title={title2}/>
                <H3 Subtitle={title3} fontWeight="400" />
                <PrimaryButton Cta={cta} />
            </Flex>
        </div>
    )
}

export default HeaderText