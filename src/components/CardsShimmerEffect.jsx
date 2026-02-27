import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardsShimmerEffect = () => {
  return (
    <div className='d-flex gap-3 flex-wrap justify-content-center m-4 '>
      {Array.from({length:20}).map((_,index)=> <Card style={{ width: '18rem', height:"450px",background:"black" }}></Card>)}
    </div>
  )
}

export default CardsShimmerEffect