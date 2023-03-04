import React,{useEffect, useState} from 'react'

function ClickMe() {
    const [list,setList] = useState([]);
    const clickAction = ()=>{
        setList([...list,{
            id: list.length,
            value: Math.floor(Math.random() * 10)
        }])


    }

    

  return (
    <div>
       <button type="button" onClick={clickAction} className="btn btn-dark">Click Here</button>
        <ul>
            {list.map((list)=>(
                <li key={list.id}>{list.value}</li>
            ))}
        </ul>

    </div>
  )
}

export default ClickMe
