import React from 'react'

export default function Alert(props) {
  return (
    
      props.alert && <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        {props.alert.typ} , {props.alert.msg}
        
      </div>
    </div>
  )
}
