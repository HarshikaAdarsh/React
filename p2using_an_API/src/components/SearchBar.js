import {useState} from 'reatc';

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
       event.preventDefault(); 
       onSubmit(term) ; 
    };

    const handleChange = (event) => {
        setTerm(event.target.value );
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