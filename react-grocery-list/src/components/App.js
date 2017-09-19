import React from 'react';
import GroceryList from './GroceryList';
import Grocery from './Grocery'



const App = props => {
  let groceryData = [
    {id: 1, name: "Oranges"},
    {id: 2, name: "Bananas"},
    {id: 3, name: "Bread"}
  ];

  let buttonClick = (event) => {
    alert(`Button was clicked`)
  }


  return(
      <GroceryList
        groceries={groceryData} handleButtonClick={buttonClick}/>
  );
};

export default App;
