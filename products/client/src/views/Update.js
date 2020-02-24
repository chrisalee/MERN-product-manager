import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Update.css';
import Axios from 'axios';
import { navigate } from "@reach/router";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductForm from '../components/Form/ProductForm';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import UpdateIcon from '@material-ui/icons/Update';

const Update = ({id}) => {
    const removeProduct = () => {
        Axios.delete(`http://localhost:8000/api/product/destroy/${id}`)
            .then(res => {
                navigate('/');
            })
    };

    const [editProduct, setEditProduct] = useState({});
    const [errors, setErrors] = useState({
        productTitle: '',
        productPrice: '',
        productDescription: ''
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${id}`)
            .then( results => setEditProduct(results.data))
            .catch( err => navigate('/'));
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setEditProduct({
            ...editProduct,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.put(`http://localhost:8000/api/product/update/${id}`, editProduct)
            .then( res => navigate(`/product/${id}`))
            .catch( err => setErrors(err.response.data));
    }

    const headstyle = {
        textAlign: 'center',
        fontFamily: 'cursive'
    }

    return(
        <div>
            <Header />
            <HomeOutlinedIcon onClick = {() => navigate('/')}/> ||
            <DeleteForeverIcon onClick = {removeProduct}/>
            <div className='editpage'>
                <h1 style={headstyle}> Edit: {editProduct.productTitle} </h1>
                <ProductForm 
                    form = {editProduct}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    errors = {errors}
                />
                <form>

                </form>
                <div className='showicon'>
                    {/* <HomeOutlinedIcon onClick = {() => navigate('/')}/> ||
                    <UpdateIcon /> ||
                    <DeleteForeverIcon onClick = {removeProduct}/> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Update;