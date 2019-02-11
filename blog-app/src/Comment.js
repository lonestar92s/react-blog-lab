import React from 'react'

//this is a functional stateless component1
export default Comment = (props) => {
    return (
        <li key={props.key}>
            <p>{props.comment}</p>
        </li>
    )
}