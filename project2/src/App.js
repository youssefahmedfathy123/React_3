import { Contacts } from "./Text";
import {useState} from 'react'
import Single from "./Single";
import Btn from './Btn'
const App = () =>{  
    const [state,setstate] = useState(Contacts)
    const [category,setCategory] = useState(['all',...new Set(state.map(x=>x.category))])
  console.log(category)
  const Boss = (xMark) => {
    if(xMark == 'all'){
   setstate(Contacts)
   return;
    }
    const y = Contacts.filter(c=> c.category == xMark)
  setstate(y)
  }

return (
<>
<h1 className="bg-danger text-center rounded my-3 text-light py-3">Our Contacts</h1>
<Btn category = {category} Fun = {Boss} />
 { state.map( con =>{
  const {category,id,title,parag} = con 

    return   <div className='container bg-success my-3 p-2 rounded' key={id}>
            <div>{title}</div>
            <div>{parag}</div>
            </div>
    }
    ) }
</>
)


}



export default App;