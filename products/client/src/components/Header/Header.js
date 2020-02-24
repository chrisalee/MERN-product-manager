import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import CategoryIcon from '@material-ui/icons/Category';

const Header = () => {
    return(
        <div className='topheader'>
            
            <h1>
                <CategoryIcon />
                <span> Product Manager </span>
            </h1>
        </div>
    );
}

export default Header;