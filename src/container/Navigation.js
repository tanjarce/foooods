import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends Component {
  componentDidUpdate(){
    console.log('hi')
  }
  render() {
    console.log(this.props.cartLength)
    return (
      <div className="navigation">
        <div className="navigation_holder">
          <h3 className="title">Foooooooooods!</h3>
          <div className="navigation_link">
            <Link to="/catalog">Catalog</Link>
          </div>
          <div className="navigation_link">
            <Link to="/calendar">Calendar</Link>
            {
              (this.props.cartLength > 0)
              ? <span className="cartlength-pop">{this.props.cartLength}</span>
              : '' 
            }
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  const cartLength = state.cart.length  
  return {
    cartLength
  }
}
export default connect(mapStateToProps, null)(Navigation);