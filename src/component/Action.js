import React,{useState} from 'react'

const Action = () => {
    const[resType,setResType] = useState('Like')
  return (
    <div>
        <div>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={()=> setResType('Like')}>Like</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={()=> setResType('Post')}>Post</button>
        <button type="button" className="btn btn-outline-primary mx-1" onClick={()=> setResType('Comment')}>comment</button>
        <button type="button" className="btn btn-primary" onClick={()=> setResType('Comment')}>Primary</button>
        <h3>{resType}</h3>
        </div>
    </div>
  )
}

export default Action
