import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Location from '../components/Location'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: name
    }
    this.crossOut = this.crossOut.bind(this)
  }

  crossOut(id) {
    this.setState({id: id})
  }

  render() {
    let destinations = this.props.data.places.map((destination) => {
      let className;
      if(destination.id === this.state.id) {
        className = "cross-out"
      } else {
        className = ""
      }

      let locationClick = () => this.crossOut(destination.id)

      return(
        <Location
          id={destination.id}
          key={destination.id}
          name={destination.name}
          handleCross={locationClick}
          className={className}
        />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            {destinations}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
