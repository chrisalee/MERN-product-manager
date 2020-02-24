import React, {useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductForm from '../components/Form/ProductForm';
import Axios from 'axios';
import { Link } from '@reach/router';

const Main = (props) => {
    const [newProduct,setnewProdcut] = useState({
        productTitle: '',
        productPrice: '',
        productDescription: ''
    });

    const [errors, setErrors] = useState({
        productTitle: '',
        productPrice: '',
        productDescription: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product`)
            .then( response => {
                setProducts(response.data)
            })
            .catch(error => setErrors(error.response.data))
    }, [isSubmitted]);
        
    const handleChange = (event) => {
        event.preventDefault();
        setnewProdcut({
            ...newProduct,
            [event.target.name] : event.target.value
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8000/api/product/create', newProduct)
            .then( response => {
                setnewProdcut({
                    productTitle: '',
                    productPrice: '',
                    productDescription: ''
                });
                setErrors({
                    productTitle: '',
                    productPrice: '',
                    productDescription: ''
                });
                // !isSubmitted incase you want to be able to toggle in the future
                setIsSubmitted(!isSubmitted);
            })
            .catch(error => setErrors(error.response.data))
    };

    const style ={
        textAlign: 'center',
        marginTop: '55px',
        color: '#133366'
    }

    const listStyle = {
        textAlign: 'center',
        paddingBottom: '50px'

    }

    const headstyle = {
        textAlign: 'center',
        fontFamily: 'cursive'
    }

    return(
        <div>
            <Header />
            <h2 style={headstyle}> Add a Product: </h2>
            <ProductForm 
                form = {newProduct}
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                errors = {errors}
            />
            <h2 style={style}> All the products: </h2>
            <div style={listStyle}>
                {
                    products.map((product, index) => {
                        return(
                            <div >
                                <Link to = {`/product/${product._id}`} > {product.productTitle} </Link>
                            </div>
                        );
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default Main;