import React from 'react'
import { Link,Navigate } from '@reach/router'

const Four = props => {
    return(
        <div>
            {parseInt(props.id) ? <h1>The number is: {props.id}</h1> : <h1>The word is: {props.id}</h1>}
        </div>
    )
}

export default Four