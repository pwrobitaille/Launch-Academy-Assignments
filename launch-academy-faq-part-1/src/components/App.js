import React from 'react';
import Question from './Question'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
    }
    this.setId = this.setId.bind(this)
  }

  setId(state) {
    this.setState({id: state})
  }


  render() {
    let faqs = this.props.data.map(faq => {
      let className;
      if (faq.id == this.state.id) {
        className = "visible"
      } else{
        className = "hidden"
      }

      let answerClick = () => this.setId(faq.id)

      return(
        <Question
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          showAnswer={answerClick}
          className={className}

        />
      )
    })

    return(
      <div>{faqs}</div>
    )
  }
}

export default App;
