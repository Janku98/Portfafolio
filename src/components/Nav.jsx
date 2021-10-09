import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      
     <div>
       <h1 className="texto"> Weather App</h1 >
     </div>
     <div>
        <SearchBar onSearch= {onSearch} />
     </div>
    </div>
  );
};

export default Nav;
