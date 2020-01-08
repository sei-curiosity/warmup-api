import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    images: [],
    formData: {
      name:''
    }
  }

  handleChange = (event) => {
    // to get the value from input
      const userInput = event.target.value;
     // get which input they typed in
     const inputName = event.target.name;
     // copy the state of formData
     const formDataCopy = {...this.state.formData}
     // update the key in formDataCopy with new value
     formDataCopy[inputName] = userInput
     // set the state with the update formDataCopy
     this.setState({
      formData: formDataCopy
     })
  }


  handleSubmit = (event) => {
    // not reload the page
    // prevent default action
    
    // get the formData from state
    
    // copy of the images state 
    
    //++ push our formData into the images copy
    
  }

 /// function for delete the element from the array by use the id
  deleteImages = (id) =>{
   // copy the images from state 
 
   // filter the array of images then remove the movie which has the same 'id' 
   

   
  }

  render(){
    
    return (
      <div className="App">
        <form  onSubmit={this.handleSubmit}>
          
          <label>Name: </label>
            <input 
            name="name"
            value={this.state.formData.name}
            placeholder="Enter your Name"
            onChange={this.handleChange}
            ></input>
          <br/>

          <button type="submit">Submit</button>
        </form>




        
       

      </div>
    );
  }
}


export default App;
