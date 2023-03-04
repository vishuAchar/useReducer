import React from 'react'
import { useState } from 'react'


function Form() {
    const[formData,setFormData]= useState({
      firstName: '',
      lastName :'',
      userName :'',
      userCity :'',
      userState :'',
      userZip :'',
      userAgreed:'',
    })
    
    const onChangeHandler =(event)=>{
    // console.log(event)
      if(event.target.name==='userAgreed'){
          setFormData(()=>({
          ...formData,[event.target.name]:event.target.checked
      }))
      }else
      {
          setFormData(()=>({
          ...formData,[event.target.name]:event.target.value
      }))
      }
    }
  return (
    <div>
      <h1>Form</h1>
        <form className="row g-3 needs-validation" >
        <div className="col-md-4 mx-2">
          <label htmlFor="validationCustom01" className="form-label">First name</label>
          <input type="text" onChange={onChangeHandler} value={formData.firstName} className="form-control" name='firstName'/>
          
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Last name</label>
          <input type="text" onChange={onChangeHandler} value={formData.lastName} className="form-control" name='lastName' required/>
          
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" onChange={onChangeHandler} className="form-control" name='userName' value={formData.userName} aria-describedby="inputGroupPrepend" placeholder={`Ex:name@gmail.com`} required/>
          
        </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">City</label>
          <input type="text" onChange={onChangeHandler} value={formData.userCity} className="form-control" name='userCity' required/>
        
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">State</label>
          <select className="form-select" onChange={onChangeHandler} name='userState' value={formData.userState} required>
            <option defaultValue= 'Select state'> Choose... </option>
            <option value="Karnataka">Karnataka</option>
            <option value="TamilNadu">TamilNadu</option>
            <option value="Maharastra">Maharastra</option>
          </select>
      
         
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Zip</label>
          <input type="text" onChange={onChangeHandler} className="form-control" name='userZip' value={formData.userZip} required/>
         
        </div>
        <div className="col-12">
          <div className="form-check">
          <input className="form-check-input" onChange={onChangeHandler} type="checkbox"  name='userAgreed'  required/>
            <label className="form-check-label">
            Agree to terms and conditions
            </label>
          </div>
        </div>
        <div>
        <button className="btn btn-primary"  onClick={()=>console.log(formData)} type="submit">Submit form</button>
      </div>
    </form>
      
    </div>
  )
}

export default Form;
