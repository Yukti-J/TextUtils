import React from 'react'

function Alerts(props) {
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show position-relative`} role="alert">
  {props.alert.message}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    
  )
}

export default Alerts
