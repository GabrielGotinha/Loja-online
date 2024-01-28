import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Icon from '../../assets/carticon.ico'


export default function Navbar2 (){
    return(
        <div>
           <Navbar className="bg-[#c7c7c7] border-b-2 border-[#aaaaaa]">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}