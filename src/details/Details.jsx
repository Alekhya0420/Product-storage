import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Details() {
  let api_url = "https://dummyjson.com/products";
  let {details} = useParams();

  let [detailInfo, setDetailInfo] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    tags: [],
    brand: "",
    sku: "",
    weight: "",
    dimensions: {
      width: "",
      height: "",
      depth: ""
    },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    reviews: [],
    returnPolicy: "",
    minimumOrderQuantity: "",
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: ""
    },
    images: [],
    thumbnail: ""
  });

  function info() {
    axios.get(`${api_url}/${details}`)
      .then((res) => {
        console.log(res.data);
        setDetailInfo(res.data);
      })
      .catch((error) => console.log("ERROR IS", error));
  }

  useEffect(() => {
    info();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={6} sm={6}>
          {detailInfo.images && detailInfo.images.map((data, imgindex) => (
            <div key={imgindex}>
              <Card className='shadow-lg p-3 mb-5 bg-dark rounded border border-primary'>
                <img src={data} className='img-fluid' alt={`Detail ${imgindex}`} style={{height:"400px"}}/>
              </Card>
            </div>
          ))}
        </Col>

        <Col md={6} sm={6}>
          <Card className='bg-white text-dark mb-4 border-primary'>

<div className='border border-danger rounded-circle d-flex align-items-center justify-content-center bg-danger ms-auto' 
style={{ width:'100px',height:'100px',right:"0"}}>
<p className='mb-0'><strong>Discount:</strong> {detailInfo.discountPercentage}%</p>
</div>
    <img src={detailInfo.thumbnail} alt={detailInfo.title} className='bg-dark' style={{height:"570px"}}/>
            <hr/>
            <Card.Title>
              <p>{detailInfo.title}</p>
            </Card.Title>
            <Card.Text>
              <p><strong>Brand:</strong> {detailInfo.brand}</p>
              <p><strong>Description:</strong> {detailInfo.description}</p>
              <p><strong>Category:</strong> {detailInfo.category}</p>
              <p className='bg-danger'><strong>Price:</strong> ${detailInfo.price}</p>
              <p><strong>Stock:</strong> {detailInfo.stock}</p>


              <p><strong>Rating:</strong> {detailInfo.rating}</p>
              <p><strong>Return Policy:</strong> {detailInfo.returnPolicy}</p>
              <p><strong>Minimum Order Quantity:</strong> {detailInfo.minimumOrderQuantity}</p>
              <p><strong>CreatedAt:</strong>{detailInfo.meta.createdAt}</p>
              <p><strong>Barcode:</strong>{detailInfo.meta.barcode}</p>
              <strong>QRCODE:</strong><img src={detailInfo.meta.qrCode} style={{height:"60px"}}></img>
              <p><strong>UpdateAt:</strong>{detailInfo.meta.updatedAt}</p>
              <p><strtong>Width:</strtong>{detailInfo.dimensions.width}</p>
              <p><strong>Height:</strong>{detailInfo.dimensions.height}</p>
              <p><strong>Depth:</strong>{detailInfo.dimensions.depth}</p>
            </Card.Text>
          </Card>
        </Col>
      </Row>

      <Row>
        {detailInfo.reviews && detailInfo.reviews.map((data, detailIndex) => (
          <Col key={detailIndex} md={4} className='mb-5'>
            <Card className='border-dark'>
              <Card.Title className='bg-warning'>
                <p>{data.reviewerName}</p>
              </Card.Title>
              <Card.Text>
                <p>{data.reviewerEmail}</p>
                <p><strong>Rating:</strong> {data.rating}</p>
                <p>{data.comment}</p>
                <p>{new Date(data.date).toLocaleDateString()}</p>
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Details;
