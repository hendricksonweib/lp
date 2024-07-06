import React from 'react'
import '../../../style/global.css'
import FlexRow from '../../layout/FlexRow'
import Grid from '../../layout/Grid'
import whatsapp from '../../../assets/Icons/whatsappIcon.svg'
import linkedin from '../../../assets/Icons/linkedinIcon.svg'
import telefone from '../../../assets/Icons/telefone.svg'
import email from '../../../assets/Icons/email.svg'

function Footer() {
  return (
    <footer className='conteiner-footer'>
      <p>© AutoClipper. Todos los derechos reservados.</p>
  
        <Grid columns={'4'} itens={'center'}>
          <img src={whatsapp} className="iconFooter" />
          <img src={linkedin} className="iconFooter"/>
          <img src={telefone} className="iconFooter"/>
          <img src={email} className="iconFooter"/>
        </Grid>
    </footer>
  )
}

export default Footer