import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import uniqid from 'uniqid' 

class AddToCartControls extends Component {
    constructor(props){
        super(props);
        this.state = {
          startDate: moment(),
          showConfirmation: false,
          overflow: 'hidden'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.showConfirmation = this.showConfirmation.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
      }
      showConfirmation(){
          this.setState({
              showConfirmation: true
          })
              setTimeout(
                  ()=>{
                      this.setState({overflow: 'visible'})
                  }, 500
              )
      }
      handleClickCancel(){
        this.setState({
            overflow: 'hidden',
            showConfirmation: false,
        })
      }
      handleChange(test, date) {
        this.setState({
          startDate: date
        });
        console.log(test, date.format('L'))
      }
    
      handleClick(){
        const id = uniqid.time();
        this.props.addtocart({
          id,
          datePicked: this.state.startDate.format('L'),
          ...this.props.info
        })
      }
    render() { 
        const { showConfirmation } = this.state;
        
        return (
            <div className='addToCartControls'>
                <div className={showConfirmation ? 'addToCartControls__con-show' : 'addToCartControls__con' }
                    style={{overflow: this.state.overflow}}
                >
                    <span onClick={this.showConfirmation} className={showConfirmation ? 'addToCartControls__label-hide' : 'addToCartControls__label'}>Add To Cart</span> 
                    <div className={showConfirmation ? 'addToCartControls__confirmationBox-show' : 'addToCartControls__confirmationBox'}>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange.bind(null, 'test')}
                        />
                        <div className="btnHolder">
                            <button className="btnConfirm" onClick={this.handleClick}>Confirm</button>
                            <button className="btnCancel" onClick={this.handleClickCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default AddToCartControls;