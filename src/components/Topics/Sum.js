import React, {Component} from 'react';

export default class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleFirstChange(val){
        this.setState({
            number1: val
        })
    }
    handleSecondChange(val){
        this.setState({
            number2: val
        })
    }
    handleClick(n1,n2){
        let num1 = parseInt(n1, 10);
        let num2 = parseInt(n2, 10);
        let added = num1 + num2;

        this.setState({
            sum: added,
            number1: 0,
            number2: 0
        })
        
    }

    render() {
        return(
            <div className='puzzleBox sumPB'>
                <h4> Sum </h4>
                <input value={this.state.number1} className='inputLine' onChange={(e) => this.handleFirstChange(e.target.value)} />
                <input value={this.state.number2} className='inputLine' onChange={(e) => this.handleSecondChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.number1,this.state.number2)}> Add </button>
                <span className='resultsBox'> Sum: {this.state.sum}  </span>
            </div> 
        )
    }   
}