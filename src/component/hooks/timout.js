import { useEffect, useState } from "react"


 export const useTimeout=(sec)=>{

    
    

    const [state,setState]=useState(false)

    useEffect(()=>{

        let id=setTimeout(()=>{
setState((prev)=>!prev)
        },sec)

        return()=>clearTimeout(id)
    },[])
return state

}