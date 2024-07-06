import React from 'react'
import Grid from './Grid'
import RadioIcon from '../../assets/Icons/RadioIcon.svg'
import PodcastIcon from '../../assets/Icons/PodcastIcon.svg'
import TvIcon from '../../assets/Icons/TvIcon.svg'
import ConteudoIcon from '../../assets/Icons/ConteudoIcon.svg'

import Ul from '../Ui/Ul'

function Icon({item1, item2, item3 ,item4}) {
  return (
    <Grid columns='4' itens={'end'}>
        <Ul img={RadioIcon} text={item1}/>
        <Ul img={PodcastIcon} text={item2}/>
        <Ul img={TvIcon} text={item3}/>
        <Ul img={ConteudoIcon} text={item4}/>
    </Grid>
  )
}

export default Icon