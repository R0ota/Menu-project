import React , {useState} from 'react'
import { Navbar, Container, Form, Nav, Row } from 'react-bootstrap';



const NavBar = ({FilterBysearch}) => {
  const [searchValue, setsearchValue] = useState("")
  const onsearch =(e) => {
    e.preventDefault()
    FilterBysearch(searchValue)
    setsearchValue("")

  }
  return (
    <Row> 
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand> <div className='brand-color'>New restaurant  </div> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            
            </Nav>
            <Form  className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                onChange={(e)=> setsearchValue(e.target.value)}
                value={searchValue}
              />
              <button onClick={(e)=> onsearch(e)} className='btn-search' >Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Row>
  );
}

  

export default NavBar;
