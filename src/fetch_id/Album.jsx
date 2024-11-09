
import  { useEffect, useState } from 'react'

const url="https://jsonplaceholder.typicode.com/photos"



const Album = () => {
    const [data,setData]=useState([])
 const getData=async(url)=>{


    try {
let data=await fetch(url)
data=await data.json()
setData(data)

    } catch (error) {
        console.log(error,'error while fetching');
        
    }
 }

 useEffect(()=>{
   
   getData(url)
    
 },[])



 const [albumId,setAlbumId]=useState([])

 let uniqueAlbumId = data && [...new Set(data.map((elm) => elm.albumId))];

 const handleSee=(elm1)=>{


  const filterAlbum=data&&data.filter((elm)=>elm.albumId===elm1)

console.log(filterAlbum,'filterAlbum');

  setAlbumId(filterAlbum)
 }
 

 
    return (

    
    <div>Album Component


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {
    uniqueAlbumId.length > 0 && uniqueAlbumId.map((elm, index) => {
      return (
        <div key={index} className="bg-red-200 flex justify-center items-center rounded-lg shadow-md hover:bg-red-300 transition-all duration-200">
          <button 
            className="bg-red-500 text-white py-5 px-5 rounded-lg hover:bg-red-600 transition-all duration-200"
            onClick={() => handleSee(elm)}
          >
            {elm}
          </button>
        </div>
      );
    })
  }
</div>



         
         <div className='w-50% border  border-l-black-100'>
           {
            albumId.length>0&&albumId.map((elm,id)=>{
                return <div key={elm.id} className='flex border  border-l-black-50 justify-center p-2 '>
                    <img src={elm.thumbnailUrl} alt="image"/>
                    <h2>{elm.title}</h2>

                </div>
            })
           }
         </div>


    </div>
  )
}

export default Album