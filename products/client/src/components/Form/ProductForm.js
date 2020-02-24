import React, {useState} from 'react';
import Input from './Input';
import './Form.css';

const ProductForm =({form, handleChange, handleSubmit, errors}) => {

    const [isMouseOver, setisMousedOver] = useState(false);
    function handleMouseOver(){
        // console.log("mouse over");
        setisMousedOver(true);
    }

    function handleMouseOut(){
        setisMousedOver(false);
    }

    return(
        <div>
            <form onSubmit = {(event) => handleSubmit(event)}>
                <Input 
                    placeholder = 'Enter Title'
                    type = 'text'
                    name = 'productTitle'
                    value = {form.productTitle}
                    handleChange = {handleChange}
                    error = {errors.productTitle !=null ? errors.productTitle.message : ''}
                />
                <Input 
                    placeholder = 'Enter Price'
                    type = 'number'
                    name = 'productPrice'
                    value = {form.productPrice}
                    handleChange = {handleChange}
                    error = {errors.productPrice !=null ? errors.productPrice.message : ''}
                />
                <Input 
                    placeholder = 'Enter Description'
                    type = 'text'
                    name = 'productDescription'
                    value = {form.productDescription}
                    handleChange = {handleChange}
                    error = {errors.productDescription !=null ? errors.productDescription.message : ''}
                />
                <input 
                    type = 'submit'
                    value = 'Add Product'
                    className = 'form-button'
                    style = {{backgroundColor: isMouseOver ? '#133366' : '#4a70ac'}}
                    onMouseOver = {handleMouseOver}
                    onMouseOut = {handleMouseOut}
                />
                
            </form>
        </div>
    );
}

export default ProductForm;