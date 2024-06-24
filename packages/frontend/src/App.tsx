import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Routes from "./Routes.tsx"
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
 return (
  <div className='App container py-3'>
    <Navbar collapseOnSelect bg="light" expand="md" className='mb-3 px-3'>
      <LinkContainer to="/">
        <Navbar.Brand className='fw-bold text-muted'>ScRRT</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle/>
      <Navbar.Collapse className='justify-content-end'>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/signup">
            <Nav.Link href="/signup">Signup</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">          
            <Nav.Link href="/login">Login</Nav.Link>
          </LinkContainer> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes/>
  </div>
 )
}

export default App
