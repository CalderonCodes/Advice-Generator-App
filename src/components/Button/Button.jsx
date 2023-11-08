import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className="btn btn-lg hover:bg-NeonGreen hover:shadow-[0_0px_40px_rgba(83,_255,_171,_0.7)] absolute -bottom-8 btn-circle bg-NeonGreen border-none">
        <img src="assets/icon-dice.svg" alt="" />
</button>
  )
}

export default Button