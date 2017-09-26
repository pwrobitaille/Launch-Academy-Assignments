import React from 'react'

const ReviewForm = props =>{

  return(
    <form value={props.selectedId} onSubmit={props.handleFormSubmit}>
      <label>Name</label>
      <input onChange={props.handleChangeName} type="text" value={props.name} />
      <label>Rating</label>
      <input type="text" onChange={props.handleChangeRating} value={props.rating}/>
      <label>Review (1 to 5 stars)</label>
      <textarea type="comment" onChange={props.handleChangeReview} value={props.review}/>
      <input type="submit" value="Add to List" />
    </form>
  )
}
export default ReviewForm

// make ReviewForm stateful/class syntax
// track the value of each of the fields in state
// make sure that the value of each input field (e.g. name, rating, etc) is being set by props given from the stateful ReviewForm
