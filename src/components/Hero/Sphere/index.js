import React from "react"
import "./sphere.scss"

function Shpere(props) {
  const divs = Array.apply(null, Array(500)).map(function (x, i) {
    return <div className="c" key={i}></div>
  })

  return <div className="wrap">{divs}</div>
}

export default Shpere
