import React from 'react'
import { Col, Row  } from 'react-bootstrap';

 const CategoryItems = () => {
  return (
   <Row className='my-2 mb-5'>
<Col sm="12" className='d-flex justify-content-center'>
<div>

  <button style={{border:"1px solid #b45b35"}} className=' btn mx-2'> All</button>
  <button style={{border:"1px solid #b45b35"}} className=' btn mx-2'>  Breakfast</button>
  <button style={{border:"1px solid #b45b35"}} className=' btn mx-2'> Lunch</button>
</div>
</Col>
   </Row>
  )
}
export default CategoryItems;