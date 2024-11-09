
//first we need to take input from the user to decide the number of grid layout they wish to play on

import { useState } from "react"
import { GameGrid } from "./grid";


export const UserInput=()=>{

    const [gridValue, setGridValue]=useState(0)

    
    


    return<div>
        <h2 className="text-blue-600 font-mono border-lime-200 ">Memory Game</h2>

        <input className="border border-red-100 p-2 bg-slate-500 rounded-lg" type="number" placeholder="enter the number of grid you wish to have" onChange={(e)=>setGridValue(e.target.value)}  />
        

        <GameGrid gridValue={gridValue}></GameGrid>
    </div>
}