import React, { useState } from 'react'


export default function Listid(props) {
 

    const {todolist, ondeletehandeler, onchangehandler, toggle, ID} = props

    const [state, setstate] = useState(false)
    
    const [data, setdata] = useState("")

    const asd = () => {
        setstate(!state)
    }

const inputhandler = (e) => {
    setdata(e.target.value)
}

    const dsa = () => {
        onchangehandler(ID, data)
        setstate(!state)
    }

    return (
        <div>
            {state ? ( <div>
                <input value = {data}
                onChange = {inputhandler}/>
                <button onClick = {dsa}>완료</button>
                </div>
                ):
                (
                    props.title
                )
                }
         <button onClick = {() => asd()}>수정</button>
         <button onClick = {() => ondeletehandeler(ID)}>삭제</button>
        </div>
    )
}