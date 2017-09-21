import React from 'react'

const Location = props => {
  return(
    <ul onClick={props.handleCross} className = {props.className}>{props.name}</ul>
  )
}




export default Location
