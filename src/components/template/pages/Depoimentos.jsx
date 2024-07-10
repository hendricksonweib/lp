import React from 'react'
import CardDepoiments from '../../Ui/CardDepoiments'
import FlexRow from '../../layout/FlexRow'
import depoimento1 from '../../../assets/videos/MatheusBraga.mp4'

import "../../../style/global.css"

function Depoimentos() {
  return (
    <section className='depoimentos-conteiner'>
        <FlexRow item={"center"} gaps={"2rem"}>
        <CardDepoiments link={depoimento1} Name={"Matheus Braga"} Empresa={"Level Up"}/>
        <CardDepoiments link={depoimento1} Name={"Matheus Braga"} Empresa={"Level Up"}/>
        <CardDepoiments link={depoimento1} Name={"Matheus Braga"} Empresa={"Level Up"}/>
        </FlexRow>
    </section>
  )
}

export default Depoimentos