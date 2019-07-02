import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import TicketForm from './components/TicketForm'

class App extends React.Component{

  render(){
    console.log(this.props)
    return (
      <BrowserRouter>
        <div>
          <h1> Ticket Master </h1>
              <TicketForm/>
        </div>
      
      </BrowserRouter>
   )
}
}
const  mapStateToProps = (state) => {
  return{
    tickets : state.tickets
  }
}

  
  
export default  connect(mapStateToProps)(App)
