import React, { useState } from 'react'
import './styles/list.scss'
import { findAllByTitle } from '@testing-library/react'
import Listid from './listid'
export default function List(props) {
    

    const {todolist, ondeletehandeler, onchangehandler, aa} = props
    


const [state, setState] = useState({
    editing : false,
    data : ""
})

const handleChange = (e) => {
    setState({
      data : e.target.value
    })
  }

 
  const item = todolist.map(item => (<div key = {item.todoId}><Listid title = {item.title} ondeletehandeler = {ondeletehandeler} ID = {item.todoId} onchangehandler = {onchangehandler}/></div>))
 
    
    return (
        
         <div className = 'liststyle'>  
            {item}
        </div>
             
             
            
    )
}
