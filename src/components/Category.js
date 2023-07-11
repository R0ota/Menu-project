import React from 'react'
import { Col, Row  } from 'react-bootstrap';
import { Roll } from 'react-reveal';

 const CategoryItems = ({FilterBycategory ,Allcategory}) => {
  //  to filter by category
  const onFilter=(cat)=>{
    FilterBycategory(cat)
  }
  return (
   <Row className='my-2 mb-5'>
<Col sm="12" className='d-flex justify-content-center'>
<Roll>

  {
    Allcategory.length >= 1 ? (Allcategory.map((cat) => {
      return(
<div>

<button  onClick={()=> onFilter(cat)}  style={{border:"1px solid #b45b35"}} className=' btn mx-2'> {cat}</button>
</div>
      )
    })) : <h4> There is no There is no items</h4>
  }
</Roll>
</Col>
   </Row>
  )
}
export default CategoryItems;