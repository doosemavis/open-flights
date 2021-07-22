import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airlines = () => {
     const [ airlines, setAirlines ] = useState([])

     useEffect( () => {
          // get all of our airlines from API
          // update airlines in  our state

          axios.get('/api/v1/airlines.json')
          .then( resp => {
               setAirlines(resp.data.data) 
          })
          .catch( resp => console.log(resp) )
     }, [airlines.length] )

     const list = airlines.map( item => {
          return ( <li key={ item.attributes.name }>{ item.attributes.name }</li> )
     })


     return (
          <div className="home">
               <div className="header">
                    <h1> Open Flights </h1>
                    <div className="subheader"> Honest, unbiased airline reviews. </div>
               </div>
               <div className="grid">
                    <li>{ list }</li>
               </div>
          </div>
     )
}



export default Airlines;