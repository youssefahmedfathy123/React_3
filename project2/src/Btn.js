import React from 'react'

export default function Btn({category,Fun}) {
  return (
    <>
    <div className='text-center'>
    {
        category.map((x,index)=>
            <button onClick={()=>Fun(x)} className='btn mx-3 bg-info'key={index}>{x}</button>
            )
    }
    </div>
    </>
  )
}
