import Accordion from 'react-bootstrap/Accordion';
import '../../../style/global.css'
import Flex from '../../layout/Flex'
import H1 from '../../layout/H1-title'

function Faq() {
  return (
    <main className='accord'>
    <Flex item={'center'} gaps={'24px'}>
      <H1 Title='Frequently Asked Questions' color='white' />
      <section className='FAQ-conteiner'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Autoclipper and how can it help with content delivery?</Accordion.Header>
            <Accordion.Body>
              Autoclipper is a solution that boosts content delivery, allowing you to create an automatic clipping machine for YouTube. This means you can reuse hours of recorded videos, transforming them into new formats quickly. It also helps to grow your content strategy, following in the footsteps of the biggest entertainment, news, and education channels. Schedule a demo to learn more!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the main benefits of using Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Easily select the best clips for your content.<br />
              ● Automatically edit and caption.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Who is Autoclipper's service intended for?</Accordion.Header>
            <Accordion.Body>
              ● Web Radios<br />
              ● Online TVs<br />
              ● Podcasts<br />
              ● Content creators<br />
              If you are part of any of these groups, schedule a demo with us!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What results can I expect from using Autoclipper?</Accordion.Header>
            <Accordion.Body>
              ● Edit clips 10 times faster using our Artificial Intelligence.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How much do Autoclipper's services cost?</Accordion.Header>
            <Accordion.Body>
              We are currently in alpha testing and offer Autoclipper only to qualified partners. Sign up and join the list of alpha users.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Flex>
  </main>
  
  );
}

export default Faq;