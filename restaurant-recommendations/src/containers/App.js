import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'
import ReviewForm from '../components/ReviewForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id,
      name: '',
      rating: '',
      content: ''
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeRating = this.handleChangeRating.bind(this)
    this.handleChangeReview = this.handleChangeReview.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {

    event.preventDefault()
    let newId = this.state.reviews.length + 1
    let newReview = {
      key: newId,
      restaurant_id: this.state.selectedId,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    let newReviews = this.state.reviews.concat(newReview)

    this.setState({reviews: newReviews, name: '', rating: '', content: ''})
  }

  handleChangeName(event){
    let newName = event.target.value
    this.setState({name: newName})
  }

  handleChangeRating(event){
    let newRating = event.target.value
    this.setState({rating: newRating})
  }

  handleChangeReview(event){
    let newReview = event.target.value
    this.setState({content: newReview})
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  render() {

    let restaurantComponents = restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
            <ReviewForm
              selectedId={this.state.selectedId}
              review={this.state.content}
              name={this.state.name}
              rating={this.state.rating}
              handleChangeName={this.handleChangeName}
              handleChangeRating={this.handleChangeRating}
              handleChangeReview={this.handleChangeReview}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
