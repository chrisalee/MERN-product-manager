import React, { useState, useEffect } from 'react';
import './Details.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import { navigate } from '@reach/router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const Details = ({id}) => {
    const [prod, setProd] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${id}`)
            .then( results => setProd(results.data))
            .catch( err => navigate('/'));
    }, []);

    const [isMouseOver, setisMousedOver] = useState(false);
    function handleMouseOver(){
        // console.log("mouse over");
        setisMousedOver(true);
    };

    function handleMouseOut(){
        setisMousedOver(false);
    };

    const removeProduct = () => {
        Axios.delete(`http://localhost:8000/api/product/destroy/${id}`)
            .then(res => {
                navigate('/');
            })
    };

        return(
        <div >
            <Header />
            <HomeOutlinedIcon
                
            /> ||
            <EditTwoToneIcon 
                
            />             
            <div className = 'showpage'>
                <h2 className = 'showh2'> {prod.productTitle} </h2>
                <p> PRICE: {prod.productPrice} </p>
                <p> DESCRIPTION: {prod.productDescription} </p>
                <div className = 'showicon'>
                    <HomeOutlinedIcon 
                        style = {{color: isMouseOver ? '#133366' : '#4a70ac'}}
                        onClick = {() => navigate('/')}
                        onMouseOver = {handleMouseOver}
                        onMouseOut = {handleMouseOut}
                    /> ||
                    <EditTwoToneIcon
                        style = {{color: isMouseOver ? 'darkgreen' : '#4a70ac'}}
                        onClick = {() => navigate(`/product/edit/${id}`)}
                        onMouseOver = {handleMouseOver}
                        onMouseOut = {handleMouseOut}
                    /> ||
                    <DeleteForeverIcon 
                        style = {{color: isMouseOver ? 'maroon' : '#4a70ac'}}
                        onClick = {removeProduct}
                        onMouseOver = {handleMouseOver}
                        onMouseOut = {handleMouseOut}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Details;