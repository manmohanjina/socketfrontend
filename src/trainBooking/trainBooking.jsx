import { useSelector } from "react-redux"
import { rawTrainsData } from "../rawData"
import { useState } from "react"
export const TrainBooking=()=>{

const [userSelectDate,setUserSelectDate]=useState('')

const handelSelectDate=(e)=>{
    console.log(e.target.value);
    let newDate=new Date(e.target.value)

    
    console.log(new Date(rawTrainsData[0]));
    
}

    return <div>


        <h2>Train Booking app</h2>

        <input type="date" onChange={handelSelectDate} placeholder="select Date of your journey"/>
    </div>
}