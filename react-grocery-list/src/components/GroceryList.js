import React from 'react';
import Grocery from './Grocery';


const GroceryList = props => {

  let list = props.groceries.map(item => {
    return(
        <Grocery
          key={item.id}
          item={item.name}
          click={props.handleButtonClick}
        />
    );
  })

      return(
        <div>
          <h1>Grocery List</h1>
          <ul>
            {list}
          </ul>
        </div>
      )
  }







export default GroceryList
