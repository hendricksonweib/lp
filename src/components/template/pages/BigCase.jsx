import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import H1 from '../../layout/H1-title'
import LogoCase from '../../Ui/LogoCase'

function BigCase() {
  return (
    <aside className='bigCase-conteiner'>
      <FlexRow item={'center'} gaps={'5px'}>
        <H1 Title='Crie vídeos 10X mais rápido com nossa IA!' color='white' />
        <LogoCase/>
      </FlexRow>
    </aside>
  )
}

export default BigCase