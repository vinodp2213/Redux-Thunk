import axios from 'axios'
// add

export const addTicket =(ticket)=>{
     
    return {
         type : 'ADD_TICKET',
         payload : ticket
    }
}

export const startAddTicket = (formData) => {
    console.log('start add ticket called')
      return (dispatch)=> {
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=62aa256297352c2d',formData)
                 .then(response => {

                     //dispatch to the redux store
                      dispatch(addTicket(response.data))
            })
            .catch(err=> {
                 console.log(err)
             })   
      }
}

export const setTickets = (tickets)=> {
     return {
         type : 'SET_TICKETS',
         payload : tickets
     }
}

export const startGetTickets = ()=> {
    return(dispatch)=> {
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=62aa256297352c2d')
         .then(response=> {
           dispatch(setTickets(response.data))
         })
}  
}
