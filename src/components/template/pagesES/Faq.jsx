import Accordion from 'react-bootstrap/Accordion';
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import H1 from '../../layout/H1-title'

function Faq() {
  return (
    <main className='accord'>
    <Flex item={'center'} gaps={'24px'}>
      <H1 Title='Preguntas Frecuentes' color='white' />
      <section className='FAQ-conteiner'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Qué es Autoclipper y cómo puede ayudar en la entrega de contenido?</Accordion.Header>
            <Accordion.Body>
              Autoclipper es una solución que impulsa la entrega de contenido, permitiéndote crear una máquina de cortes automática para YouTube. Esto significa que puedes reutilizar horas de videos grabados, transformándolos en nuevos formatos rápidamente. También ayuda a expandir tu estrategia de contenido, siguiendo los pasos de los mayores canales de entretenimiento, noticias y educación. ¡Agenda una demostración para saber más!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Cuáles son los principales beneficios de usar Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Elige los mejores clips para tu contenido de forma fácil.<br />
              ● Edita y subtitula automáticamente.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Para quién está destinado el servicio de Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Radios Web<br />
              ● TVs Online<br />
              ● Podcasts<br />
              ● Creadores de contenido<br />
              Si formas parte de alguno de estos grupos, ¡agenda una demostración con nosotros!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Qué resultados puedo esperar al usar Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Edita clips 10 veces más rápido, utilizando nuestra Inteligencia Artificial.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>¿Cuánto cuestan los servicios de Autoclipper?</Accordion.Header>
            <Accordion.Body>
              Actualmente estamos en prueba alpha, y ofrecemos Autoclipper solo a socios calificados. Inscríbete y únete a la lista de usuarios alpha.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Flex>
  </main>
  
  );
}

export default Faq;