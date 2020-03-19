import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
  return (
    <>
    <h1 className={props.class}>
      {props.children}
    </h1>
    <h3>{props.desc}</h3>
    {/* <p>{props.x + props.y}</p> */}
    </>
  )
}

TodoHeader.propTypes = {
  desc: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number
}
