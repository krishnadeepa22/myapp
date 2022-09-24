import React from 'react'

function Welcome(props) {
  return (
    <div>
        <h1>Welcome!!.....<br>
             </br>{props.name}<br>
             </br>{props.usn}<br>
             </br>{props.email}<br>
             </br>{props.sem}</h1>
    </div>
    
  )
}

function Props() {
    return (
        <Welcome name="Name: Deepa"
        usn="USN:4mk19cs012"
        email="EMAIL:deepa@gmail.com"
        sem="SEM:7"/>
    )
}
export default Props