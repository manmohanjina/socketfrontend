

//only run a function when the even handeler is done or after a certain time:-

import { useRef } from "react";



export const Debounce=()=>{
let timeOutId=useRef(null)
    const handelClick=()=>{
        //only make a api call after 3 sec

        //first we need to clear interval for the first cycle
        //at first click the timeOutId.current value is null, and if the user is makeing multiple call clearTimeout is running, so in this the previous timeout is getting cleared and after that a new id has been saved
        clearTimeout(timeOutId.current)

      timeOutId.current= setTimeout(()=>{
            console.log('API called');
            
        },2000)

    
        
    }

    //we can use same functionality by using clouser as well.

    const handleClick = (() => {
        let timeoutId;
        console.log(timeoutId, 'start');
    
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
    
            timeoutId = setTimeout(() => {
                console.log('Make an API call');
            }, 2000);
    
            console.log(timeoutId, 'end');
        };
    })();
    

    return <div>
        <button onClick={handleClick}>Click me</button>
    </div>

}