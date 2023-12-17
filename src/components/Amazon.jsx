import React, { useState } from 'react';
import list from '../data';
import '../styles/amazon.css';
import Cards from './Cards';
import { FaSearch } from 'react-icons/fa';

const Amazon = ({ handleClick }) => {
  const [selectcategorie, setcategorie] = useState('all');
  const [searchinput, setsearchinput] = useState('');

  const handlechange = (e) => {
    setcategorie(e.target.value);
  }

  const baseFilteredItems = selectcategorie === 'all' ? list :
    list.filter((item) => item.categorie.toLowerCase() === selectcategorie.toLowerCase());

  const handlesearch = () => {
    const lowerCaseSearchInput = searchinput.toLowerCase().trim();

    const filteredItems = baseFilteredItems.filter((item) => {
      const searchMatch = lowerCaseSearchInput === '' || item.title.toLowerCase().includes(lowerCaseSearchInput);

      return searchMatch;
    });

    return filteredItems;
  }

  return (
    <>
      <div className="div_section">
        <div className="selection">
          <label>Choisir une categorie :</label>
          <select value={selectcategorie} onChange={handlechange}>
            <option value="all">all</option>
            <option value="Juice">Juice</option>
            <option value="Coffee">Coffee</option>
          </select>
        </div>
        <div className="search">
          <input type="search" placeholder='Search products...' value={searchinput} onChange={(e) => setsearchinput(e.target.value)} />
          <span onClick={handlesearch} className='searchLogo'><FaSearch/></span>
        </div>
        </div>

      <section>
        {handlesearch().map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>
    </>
  )
}

export default Amazon;
