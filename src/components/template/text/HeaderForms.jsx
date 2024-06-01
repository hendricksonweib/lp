import React from 'react'
import Flex from '../../layout/Flex'
import '../../../style/global.css'

function HeaderForms({ Cta, subCta }) {
    return (
        <Flex item={'center'} gaps={'0px'}>
            <h2 className='header-cta'>{Cta}</h2>
            <p className='p-cta'>{subCta}</p>
        </Flex>
    )
}

export default HeaderForms