import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super();

        this.state={
            unFilteredArray: ['John','Jill','Joel','Erika','Adam','Alex','Brady','Paige','Jana','Bryan'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    handleClick(letters){
        let names = this.state.unFilteredArray;
        let newArray = [];

        for(let i = 0; i < names.length; i++){
            if(names[i].startsWith(letters)){
                newArray.push(names[i])
            }
        }

        this.setState({
            filteredArray: newArray,
            userInput: ''
        })

    }
    render() {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterStringRB'> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div> 
        )
    }   
}