import React from 'react';
import ReactDOM from 'react-dom';
import LocationTracking from './LocationTracking';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={lotitude:null}

    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({latitude :position.coords.latitude})},
      (error)=> {this.setState({error_message:error.message})});
    
  }

  render(){
   if(this.state.error_message && !this.state.latitude) {
    return <div>error:{this.state.error_message}</div>
   }
  if(!this.state.error_message && this.state.latitude){
    return <LocationTracking  latitude={this.state.latitude}/>
  }
  else{
      return <div>waiting for user permission</div>
  }  
  }
  
  
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')

)