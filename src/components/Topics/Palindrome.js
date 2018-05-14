import React, {Component} from 'react';

export default class Palindrome extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }
    handleClick(){
        let splitArray = this.state.userInput.split('');
        let reversedArray = splitArray.reverse();
        let joinedArray = reversedArray.join('')
        let result = '';

        if(joinedArray === this.state.userInput){
            result = 'true'
        } else {
            result = 'false'
        }

        this.setState({
            palindrome: result,
            userInput: ''
        })
    }

    render() {
        return(
            <div className='puzzleBox palindromePB'>
                <h4> Palindrome </h4>
                <input value={this.state.userInput} className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}> Check </button>
                <span className='resultsBox'> Palindrom: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div> 
        )
    }   
}