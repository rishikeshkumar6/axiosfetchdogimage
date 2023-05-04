import React,{useState,useEffect} from 'react'
import './fetchdogimage.css'
import axios from 'axios'
export  function FetchdogImage(){
    
    const [image,setimage]=useState('')
    useEffect(()=>{
    async function  Fetchdata(){
    const response= await axios.get("https://dog.ceo/api/breeds/image/random")
    setimage(response.data['message'])
    }
    Fetchdata()
    },[])
    return (
        <div>
           
            <img src={image} height={'600px'} width={'700px'} />
        </div>
    )
}