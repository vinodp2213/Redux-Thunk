import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { startAddTicket} from '../redux/actions/tickets'

class TicketForm extends React.Component{
     constructor(){
        super()
        this.state = {
            name :'',
            department:'',
            message:'',
            priority:''
   
        }

     }

     handleNameChange = (e)=> {
         const name = e.target.value
         this.setState(()=> ({name}))
     }
     handleDepartmentChange = (e)=> {
         const department = e.target.value
         this.setState(()=> ({department}))
     }
     handlePriorityChange = (e)=> {
         const priority = e.target.value
         this.setState(()=> ({priority}))
     }
      handleMessageChange = (e)=> {
          const message = e.target.value
          this.setState(()=> ({message}))
      }
      handleSubmit=(e)=> {
          e.preventDefault()
          const formData={
               name : this.state.name,
               department : this.state.department,
               priority : this.state.priority,
               message : this.state.message
          } 


          console.log(formData) 
          //first approach
        //   axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=62aa256297352c2d',formData)
        //    .then(response => {
        //        console.log(response.data)
             
        //        this.setState (()=> ({
        //            name :'',
        //            priority :'',
        //            department:'',
        //            message:''
        //        }))  

        //        //dispatch to the redux store
        //        this.props.dispatch(addTicket(response.data))
        //    })
        //    .catch(err=> {
        //        console.log(err)
        //    })

        // 2nd approach - actions make api calls
          this.props.dispatch(startAddTicket(formData))
        } 
     render(){
          
         return (
             <div>
                 <h2> Add Ticket</h2>
                 <form onSubmit= {this.handleSubmit}>
                  <label>
                      Name 
                      <input type ="text" value = {this.state.name} onChange = {this.handleNameChange}/>
                  </label> <br/>

                  <label>
                       Department
                        <select value = {this.state.department} onChange= {this.handleDepartmentChange}>
                          <option> select</option>
                          <option value ="Technical"> Technical</option>
                          <option value ="Sales"> Sales</option>
                          <option value ="Hr">HR</option>
                        
                        </select>

                  </label><br/>

                    
                  <label>
                       Priority
                       <select value = {this.state.priority} onChange= {this.handlePriorityChange}>
                          <option> select</option>
                          <option value ="High"> High</option>
                          <option value ="Medium"> Medium</option>
                          <option value ="Low">Low</option>
                        
                        </select>
                       
                  </label><br/>

                  <label>
                     Message 
                     <textarea value = {this.state.message} onChange= {this.handleMessageChange}/>
                  </label><br/>

                  <input type ="submit"/>
                  </form>
                  
             </div>
         )
     }
    }

export default connect()(TicketForm)