
import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import Signin from './Components/Signin/Signin'
import ImageLinkF from './Components/ImageLinkF/ImageLinkF'
import Rank from './Components/Rank/Rank'
import Register from './Components/Register/Register'
import Facer from './Components/Facer/Facer'
import Particles from 'react-particles-js'

const app= new Clarifai.App({
  apiKey: '0ff12b9efaf44817aa8d850536b0d7fd '
})


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ' ',
      imageUrl:' ',
      box:{},
      route : 'signin',
      issigned : false
    }
  }
  
  calc_face_location=(data) =>{
    const cFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input_image');
    // console.log(image)
   const width = (image.width);
    const height = (image.height)
   return{
    leftCol: cFace.left_col * width,
    topRow: cFace.top_row * height,
    rightCol: width - (cFace.right_col * width),
    bottomRow: height - (cFace.bottom_row * height)
   }
  }

  displaybox = (box) =>{
    console.log(box);
    this.setState({box:box});
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonsubmit = () =>{
    this.setState({imageUrl:this.state.input});
 
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.displaybox(this.calc_face_location(response)))
    .catch(err => console.log(err)
    );
  }

  onRouteChange=(route)=>{
if(route==='signout'){
  this.setState({issigned: false})
}else if (route === 'home'){
  this.setState({issigned: true})
}

    this.setState({route:route})
  }
  
  render(){     const {issigned,route,box,imageUrl} = this.state;
    return (<div className="App">
       <Particles className='particles'
        params=
        {{
          "particles": {
              "number": {
                  "value": 220,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 5,
                  "random": true,
                  "anim": {
                      "speed": 4,
                      "size_min": 0.3
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "size": 0,
                      "opacity": 0
                  },
                  "repulse": {
                      "distance": 400,
                      "duration": 4
                  }
              }
          }
      }} />
     <Navigation issigned={issigned} onRouteChange={this.onRouteChange} />
      { route === 'home'
       ?<div> 
        <Logo/>
        <Rank/>
        <ImageLinkF 
        onInputChange={this.onInputChange} 
        onButtonsubmit={this.onButtonsubmit}
        />  
        <Facer box={box} imageUrl={imageUrl}/>
        </div>
      :( route === 'signin'
      ?  <Signin onRouteChange={this.onRouteChange}/>
      :  <Register onRouteChange={this.onRouteChange}/>   
       )
       }
    </div>
    );}}


export default App;



 