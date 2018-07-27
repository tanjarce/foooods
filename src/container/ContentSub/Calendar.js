import React, { Component } from 'react'
import Card from './SubContainer/Card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../Action/actionCreatores'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment'

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: '',
      end: ''
    }
    this.handleEvent = this.handleEvent.bind(this)
  }
  handleEvent(event, picker) {
    console.log(picker.startDate);
    console.log(picker.endDate);
    this.setState({
      start: picker.startDate.format('L'),
      end: picker.endDate.format('L')
    })

  }
  render() {
    const { start, end } = this.state;
    const cards = 
      // kapag walang naka lagay sa datepicker filter
      (!start && !end)
        ? this.props.cart.map(food => {
          return(
            <Card key={`${food.id}`} info={food}>
              <button onClick={this.props.removetocart.bind(null, food.id)}>Remove</button>
            </Card>
          )
        })
        : this.props.cart
          .filter(food =>  food.datePicked >= start && food.datePicked <= end)
          .map(food => {
            return(
              <Card key={`${food.id}`} info={food}>
                <button onClick={this.props.removetocart.bind(null, food.id)}>Remove</button>
              </Card>
            )
          })
    return (
      <React.Fragment>
        <div className="searchInput">
          <DateRangePicker 
            onApply={this.handleEvent } 
            startDate={start || moment().format('L')} 
            endDate={end || moment().format('L')}>
            <button>{`${start || 'Start Date'} - ${end || 'End Date'}`}</button>
          </DateRangePicker>
        </div>
        {cards.length ? cards : <h4>Empty...</h4>}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    cart: state.cart 
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);