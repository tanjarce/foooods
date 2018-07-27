import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';



class LoadingScreen extends Component {
    render() { 
        const loadcards = Array(5).fill('').map((card, i)=>{
            return(
            <div className="cardContainer__loading" key={i}>
                <div className="cardContainer__loading-Image" >
                    <PulseLoader
                    size={7}
                    margin={'5px'}
                    color={'#0000003f'} 
                    loading={this.props.loading} 
                    />
                </div>
                <div className="cardTextContainer__loading">
                    <div className="title"></div>
                    <div className="source"></div>
                </div>
                <hr/>
                <div className='addToCartControls__loading'></div>
            </div>
            )
        })


        return (
            loadcards
        );
    }
}
 
export default LoadingScreen;