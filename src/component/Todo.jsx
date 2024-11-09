

import React, { useEffect, useState } from 'react'
import { AddTodoFn, getTodo, updateTodo } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'




const Todo = () => {
    const[text,setText]=useState({
      titel:"",
      author:"",
      status:false
    })

   
const dispatch=useDispatch()
    
    const data=useSelector((store)=>{
      return {data:store.todo,isLoading:store.isLoading,isError:store.isError}
    })

   useEffect(()=>{
  dispatch( getTodo())
   },[])

   
const handelToggel=(id,status)=>{
 const newStatus=status?false:true
    
    dispatch(updateTodo(id,newStatus))
}

const handelAddTodo=(e)=>{
  const {name, value}=e.target


   setText({
   ...text, [name]:value
   })

   
   
 
}

const handelSubmit=()=>{
  dispatch(AddTodoFn(text))
 
  
}

  return (
   <div>

    <input placeholder="Intput Todo's" value={text.titel} name='titel'  onChange={handelAddTodo}/>
    <input placeholder= "Enter Author's name" value={text.author} name='author' onChange={handelAddTodo}></input>
    <button onClick={handelSubmit} >Submit</button>

<div className="flex flex-wrap  items-center justify-center gap-10 p-5">
    {
      data?.data?.length > 0 && data.data.map((elm, i) => {
        return (
          <div 
            className="bg-white shadow-md  p-6 rounded-lg border border-gray-200 flex flex-col items-center w-64" 
            key={elm.id}
          >
            <h1 className="text-xl font-semibold text-gray-800 mb-2">{elm.titel}</h1>
            <h2 className="text-sm font-medium text-gray-600 mb-2">Author: {elm.author}</h2>
            <h3 className={`text-sm mb-4 ${elm.status ? "text-green-600" : "text-red-600"}`}>
              {elm.status ? "Completed" : "Not Completed"}
            </h3>
            <div className="flex border border-gray-300 p-4 gap-4 justify-center items-center rounded-lg bg-white shadow-lg">
  <button
    className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md flex items-center justify-center min-h-[28px] text-[11px]"
    onClick={() => handelToggel(elm.id, elm.status)}
  >
    Toggle  status
  </button>

  <button
    className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 shadow-md flex items-center justify-center min-h-[48px] text-[11px]"
    onClick={() => handelDel(elm.id)}
  >
    Delete
  </button>
</div>


          </div>
        );
      })
    }
  </div>
   </div>
  
  )
}

export default Todo