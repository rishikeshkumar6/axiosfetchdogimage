import React,{useState,useEffect} from 'react'
import './fetchdogimage.css'
export  function FetchdogImage(){
    
    const [image,setimage]=useState('')
    useEffect(()=>{
    async function  Fetchdata(){
    const request= await fetch("https://dog.ceo/api/breeds/image/random")
    const response=await request.json()
    setimage(response.message)
    }
    Fetchdata()
    },[])
    return (
        <div>
           
            <img src={image} height={'600px'} width={'700px'}/>
        </div>
    )
}