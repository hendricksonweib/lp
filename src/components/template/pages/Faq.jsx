import Accordion from 'react-bootstrap/Accordion';
import '../../../style/global.css'
import Flex from '../../layout/Flex'

function Faq() {
  return (
    <main className='accord'>
    <Flex item={'center'} >
      <section className='FAQ-conteiner'>
        <Accordion defaultActiveKey="0" >
          <Accordion.Item eventKey="0">
            <Accordion.Header>O que é a Autoclipper e como ela pode ajudar na entrega de conteúdo?</Accordion.Header>
            <Accordion.Body>
              A Autoclipper é uma solução que impulsiona a entrega de conteúdo, permitindo que você crie uma máquina de cortes automática para o YouTube. Isso significa que você pode reutilizar horas de vídeos gravados, transformando-os em novos formatos rapidamente. Ela também ajuda a crescer sua estratégia de conteúdo, seguindo os passos dos maiores canais de entretenimento, notícias e educação. Agende uma demonstração para saber mais!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Quais são os principais benefícios de usar a Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Escolha os melhores clipes de para o seu conteúdo de forma facilitada.
              ● Edite e legende de forma automática.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Para quem é destinado o serviço da Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Rádios Web
              ● TVs Online
              ● Podcasts
              ● Criadores de conteúdo
              Se você faz parte de algum desses grupos, agende uma demonstração conosco!s
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Quais resultados posso esperar ao usar a Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Edite clipes 10 x mais rápidos, utilizando a nossa Inteligência Artificial.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Quanto custa os serviços da Autoclipper?</Accordion.Header>
            <Accordion.Body>
              Atualmente estamos em teste alpha, disponibilizamos a autoclipper apenas para parceiros qualificados. Faça a sua inscrição e participe da lista de usuários alpha.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Flex>
    </main>
  );
}

export default Faq;