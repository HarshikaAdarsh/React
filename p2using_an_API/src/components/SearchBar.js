import {useState} from 'reatc';

function SearchBar({onSubmit}){
    const [term, setTerm]=useState('');

    const handleFormSubmit = (event) => {
       event.preventDefault(); 
       onSubmit('hjkxasj') ; 
    };

    const handleChange = (event) => {
        console,log(event.target.value)
    };
   
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange}/>
             </form>
       
    </div>
    );
      
}
export default SearchBar;