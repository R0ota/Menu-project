import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import HeaderItems from './components/Header';
import CategoryItems from './components/Category';
import CardLists from './components/Card';
function App() {
  return (
    <div className="color-body font">
      <NavBar />
        <Container>
        
          <HeaderItems />
        <CategoryItems/>
       < CardLists/>
       < CardLists/>
       < CardLists/>
       < CardLists/>
        </Container>
    </div>
  );
}

export default App;
