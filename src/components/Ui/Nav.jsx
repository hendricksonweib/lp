import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import FlagButton from '../controls/FlagButton'
import LogoImg from "../../../public/LogoAutoclipper.png"
import '../../style/global.css'

function NavScrollExample({action1, action2, action3, action4,action5, buttom1, buttom2}) {
  return (
    <Navbar expand="md" fixed="top" className="bg-custom" bg="green" data-bs-theme="dark">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#" >
          <img src={LogoImg} alt="LogoAutoClipper" style={{ height: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex align-items-center justify-content-end">
          <Nav className="my-2 my-lg-0 d-flex align-items-start " navbarScroll>
            <Nav.Link href="#action1">{action1}</Nav.Link>
            <Nav.Link href="#action2">{action2}</Nav.Link>
            <Nav.Link href="#action3">{action3}</Nav.Link>
            <Nav.Link href="#action4">{action4}</Nav.Link>
            <Nav.Link href="#action5">{action5}</Nav.Link>
            {/* <Button variant="outline-success">Quero ser notificado!</Button> */}
            <Button id='entrar' variant="outline-success">{buttom1}</Button>
            <FlagButton/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample;
