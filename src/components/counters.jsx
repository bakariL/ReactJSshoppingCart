import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    //state is private and loacl to this class
    state = {
        //an array of object. 
        counters: [
            { id: 1, value: 2 },
            { id: 2, value: 4 },
            { id: 3, value: 1 },
            { id: 4, value: 3 }
        ]
    };

    handleIncrement = counter => {
        //clones the array above
        
        const conters = [...this.state.counters];
        conters[0].value++;
    };

    handleDelete = counterId => {
        console.log("called", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters})
    };

    handleReset = () => {
       const counters= this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };

    render() { 
        return ( 
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primamry btn-sm m-2"
                >
                    Reset</button>
                {/* get each counter an map it to a counter component. and set the key property */}
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        value={counter.value}
                        id={counter.id} >
                        <h4>Couunter #{counter.id}</h4>
                    </Counter>
                    )}
            </div>

         );
    }
}
 
export default Counters;