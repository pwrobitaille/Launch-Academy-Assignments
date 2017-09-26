import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: []
    }
  }

  componentWillMount(){
    this.reinitState()
  }

  reinitState(){
    this.setState ({
      recipe: "",
      recipes: []
    })
  }

  getRandomRecipe(){
    this.reinitState()
    fetch('/api/v1/random-recipe')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        const nextRecipe = body
        this.setState({recipe: nextRecipe})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getAllRecipes(){
    this.reinitState()
    fetch('/api/v1/recipes')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
      }
    })
      .then(response => response.json())
      .then(body => {
        const allRecipies = body
        this.setState({recipes: allRecipies})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {handleRandomClick}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />

        <div className="buttons">
          <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

          <button onClick={handleIndexClick} className="btn">See All Recipes</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
