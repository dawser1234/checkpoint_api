import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import User from './User';

function UserList() {

    const [info,setinfo] = useState()
 useEffect(() => {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
       
      }) .then(function (response) {
       setinfo(response.data)
         console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
      
 }, [])
 
   
    
  return (
    <div className='caaa'>
    {info&&info.map((el) => <User props={el} />)}
    </div>
  )
}

export default UserList