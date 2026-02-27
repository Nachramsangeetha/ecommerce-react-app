import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';

const Banner = () => {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg" alt="" style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg" alt="" style={{width:"100%",height:"400px"}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Feb26/1_GW-Hero-Pc-HDFC-KOTAK-ONE-YES-Bank._CB787666247_.jpg" alt="" style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Cards></Cards>
    </div>
  )
}

export default Banner