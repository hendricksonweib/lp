import React from 'react'
import Grid from '../layout/Grid'
import Flex from '../layout/Flex'
import Aduela from '../../assets/Logos/LogoBigCase/Aduela.svg'
import GrupoMirante from '../../assets/Logos/LogoBigCase/GrupoMirante.svg'
import MiranteAm from '../../assets/Logos/LogoBigCase/MiranteAm.svg'
import Fcj from '../../assets/Logos/LogoBigCase/Fcj.svg'
import Aws from '../../assets/Logos/LogoBigCase/Aws.svg'
import Microsoft from '../../assets/Logos/LogoBigCase/Microsoft.svg'
import OpenAi from '../../assets/Logos/LogoBigCase/OpenAi.svg'

function LogoCase() {
    return (
        <>
            <Flex item={'start'} gaps={'0px'}>
                <Grid columns={'3'} itens={'center'}>
                    <img src={Aduela} />
                    <img src={GrupoMirante} />
                    <img src={MiranteAm} />
                </Grid>
                <Grid columns={'4'} itens={'center'}>
                    <img src={Fcj} />
                    <img src={Aws} />
                    <img src={Microsoft} />
                    <img src={OpenAi} />
                </Grid>
            </Flex>
        </>
    )
}

export default LogoCase