import React, { Component } from 'react';

class Counter extends Component {
    //adding property here. its an object that incldues any data that this component needs
    // state = {
    //     value: this.props.value,
    //     tags: [],
    // };

    // //constructor. when a object of this type is created. this is ONE way to BIND Event Handlers. old way of doing it. but works. just have to do it for every event handler
    // constructor() {
    //     super();//calls the constructor of the parent class Component. called the base constructor. 
    //     this.handleIncrement.bind(this);//create a new instance of the handleincreatement function. 
    // }
        
        
    //functions go here. in JS functions are object. so that means they have properties. 
    // renderTags() {
     //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

       // return <ul> {this.state.tags.map(tag => <li key={tag}> {tag}</li>)}</ul>;
    //}
    
    //this is binding event handlers to "this" using arrow functions. (this is way is preferred. but it runnint into error use the constructor way on around like 12)
    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1 });
    // };
    
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 })
    // };

    render() { 
        //every react component has a property called props.includes all the attriubtes in the other component (counters in this case) so 
        console.log( this.props);

        //use let when you want to change the varible
        //use const when the varible will wont chanage
  
        //taking a string a mapping to to plain js object. this prints out list of items in react. 
        //every item must have a key.the key in noramlly an id. 
        return ( 
            <div>
                {this.props.children}
              
                <button
                    //arrow function to pass product or any parm though on event handler. 
                    onClick={ () => this.props.onIncrement(this.props.counter)}
                    // onClick={this.doHandleIncrement}.....non inine way of passing something through on event handler. see commented out cuntions "do hangle incremnt" above
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>  
                <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                {/* {this.state.tags.length === 0 && ' Please create a new tag '} */}
              
            </div>
         );
    }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     //couunt ===0 then append warning if not append primatry....so it'll be badgge-warning or badge--primary
    //     classes += (this.state.value === 0) ? "warning" : "primary";
    //     return classes;
    // }

    //add a method in this class
    formatCount() {
        //pikc the count property. and storing it in a const
        const { value } = this.props.counter;
        //if count is === 0 return 'zero' otherwise this.state.count
        //return this.state.count === 0 ? 'Zero' : this.state.count;

        //better way to write it. becuase the line above as repeated code. The line below uses destructuring. 
        return value === 0 ? 'Zero' : value;
    };

    //styles go at the bottom. or top.
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    }
}
 //always export compontent. 
export default Counter;    