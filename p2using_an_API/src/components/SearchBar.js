import {useState} from 'reatc';

function SearchBar({onSubmit}){
    const [term, setTerm]=useState('');

    const handleFormSubmit = (event) => {
       event.preventDefault(); 
       onSubmit('hjkxasj') ; 
    };

    const handleChange = (event) => {
        setTerm(event.target.value.replace(/[a-z]/,'') );
    };
   
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
           Confirm your search: {term}
            <input value={term}  onChange={handleChange}/>
             {term.length < 3 && 'Term must be longer'}
             </form>
       
    </div>
    );
      
}
export default SearchBar;