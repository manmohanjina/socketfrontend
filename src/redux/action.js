//action function
import axios from "axios"
import * as types from "./actionType"
import { useDispatch } from "react-redux"

export const handelAdd=(payload)=>{
return {type:types.ADD,payload}
}

export const handelReduce=(payload)=>{
    return {type:types.REDUCE,payload}
}

const setTodoInRedux=(payload)=>{
    console.log(payload,'payload');
    
    return {type:types.GET_TODO_SUCC,payload}
}
const getTodoReq=()=>{
    return{type:types.GET_TODO_REQ}
}

export const getTodo = () => {
    return async (dispatch) => {
        dispatch(getTodoReq())
      try {
        let serverData = await axios.get('http://localhost:8080/todos');
        
        // Dispatch the action to set the fetched data in Redux
        dispatch(setTodoInRedux(serverData.data));
        
      } catch (error) {
        console.log(error, 'error while fetching the data');
      }
    };
  };

  const todoUpdate=(payload)=>{

    
    return {type:types.UPDATE_TODO,payload}
  }


  export const updateTodo=(id,newStatus)=>{
    return async(dispatch)=>{
      try {
        let updateStatus=  await axios.patch(`http://localhost:8080/todos/${id}`,{
            status:newStatus
            })

            dispatch(todoUpdate(updateStatus.data))
          
            } catch (error) {
                console.log(error,'error while updateing');
                
            }
    }
  }

  const ADD_TODO=(payload)=>{
    return {type:types.ADD_TODO,payload}
  }

  export const AddTodoFn=(new_data)=>{
  //  console.log(new_data,"new_data");
    
    return async(dispatch)=>{

       try {
        let newTodo=await axios.post('http://localhost:8080/todos',new_data)

        dispatch(ADD_TODO(newTodo.data))

       // console.log(newTodo,'newTodo');
        
       } catch (error) {
        console.log(error,'error while adding new Todo');
        
       }
    }
  }