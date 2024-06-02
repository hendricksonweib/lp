import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import LogoCase from '../../Ui/LogoCase'

function BigCase() {
  return (
    <aside className='bigCase-conteiner'>
      <FlexRow item={'center'} gaps={'100px'}>
        <h2 className='h2-bigCase'>Empresas Parceiras </h2>
        <LogoCase />
      </FlexRow>
    </aside>
  )
}

export default BigCase