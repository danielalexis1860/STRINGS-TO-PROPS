import React from "react"

export default function Done(props){
    console.log(props.isPun)
    return(
        <div>
       {props.setup &&  <h3>Setup: {props.setup}</h3>} 
          <p>Punchline: {props.punchline}</p>
          <hr />
    </div>
    ) // can try console.log(props.comments) instead of console.log(props.isPun)
}