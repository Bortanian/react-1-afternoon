import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
            {
                name: 'Harry',
                height: '6ft',
                age: 26
            },
            {
                name: 'Darth',
                legs: 3,
                fur: 'Brown',
                dog: true
            },
            {
                name: 'Sky',
                legs: 4,
                fur: 'White',
                cat: true
            },
            {
                name: 'Soda',
                brand: 'Pepsi',
                flavor: ['Mountain Dew', 'Pepsi', 'Dr.Pepper'],
                food: true
            },
            {
                height: '20ft',
                age: 5000,
                legs: 8,
                eyes: 20,
                monster: true
            }
        ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    handleClick(prop){
        let things = this.state.unFilteredArray;
        let newArray = [];

        for(let i = 0; i < things.length; i++){
            if(things[i].hasOwnProperty(prop)){
                newArray.push(things[i]);
            }
        }
        this.setState({
            filteredArray: newArray,
            userInput: ''
        })
    }


    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' value={this.state.userInput} onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div> 
        )
    }   
}