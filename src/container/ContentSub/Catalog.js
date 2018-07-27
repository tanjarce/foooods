import React, { Component } from 'react';
import * as Foods from '../../services/FoodAPI';
import Card from './SubContainer/Card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../Action/actionCreatores'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import uniqid from 'uniqid';
import LoadingScreen from './LoadingScreen'

class Catalog extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      foods : [],
      startDate: moment(),
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this)
  }
  handleInputSearchChange(e){
    this.setState({input: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.input.trim() !== '') {
      this.setState({loading: true})
      Foods.fetchFood(this.state.input)
      .then(({hits}) => {
        const copyfoods = hits.map(food => food.recipe)
        this.setState(()=>({
          foods: copyfoods,
          loading: false
        }))
      })
    }

  }
  handleChange(test, date) {
    this.setState({
      startDate: date
    });
  }

  handleClick(i){
    const id = uniqid.time();
    this.props.addtocart({
      id,
      datePicked: this.state.startDate.format('L'),
      ...this.state.foods[i]
    })
  }

  componentDidMount(){
    Foods.fetchFood('seafood')
    .then(({hits}) => {
        const copyfoods = hits.map(food => food.recipe)
        this.setState(()=>({
          foods: copyfoods,
          loading: false
        }))
    })
  }

  render() {
    const cards = this.state.foods.map((food, i) => {
      const id = uniqid.time()
      return(
        <Card 
          key={`${food.label.replace(/\s/g,'')}-${id}`} 
          info={food} 
          addtocart={this.props.addtocart}  
        />
      )
    })
    return (
      <React.Fragment>
        <div className="searchInput">
          <form onSubmit={this.handleSubmit}>
            <input 
              onChange={this.handleInputSearchChange} 
              type="text" value={this.state.input}
              placeholder="Search Food..."
              
              />
          </form>
        </div>
        {
          this.state.loading
          ? 
            <LoadingScreen loading={this.state.laoding} />
          : cards.length 
            ? cards
            : (<h1 className="notFoundScreen">Walang Ganan!</h1>)
        }
      </React.Fragment>

    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}


export default connect(null, mapDispatchToProps)(Catalog);