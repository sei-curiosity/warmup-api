import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


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
     event.preventDefault()
    // get the formData from state
    const copyFormData = {...this.state.formData}
    /// take the input of form 
    const input = copyFormData.name;
    // Axios
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=CLNh2lk5k8r0D3gH7L0xrYlv4ktLBUcM&q=${input}&limit=1&offset=0&rating=G&lang=en`)
    .then(response => {
      const imageId = response.data.data[0].id
      const url = response.data.data[0].images.fixed_height.url
      const image = {
        id: imageId,
        imageUrl: url
      }
      // copy of the images state 
      const copyImages = [...this.state.images]
      // const copyIamges = this.state.images.slice()
      copyImages.push(image)
      // [{id:'3323dsf',imageUrl:'http://'}]
      this.setState({
        images:copyImages
      })
     
    })
    .catch(error => (console.log(error)))
    //++ push our formData into the images copy
    
  }

 /// function for delete the element from the array by use the id
  deleteImages = (id) =>{
   // copy the images from state 
    let copyImages = [...this.state.images]
    copyImages = copyImages.filter((image) => (image.id != id))

   // filter the array of images then remove the movie which has the same 'id' 
   this.setState({
     images:copyImages
   })

   
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


        {this.state.images.map( (image,index) => (
          <div key={index}>
            <img src={image.imageUrl} alt= "" ></img>
            <br/>
        <button onClick={() => this.deleteImages(image.id)}>Delete</button>
            <hr/>
            </div>
        ) )}
      

        
       

      </div>
    );
  }
}


export default App;
