function SearchBar(){
    const handleFormSubmit = () => {
       console.log('I need to tell the parents sbout some data');
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