import {useState} from 'reatc';

function SearchBar({onSubmit}){
    const [term, setTerm]=useState('');

    const handleFormSubmit = (event) => {
       event.preventDefault(); 
       onSubmit('hjkxasj') ; 
    };
   
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
             <input/>
        </form>
    </div>
    );
      
}
export default SearchBar;