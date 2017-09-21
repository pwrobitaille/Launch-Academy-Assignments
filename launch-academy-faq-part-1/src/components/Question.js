import React from 'react'


const Question = (props) => {

  let handleClick = () => {
  props.showAnswer(props.id)}

  return (
    <div>
      <div onClick={handleClick}>
        <i className="fa fa-plus-square" aria-hidden="true">{`${props.id}`}</i>

        {props.question}</div>
        <p className={props.className} >{props.answer}</p>

    </div>
  )

}

export default Question
