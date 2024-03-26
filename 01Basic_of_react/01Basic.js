//#####to create an elemet and show up on screen is 5 step process

//1) Import the React and ReactDOM libraries
   //1.1) React : this library defines what a component is and how multiple compenents work together
   //1.2) ReactDOM : Library that knows how to get a component to show up in the browser
             //ReactDOM turn the components into html and show it on browser

//2)Get a reference to the div with ID root

//3)Tell React to take control of the element

//4) Create a Component 

//5)Show the component

//step 1
import React from 'react';
import ReactDOM from 'react-dom/client';

//step 2
const el = document.getElementById('root');

//step 3

const root = ReactDOM.createRoot(el);

//step 4
function App(){
    return <h1>Hi There!</h1>;
}

// step 5
root.render(<App/>);


/************************************************************************ */


// ###Rule Converting HTML to JSX 
//1) All prop names follow camelCase
//2) Number Attribute use curly braces
//3) Boolean 'true' can be written with just the property name. 'false' should be written with curly braces
//4) The 'class' attribute is written as 'className'
//5) In-line style are provided as objects

//rule 1) 
// function App(){
//     return <textarea autoFocus={true}/>;
// }


/**************************************************************************************************** */


//#### steps for creating a component

// create a new file (App.js)
// Make your component - write a function that should return JSX
//export your component - export default App;
// import it in another file - it can be Index.js
// use the component - <App/>

/********************************************************************************************************* */

// Module System : import export system

//1) Export Statements : 2 types - (i)Default  (ii) named
//(i)Default : 2 ways  a)function App(){return ---} export default App
//                     b)export default fucntion App(){return ----}
//(ii)Named : 2 ways to write
//            a) function App(){
                //    return <h1>Hi <h1/>
                //    }export default App
                //    const message = "hi"
                //    export {message}

            //    b) export default fucntion App(){
            //               return ----
            //             }export const message = 'hi'

//2) Import Statements a) Default - import App from './App'
//                     b) for named - import App,{message} from './App'


/*************************************************************************************************************************** */

