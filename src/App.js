
import React from 'react';
import './App.css';
import { Button} from './component/button';
import { Split } from './component/split';
import ProductItems from './component';


function App() {
  return (
    <>
  <div className='App'>
   {/* <Button  border='2px solid blue' color='blue'></Button>
   <Button label='Secondary' border='2px solid grey' color='grey' ></Button>
   <Button label='Success' border='2px solid green' color='green'></Button>
   <Button label='Danger' border='2px solid tomato' color='tomato'></Button>
   <Button label='Warning' border='2px solid yellow' color='yellow'></Button>
   <Button label='Info' border='2px solid blue' color='blue'></Button>
   <Button></Button>
   <Split></Split> */}
   <ProductItems></ProductItems>
   <ProductItems></ProductItems>
   <ProductItems></ProductItems>
   
  </div>

   



  </>
  );
}

export default App;
