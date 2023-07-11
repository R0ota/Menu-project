import { Container } from 'react-bootstrap';
import React ,{useState} from 'react';
import NavBar from './components/NavBar';
import HeaderItems from './components/Header';
import CategoryItems from './components/Category';
import CardLists from './components/Card';
import items from './data';
function App() {
  const [itemData, setitemData] = useState(items)
// get all cat unique
   const Allcategory = [ "All" , ...new Set(items.map((i) => i.category))]
   console.log(Allcategory)

  //  filter by category

  const FilterBycategory =(cat) => {

    if(cat ==="All") {
      setitemData(items)

    }
    else {
      const newarr =items.filter((item)=> item.category === cat)
      setitemData(newarr)
    }
    
  }
 //  filter by search form 
 const FilterBysearch =(word) => {

  if(word !== "") {  
    const newarr =items.filter((item)=> item.title === word)
    setitemData(newarr)
  }
  
}

  return (
    <div className="color-body font">
      <NavBar FilterBysearch={FilterBysearch} />
        <Container>
        
          <HeaderItems />
        <CategoryItems FilterBycategory={FilterBycategory} Allcategory={Allcategory}/>
       < CardLists itemData={itemData}/>
       
       
        </Container>
    </div>
  );
}

export default App;
