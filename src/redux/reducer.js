import Todo from "../component/Todo";
import * as types from "./actionType"

    const initialState={
        count:0,
        todo:[],
        isLoading:false,
        isError:false
    }

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        default:return oldState;
        
case types.ADD:return{...oldState,count:oldState.count+payload}

case types.REDUCE:return{...oldState,count:oldState.count-payload}

case types.GET_TODO_REQ:return {...oldState,isLoading:true,isError:false}
case types.GET_TODO_SUCC:return {...oldState,isLoading:false,todo:payload}
case types.GET_TODO_FAILURE:return{...oldState,isLoading:false,isError:true}
case types.UPDATE_TODO:
    return {
        ...oldState,
        isLoading: false,
        isError: false,
        todo: oldState.todo.map((elm) => 
            elm.id === payload.id 
            ? { ...elm, ...payload } // Update the matched todo with new payload data
            : elm // Keep the rest unchanged
        ),
    };

    case types.ADD_TODO:
        console.log(payload,'payload in reducer');
        
    return {...oldState, todo: [...oldState.todo, payload]}
}
}

export {reducer}