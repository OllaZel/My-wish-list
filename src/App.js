import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {

const [list, setList] = useState(data);

const removeItem = (id) => {
  let newList = list.filter(item => item.id !== id)
  setList(newList);
}


  return (
    <div className='container'>
      <div className='container'>
        <h1> My Wish List - {list.length} gifts</h1>
      </div>
      
      {list.map((gift => {
        const {id, name, image, price} = gift;
        return(
          <div key={id} className='container'>
            <h2>{name}</h2>
            <img src={image} width="300px" alt="foto"/>
            <p>{price}</p>
            <div>
            <button onClick={() => removeItem(id)}>remove</button>
            </div>
          </div>
        )
      }))}

    <div className='container'>
      <button className='delete' onClick={() => setList([])}>delete all</button>
    </div>  
    </div>

    
  );
}

export default App;
