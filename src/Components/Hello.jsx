import React from 'react'
import { Link,Navigate } from '@reach/router'

const Hello = props => {
    return(
        <div>
            {parseInt(props.id) 
            ? <h1 style={{color:`${props.color}`,backgroundColor:`${props.background}`}}>The number is: {props.id}</h1> 
            : <h1 style={{color:`${props.color}`,backgroundColor:`${props.background}`}}>The word is: {props.id}</h1>}
        </div>
    )
}

export default Hello