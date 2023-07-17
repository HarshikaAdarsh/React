import'./App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

//ARRAY DESTRUCTURING
// function App(){
//   function makeArray(){
//     return [1,10,32,40] ;    //if i want to get access the of first two element of array
//   }
//   const myArray = makeArray();
//   const firstElement = myArray[0];
//   const secondElement = myArray[1];
//   console.log(firstElement, secondElement);
// }
// export default App;

// function App(){
//   function makeArray(){
//     return [1,10,32,40] ;    //if i want to get access the of first two element of array but in less code
//   }
//   const[firstElement,secondElement] = makeArray();
//   console.log(firstElement,secondElement); 
// }
// export default App;


//event handle function 

//  function App(){
      
//       const[count,setCount] = useState(0);  //state and update funtion
      
//       const handleClick= () =>{            //event handler function
//        setCount(count+1);      
//      };
//      return(
//      <div>
//          <button onClick={handleClick}>Add Animal</button>
//           <div>Number of animals:{count} </div>
//      </div>
//      );
//  }

//  export default App ;

//variation on event handle 

// function App(){
  
//   return(
//     <div>
//       <button
//         onClick={() => 
//           console.log('button was clicked')
//         }
//         >
//         Add Animal
//       </button>
//     </div>
//   );
// }
// export default App ;

//NOW HERE WE ARE ADDING ANIMALS PHOTO

//event handle function 
function getRandomAnimal(){
  const animals = ['bird','cat','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)];

}
console.log(getRandomAnimal());
 function App(){
     
       const [animals, setAnimals] = useState([]);
       const handleClick= () =>{                
          setAnimals([...animals, getRandomAnimal()])
      };
      const renderedAnimals = animals.map((animal, index) => { //this is to build the animals in list and in js list is build with the help of map
        return<AnimalShow type={animal} key={index}/>
      });
      return(
      <div className="app">
          <button onClick={handleClick}>Add Animal</button>
           <div className="animal-list">{renderedAnimals}</div>
      </div>
      );
  }
  export default App ;
