import React from 'react'
import Grid from './Grid'
import RadioIcon from '../../assets/Icons/RadioIcon.svg'
import PodcastIcon from '../../assets/Icons/PodcastIcon.svg'
import TvIcon from '../../assets/Icons/TvIcon.svg'
import ConteudoIcon from '../../assets/Icons/ConteudoIcon.svg'

import Ul from '../controls/Ul'

function Icon() {
  return (
    <Grid columns='4' itens={'end'}>
        <Ul img={RadioIcon} text={'Rádios Web'}/>
        <Ul img={PodcastIcon} text={'Podcasts'}/>
        <Ul img={TvIcon} text={'TVs Online'}/>
        <Ul img={ConteudoIcon} text={'Criadores de conteúdos'}/>
    </Grid>
  )
}

export default Icon