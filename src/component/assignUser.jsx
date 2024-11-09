import { useState } from "react"


export const AssignUser=({gifts})=>{
    
    

    const [text,setText]=useState('')
    const [userNames,setUserNames]=useState([])
    const [values,setValues]=useState([])

    const handelChange=(e)=>{
        setText(e.target.value)
        
    }
    const handelAddUser=()=>{
        setUserNames([...userNames,text])

        setText('')
        
    }
    
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

    const handelRandom=()=>{
        const obj = userNames.reduce((acc, key, index) => {
            // if (index === 0) shuffleArray(gifts);
            acc[key] = gifts[index];
            return acc;
          }, {});
        
          setValues([...values,obj])
          console.log(values);
          
          

          console.log(values&&values[values.length-1]);
         
      
       
    }

    
    

   
   

    return <>
    
    <div className="flex gap-4 justify-center">
    <input className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 focus:from-yellow-300 focus:via-orange-300 focus:to-red-500 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-300 focus:scale-105" type="text" value={text} onChange={handelChange} />

        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded shadow-lg transform transition-all duration-300 hover:scale-105" onClick={handelAddUser}>Add User</button>

    </div>
   {
   Object.keys(values[values.length-1]) ?<div>

{Object.entries(values).map(([key, value]) => (
                <div key={key} className="p-2 m-2 bg-gray-100 rounded shadow-md">
                    <strong>{key}:</strong> {value}
                </div>
            ))}

   </div>: <div className="">
   {
   
        userNames&&userNames.map((elm,i)=>{
            return <div key={i+2} className="" >
                <div className=" border border-black-2px  flex justify-center gap-5 p-2  ">
                <div  className="text-2xl font-mono">{elm}</div>
                <div className="text-xl font-light">No Gifts Assighn Yet</div>
                </div>
            </div>
        })
        
     
    
   }
</div>
   }
   

    <div>
        <button onClick={handelRandom} className="p-2 text-xl bg-red-400 rounded-md">Random Gifts</button>
    </div>
    </>
}