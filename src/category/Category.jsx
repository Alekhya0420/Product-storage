import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container} from 'react-bootstrap'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Category() {

    let api_url="https://dummyjson.com/products/categories";
    let api_url2="https://dummyjson.com/products";
    let sort_api = "https://dummyjson.com/products?sortBy=title&order=asc";

    let[category,categoryState]=useState([]);
    let[products,productState]=useState([]);
    let[searchInput,SearchState]=useState("");
    let[searchInput2,SearchState2]=useState("");
    let[sortItem,setSort]=useState([]);
    const [isSorted, setIsSorted] = useState(false);


    function fetch()
    {
        axios.get(api_url)
        .then((res)=>{
            console.log("category is",res.data);
            categoryState(res.data);
        })

        .catch((error)=>console.log("Axios error is",error));
    } 

    useEffect(()=>{
        fetch()
    },[])


    function fetch2()
    {
        axios.get(api_url2)
        .then((res)=>{
            console.log("product is",res.data.products);
            productState(res.data.products);
        })

        .catch((error)=>console.log("Axios error",error));
    }

    useEffect(()=>{
        fetch2()
    },[])

    function sortitem()
    {
        axios.get(sort_api)
        .then((res)=>{
            setSort(res.data.products);
            setIsSorted(!isSorted);
            console.log("sorted item",res.data.products);
        })

        .catch((error)=>console.log("error is",error));
    }

    console.log("mysort is",sortItem);

    let handleSearch=(event)=>{
        SearchState(event.target.value);
        SearchState2(event.target.value);
    };

    let Searched = category.filter(categoryItem =>
        categoryItem.slug.toLowerCase().includes(searchInput.toLowerCase())
    );

    let Searched2=products.filter(product=>
        product.thumbnail.toLowerCase().includes(searchInput2.toLowerCase())
    );

    let itemDisplay=isSorted?sortItem:Searched2
  return (
    
        <Container>
        <div className='d-flex'>
            <div className='mb-5'>
            <input type="text"
            placeholder="search..."
            onChange={handleSearch}
            />
            <button onClick={sortitem} className='bg-dark text-white px-5'>Sort title</button>
                {
                    Searched.map((data,index)=>(   
                        <div key={index}>
                        <Card className='bg-white border-dark text-white m-4'>    
                        <Link to={`${data.slug}`}><p>{data.slug}</p></Link>
                        </Card>  
                        </div>  
     
                    ))
                }
            </div>

            <div className='d-flex flex-wrap justify-content-between mb-5'>
                {
                    itemDisplay.map((data,index2)=>(

                        <div key={index2}>
                        <Card className='bg-dark border-primary m-1' style={{height:"270px",width:"200px"}}>    
                        <Card.Img variant="top" src={data.thumbnail}  />
                        <p className='bg-danger'>{data.category}</p> 
                        <p className='text-primary'>{data.title}</p>             
                        </Card>  
                        </div>    
                    ))
                }
            </div>
        </div>
        </Container>
   
  )
}

export default Category



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Category() {
//     const api_url = "https://dummyjson.com/products/categories";
//     const api_url2 = "https://dummyjson.com/products";
//     const sort_api = "https://dummyjson.com/products?sortBy=title&order=asc";

//     const [category, setCategory] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [searchInput, setSearchInput] = useState("");
//     const [isSorted, setIsSorted] = useState(false);

//     useEffect(() => {
//         axios.get(api_url)
//             .then((res) => {
//                 console.log("Categories:", res.data);
//                 setCategory(res.data);
//             })
//             .catch((error) => console.log("Axios error:", error));
//     }, []);

//     useEffect(() => {
//         axios.get(api_url2)
//             .then((res) => {
//                 console.log("Products:", res.data.products);
//                 setProducts(res.data.products);
//             })
//             .catch((error) => console.log("Axios error:", error));
//     }, []);

//     const sortProducts = () => {
//         axios.get(sort_api)
//             .then((res) => {
//                 console.log("Sorted items:", res.data.products);
//                 setProducts(res.data.products); 
//                 setIsSorted(true); 
//             })
//             .catch((error) => console.log("Error:", error));
//     };

//     const handleSearch = (event) => {
//         setSearchInput(event.target.value);
//     };

//     const filteredCategories = category.filter(categoryItem =>
//         categoryItem.slug.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     return (
//         <Container>
//             <div className='d-flex'>
//                 <div className='mb-5'>
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         onChange={handleSearch}
//                     />
//                     <button onClick={sortProducts}>Sort Products</button>
//                     {filteredCategories.map((data, index) => (
//                         <div key={index}>
//                             <Card className='bg-white border-dark text-dark m-4'>
//                                 <Link to={`${data.slug}`}>
//                                     <p>{data.slug}</p>
//                                 </Link>
//                             </Card>
//                         </div>
//                     ))}
//                 </div>

//                 <div className='d-flex flex-wrap justify-content-between mb-5'>
//                     {filteredProducts.map((data, index) => (
//                         <div key={index}>
//                             <Card className='bg-dark border-primary m-1'>
//                                 <Card.Img variant="top" src={data.thumbnail} style={{ height: "190px" }} />
//                                 <p className='bg-warning'>{data.category}</p>
//                             </Card>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export default Category;
