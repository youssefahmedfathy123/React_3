import { useState ,useEffect} from "react"

export default function SingleColor({rgb,weight,index,hexColor}) {
    const [alert,setAlert] =useState(false)
    const bcg = rgb.join(',')
    useEffect(()=>{
      const timeOut = setTimeout(()=>{
        setAlert(false)
      },3000)
      return () => clearTimeout(timeOut)
    },[alert])
    
  return (
    <article className="arti"
    style={{
        backgroundColor:`rgb(${bcg})`
    }}
    onClick={()=> {setAlert(true)
    navigator.clipboard.writeText(`#${hexColor}`)
  }
    }
    >
        <div className={`text-center pt-3 ${index > 8 && 'color_white'}`}>
      <p> {weight}% </p> 
      <p> #{hexColor}</p>
      {alert && <p style={{
        color:'gray'
      }}>copied to clipboard</p>}
      </div>
    </article>
  )
}
