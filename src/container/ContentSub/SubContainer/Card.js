import React, {Component} from 'react'
import AddToCartControls from './AddToCartControls';

class Card extends Component {
    render() { 
        return (  
            <div className="cardContainer">
                {this.props.info.datePicked}
                <div className="cardImageContainer">
                    <img className="img" width='100%' src={this.props.info.image} alt={this.props.info.label}/>
                </div>
                <div className="cardTextContainer">
                    <h1 className="cardLabel"><a href={this.props.info.shareAs} target="_blank">{this.props.info.label}</a></h1>
                    <h5 className="cardSource">{this.props.info.source}</h5>
                </div>
                {
                    this.props.children && this.props.children
                }
                {
                    /* kapag nasa calendar/cart di marerender */
                    !this.props.info.datePicked && 
                    <React.Fragment>
                        <hr/>
                        <AddToCartControls addtocart={this.props.addtocart} info={this.props.info}/>
                    </React.Fragment>

                }
            </div>
        );
    }
}

export default Card;