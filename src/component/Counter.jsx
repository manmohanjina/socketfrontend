import { useDispatch, useSelector } from "react-redux"
import { handelAdd,handelReduce} from "../redux/action"

export const CountComponent=()=>{
const count=useSelector((reduxStore)=>reduxStore.count)
const dispatch=useDispatch()
const addHandeler=()=>{
  dispatch(handelAdd(1))
}
const reduceHandeler=()=>{
    dispatch(handelReduce(1))
}

    return <div>

        <h1>{count}</h1>
        <button onClick={addHandeler}>ADD</button>
        <button onClick={reduceHandeler}>REDUCE</button>
    </div> 
}