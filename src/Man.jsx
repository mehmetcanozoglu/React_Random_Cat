import React from 'react'
import {useState} from 'react'

function Man() {

    const [imgUrl,setImgUrl]=useState("");
    let callImg = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => setImgUrl(data[0].url))
    }
   

  return (
    <>
    <div className='container'>
        <div className='box'>
            <h2>Enjoy the cat</h2>
            <img src={imgUrl} alt="" />
            <button onClick={() => callImg()}>Click me</button>
        </div>
    </div>
    </>
  )
}

export default Man