import {useEffect, useState} from 'react'
import {Colors} from './Text'
import './f.css'
import Values from 'values.js'
import SingleColor from './SingleColor'

export default function App() {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState( new Values('#f15025').all(10)) // 100 / 10 = 10
  useEffect(()=>{
    const y = setTimeout(()=>{
      setError(false)
    },3000)
    return ()=> clearTimeout(y)
  },[error])
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
          let colors = new Values(color).all(10)
          setList(colors)
       }
    catch(error){
      setError(true)
      console.log(error)
    }
  }
  return(
    <>
    <section>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error ? 'border_red' : null}`}type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025'/>
        <button className='btn bg-success p-3 m-3' type='submit'>Submit</button>
      </form>
    </section>
    <section className='d-flex gap-1 flex-wrap'>
      {list.map((x,index)=>{
        return <SingleColor ket={index} {...x} index={index} hexColor={x.hex} />
      })}
    </section>
    </>
  )
}

