import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchBar =()=> {
    return (
        <div className='searchBar'>
        <input className='searchInput'
        placeholder='Search...'>
       
        </input>
        <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
        </div>
    );
  }
  
  export default SearchBar;
  