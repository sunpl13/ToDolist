import React, { useState } from 'react'
import './styles/todo.scss'
import List from './list'
import Listid from './listid';

let id = 0;
export default function Todo(props) {

 
     const [state, setstate] = useState({
         hobby:'',
         todo : []
     })

     const {todo, hobby} = state

    const oc = (e) => {   
         setstate({
             ...state,
             hobby : e.target.value
         })
     }

     const add = () => {
        setstate({
            ...state,
            todo : todo.concat({title:hobby, todoId:id++, todobool:false}),
            hobby : ''
        })

     }
   


     const ondeletehandeler = (todoId) => {
         setstate({
            ...state,
            todo : todo.filter(item => todoId !== item.todoId)
         })
        }
        
    const onchangehandler = (todoId, data) => {
        setstate({
            ...state,
            todo : todo.map(item => todoId === item.todoId ? {title:data, todoId:item.todoId} : item)
        })
    }



    return (
        <>
        <div className = 'todostyle'>
           <input
           value = {hobby}
           onChange = {oc}
           />
           <button onClick = {add}>추가</button>
           {console.log(todo)}
        </div>
        <List todolist = {todo} ondeletehandeler = {ondeletehandeler} onchangehandler = {onchangehandler}/>
        </>
    )
}