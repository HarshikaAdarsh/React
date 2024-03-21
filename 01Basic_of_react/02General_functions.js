function App(){
    return <h1>{new Date().toLocaleTimeString()}</h1>;
}

// Component Layout
// decalaring values and then returning it with some more content 
function App() {
    const name = 'tim'
    const age = '21'
    return <h1>hi My name is {name} and my age is {age}</h1>
}

// input type
function App(){
    return <input 
           type="number" 
           min={5} 
           max={20 } 
           list = {[1,3,4]} //array
           style = {{color : 'red'}}  // object 
           alt={message}  // variable
           />;
} //Note we can provide object as a prop but we cannot display it 
