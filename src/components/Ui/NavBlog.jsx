import Button from 'react-bootstrap/Button'
import PrimaryColorButton from '../controls/PrimaryColorButton'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LogoImg from "../../../public/LogoAutoclipper.png"
import '../../style/global.css'

function NavScrollExample() {
  return (
    <Navbar expand="md" fixed="top" className="bg-body" bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#" >
          <img src={LogoImg} alt="LogoAutoClipper" style={{ height: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex align-items-center justify-content-end">
          <Nav className="my-2 my-lg-0 d-flex align-items-start " navbarScroll>
            <Button variant="outline-success">Se inscreve ai mano</Button>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample;
