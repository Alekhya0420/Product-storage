// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';

// function Product() {
//     let api_url = "https://dummyjson.com/products/category";
//     let api_url_categories = "https://dummyjson.com/products/categories";
//     let sort_api="https://dummyjson.com/products?sortBy=title&order=asc";
//     let { myid } = useParams();

//     let [products, setProducts] = useState([]);
//     let [categories, setCategories] = useState([]);
//     let [searchInput, setSearchInput] = useState("");

//     useEffect(() => {
//         axios.get(api_url_categories)
//             .then((res) => {
//                 console.log("Categories are", res.data);
//                 setCategories(res.data);
//             })
//             .catch((error) => console.log("Axios error", error));

//         axios.get(`${api_url}/${myid}`)
//             .then((res) => {
//                 console.log("Items are", res.data.products);
//                 setProducts(res.data.products);
//             })
//             .catch((error) => console.log(error));
//     }, [myid]);


//     let handleSearch = (event) => {
//         setSearchInput(event.target.value);
//     };

//     let filteredCategories = categories.filter(category =>
//         category.slug.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     return (
//         <Container>
//             <Row>
//                 <Col sm={2} md={2} className="bg-light border-right">
//                     <input
//                         type="text"
//                         placeholder="Search categories..."
//                         onChange={handleSearch}
//                         className="form-control mb-4"
//                     />
//                     {
//                         filteredCategories.map((category, index) => (
//                             <div key={index} className='mb-3'>
//                                 <Card className='bg-white border-dark text-dark p-3'>
//                                     <Link to={`/${category.slug}`}>
//                                         <p className='m-0'>{category.slug}</p>
//                                     </Link>
//                                 </Card>
//                             </div>
//                         ))
//                     }
//                 </Col>

                
//                 <Col sm={10} md={10}>
//                     <Row>
//                         {
//                             products.map((data, index) => (
//                                 <Col key={index} md={3} className='mb-4'>
//                                     <Card className='bg-dark border-primary text-white'>
//                                         <Card.Img variant="top" src={data.thumbnail} style={{ height: "190px" }} />
//                                         <Card.Body>
//                                             <Card.Title className='bg-primary p-2'>
//                                                 <p className='m-0'>{data.title}</p>
//                                             </Card.Title>
//                                             <Card.Text className='bg-danger text-white p-2'>
//                                                 <strong>Price:</strong> {data.price}
//                                             </Card.Text>
//                                             <Link to={`/products/${data.id}`}>
//                                                 <Button variant='secondary'>Wanna know?</Button>
//                                             </Link>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ))
//                         }
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Product;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Product() {
    let api_url = "https://dummyjson.com/products/category";
    let api_url_categories = "https://dummyjson.com/products/categories";
    

    let { myid } = useParams();

    let [products, setProducts] = useState([]);
    let [categories, setCategories] = useState([]);
    let [searchInput, setSearchInput] = useState("");
 
    useEffect(() => {
        axios.get(api_url_categories)
            .then((res) => {
                console.log("Categories are", res.data);
                setCategories(res.data);
            })
            .catch((error) => console.log("Axios error", error));

        axios.get(`${api_url}/${myid}`)
            .then((res) => {
                console.log("Items are", res.data.products);
                setProducts(res.data.products);
            })
            .catch((error) => console.log(error));
    }, [myid]);

    

    let handleSearch = (event) => {
        setSearchInput(event.target.value);
    };

    let filteredCategories = categories.filter(category =>
        category.slug.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <Container>
            <Row>
                <Col sm={2} md={2} className="bg-light border-right">
                    <input
                        type="text"
                        placeholder="Search categories..."
                        onChange={handleSearch}
                        className="form-control mb-4"
                    />
                    {
                        filteredCategories.map((category, catIndex) => (
                            <div key={catIndex} className='mb-3'>
                                <Card className='bg-white border-dark text-dark p-3'>
                                    <Link to={`/${category.slug}`}>
                                        <p className='m-0'>{category.slug}</p>
                                    </Link>
                                </Card>
                            </div>
                        ))
                    }
                </Col>

                
                <Col sm={10} md={10}>
                    <Row>
                        {
                            products.map((data, index3) => (
                                <Col key={index3} md={3} className='mb-4'>
                                    <Card className='bg-dark border-primary text-white'>
                                        <Card.Img variant="top" src={data.thumbnail} style={{ height: "190px" }} />
                                        <Card.Body>
                                            <Card.Title className='bg-primary p-2'>
                                                <p className='m-0'>{data.title}</p>
                                            </Card.Title>
                                            <Card.Text className='bg-danger text-white p-2'>
                                                <strong>Price:</strong> {data.price}
                                            </Card.Text>
                                            <Link to={`/products/${data.id}`}>
                                                <Button variant='secondary'>Wanna know?</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Product;


